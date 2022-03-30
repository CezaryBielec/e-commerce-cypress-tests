import { SIGN_IN_PAGE, WOMEN_CATEGORY_URL } from "../fixtures/constants"
import CartPage from "../pageobjects/cartPage";
import MainPage from "../pageobjects/mainPage"
import MyAccountPage from "../pageobjects/myAccountPage";
import ProductsPage from "../pageobjects/productsPage";
import SignInPage from "../pageobjects/signInPage";

const emailOfExistingAccount = Cypress.env('CYPRESS_ACCOUNT_EMAIL');
const passwordOfExistingAccount = Cypress.env('CYPRESS_ACCOUNT_PASSWORD');

describe("My account", () => {

    beforeEach(() => {
        SignInPage.
            visit(SIGN_IN_PAGE).
            logIn(emailOfExistingAccount, passwordOfExistingAccount);
    })

    it('verifies last order is visible in my profile orders list', () => {
        MainPage.
            visit(WOMEN_CATEGORY_URL);
        ProductsPage.
            addFirstProductToCart().
            clickOnProceedToCheckout();
        CartPage.
            clickOnProceedToCheckoutSummary().
            clickOnProceedToCheckoutAddress().
            clickOnTermsOfServiceCheckbox().
            clickOnProceedToCheckoutShipping().
            clickOnPayByBankWire().
            clickOnConfirmOrder().
            
            getOrderReference().then(orderReference => {
                CartPage.
                    clickOnBackToOrders();

                MyAccountPage.
                    getFirstOrderReference().
                    should("equal", orderReference);
            })
    })
})