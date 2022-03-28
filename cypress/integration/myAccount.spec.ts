import { SIGN_IN_PAGE, WOMEN_CATEGORY_URL } from "../fixtures/constants"
import CartPage from "../pageobjects/cartPage";
import MainPage from "../pageobjects/mainPage"
import MyAccountPage from "../pageobjects/myAccountPage";
import ProductsPage from "../pageobjects/productsPage";
import SignInPage from "../pageobjects/signInPage";

const emailOfExistingAccount = Cypress.env('email');
const passwordOfExistingAccount = Cypress.env('password');

describe("My account", () => {

    it('verifies last order is visible in my profile orders list', () => {
        SignInPage.
            visit(SIGN_IN_PAGE).
            logIn(emailOfExistingAccount, passwordOfExistingAccount);
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