import CartPage from "../pageobjects/cartPage";
import MainPage from "../pageobjects/mainPage"
import ProductsPage from "../pageobjects/productsPage";
import SignInPage from "../pageobjects/signInPage";

describe("Cart", () => {
    beforeEach(() => {
        SignInPage.visitSignInPage();
        SignInPage.logIn();
        MainPage.clickOnWomenCategory();
    })

    it("should add product to the card", () => {
        ProductsPage.addFirstProductToCart();

        ProductsPage.verifyOneItemInCart();
    })

    it("should remove product from the cart", () => {
        ProductsPage.addFirstProductToCart();
        ProductsPage.clickOnContinueShopping();
        ProductsPage.removeItemFromCart();

        ProductsPage.verifyCartIsEmpty();
    })
})