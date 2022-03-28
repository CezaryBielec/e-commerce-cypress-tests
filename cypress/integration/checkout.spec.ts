import SignInPage from "../pageobjects/signInPage";
import MainPage from "../pageobjects/mainPage";
import ProductsPage from "../pageobjects/productsPage";
import CartPage from "../pageobjects/cartPage";

const emailOfExistingAccount = Cypress.env('email');
const passwordOfExistingAccount = Cypress.env('password');

describe("Checkout", () => {

    beforeEach(() => {
        SignInPage.
            visitSignInPage().
            logIn(emailOfExistingAccount, passwordOfExistingAccount);
        MainPage.
            clickOnCategory('Women');
    })

    it("should complete an order", () => {
        ProductsPage.addFirstProductToCart();
        ProductsPage.clickOnProceedToCheckout();
        CartPage.clickOnProceedToCheckoutSummary();
        CartPage.clickOnProceedToCheckoutAddress();
        CartPage.clickOnTermsOfServiceCheckbox();
        CartPage.clickOnProceedToCheckoutShipping();
        CartPage.clickOnPayWithBankWire();
        CartPage.clickOnConfirmOrder();

        CartPage.confirmOrderCompleted();
    })
})