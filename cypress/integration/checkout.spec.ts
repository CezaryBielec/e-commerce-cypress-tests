import SignInPage from "../pageobjects/signInPage";
import MainPage from "../pageobjects/mainPage";
import ProductsPage from "../pageobjects/productsPage";
import CartPage from "../pageobjects/cartPage";
import { termsAndConditionsRequiredText } from "../fixtures/validations";
import { WOMEN_CATEGORY_URL } from "../fixtures/constants";
import MyAddressesPage from "../pageobjects/myAddressesPage";
import FakeDataClient from "../support/FakeDataClient";

const emailOfExistingAccount = Cypress.env('CYPRESS_ACCOUNT_EMAIL');
const passwordOfExistingAccount = Cypress.env('CYPRESS_ACCOUNT_PASSWORD');
const randomAddressTitile = FakeDataClient.generateAlphaNumericName();

describe("Checkout", () => {

    describe("as logged in user", () => {

        before(() => {
            SignInPage.
                visitSignInPage().
                logIn(emailOfExistingAccount, passwordOfExistingAccount);
        })

        beforeEach(() => {
            SignInPage.
                preserveAuthCookie();
            MainPage.
                visit(WOMEN_CATEGORY_URL)
            ProductsPage.
                addFirstProductToCart().
                clickOnProceedToCheckout();
        })

        it("completes order with bankwire payment", () => {

            CartPage.
                clickOnProceedToCheckoutSummary().
                clickOnProceedToCheckoutAddress().
                clickOnTermsOfServiceCheckbox().
                clickOnProceedToCheckoutShipping().
                clickOnPayByBankWire().
                clickOnConfirmOrder().

                confirmOrderCompleted();
        })

        it("completes order with check payment", () => {

            CartPage.
                clickOnProceedToCheckoutSummary().
                clickOnProceedToCheckoutAddress().
                clickOnTermsOfServiceCheckbox().
                clickOnProceedToCheckoutShipping().
                clickOnPayByCheck().
                clickOnConfirmOrder().

                confirmOrderCompleted();
        })

        it("triggers terms and conditions validation", () => {
            CartPage.
                clickOnProceedToCheckoutSummary().
                clickOnProceedToCheckoutAddress().
                clickOnProceedToCheckoutShipping().

                getTermsAndConditionsError().
                should("have.text", termsAndConditionsRequiredText);
        })

        it("adds new address during checkout and completes the order", () => {
            CartPage.
                clickOnProceedToCheckoutSummary().
                clickOnAddNewAddress();

            MyAddressesPage.
                fillFormAndNameAddress(randomAddressTitile).
                saveNewAddress();

            CartPage.
                changeShippingAddress(randomAddressTitile).
                clickOnProceedToCheckoutAddress().
                clickOnTermsOfServiceCheckbox().
                clickOnProceedToCheckoutShipping().
                clickOnPayByCheck().
                clickOnConfirmOrder().

                confirmOrderCompleted();
        })

        it('verifies order flow is not broken while getting back to previous steps', () => {
            CartPage.
                clickOnProceedToCheckoutSummary().
                clickOnConitnueShoppingBackButton().
                clickOnProceedToCheckoutSummary().
                clickOnProceedToCheckoutAddress().
                clickOnConitnueShoppingBackButton().
                clickOnProceedToCheckoutAddress().
                clickOnTermsOfServiceCheckbox().
                clickOnProceedToCheckoutShipping().
                clickOnConitnueShoppingBackButton().
                clickOnTermsOfServiceCheckbox().
                clickOnProceedToCheckoutShipping().
                clickOnPayByBankWire().
                clickOnOtherPaymentMethods().
                clickOnPayByBankWire().
                clickOnConfirmOrder().

                confirmOrderCompleted();
        })

        it('verifies order confirmation content', () => {
            CartPage.getTotalPriceSummary().then((price => {
                CartPage.
                    clickOnProceedToCheckoutSummary().
                    clickOnProceedToCheckoutAddress().
                    clickOnTermsOfServiceCheckbox().
                    clickOnProceedToCheckoutShipping().
                    clickOnPayByBankWire().
                    clickOnConfirmOrder().

                    getOrderConfirmationContent().should('contain', price);
            }));

        })
    })


    describe('as logged out user', () => {

        before(()=>{
            cy.clearCookies();
        })

        beforeEach(() => {
            MainPage.
                visit(WOMEN_CATEGORY_URL);
            ProductsPage.
                addFirstProductToCart().
                clickOnProceedToCheckout();
        })

        it("logs in during checkout and completes the order", () => {

            CartPage.
                clickOnProceedToCheckoutSummary();

            SignInPage.
                logIn(emailOfExistingAccount, passwordOfExistingAccount);

            CartPage.
                clickOnProceedToCheckoutAddress().
                clickOnTermsOfServiceCheckbox().
                clickOnProceedToCheckoutShipping().
                clickOnPayByCheck().
                clickOnConfirmOrder().

                confirmOrderCompleted();
        })
    })
})