import SignInPage from "../pageobjects/signInPage";
import MainPage from "../pageobjects/mainPage";
import ProductsPage from "../pageobjects/productsPage";
import CartPage from "../pageobjects/cartPage";

describe("Checkout", () => {
    beforeEach(() => {
        SignInPage.visitSignInPage();
        SignInPage.logIn();
        MainPage.clickOnWomenCategory();
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