import MainPage from "../pageobjects/mainPage"
import ProductsPage from "../pageobjects/productsPage";
import CartPage from "../pageobjects/cartPage";
import { cartEmptyStateText } from "../fixtures/validations";
import { WOMEN_CATEGORY_URL } from "../fixtures/constants";

describe("Cart", () => {
    beforeEach(() => {
        MainPage.
            visit(WOMEN_CATEGORY_URL)
    })

    it("adds product to the cart", () => {
        ProductsPage.
            addFirstProductToCart().
            clickOnProceedToCheckout();

        CartPage.
            getNumberOfProductsInCart().
            should('have.length', 1);
    })

    it("removes product from the cart", () => {
        ProductsPage.
            addFirstProductToCart().
            clickOnProceedToCheckout();
        
        CartPage.
            removeFirstProductFromCart().
            getWarning().
            should('have.text', cartEmptyStateText);
    })

    it('shows number of products in the cart panel', () => {
        ProductsPage.
            addFirstProductToCart().
            clickOnContinueShopping().

            getNumberOfProductsInCartPanel().
            should('have.text', "1");
    })

    it.only('increases number of the same product in cart', () => {
        ProductsPage.
            addFirstProductToCart().
            clickOnProceedToCheckout();

        CartPage.
            increaseQuantityOfFirstProductInCart().
            
            getQuantityOfFirstProductInCart().
            should('have.value', "2");
    })

    it('adds cost of delivery to total cost', () => {
        ProductsPage.
            addFirstProductToCart().
            clickOnProceedToCheckout();

        CartPage.
            getShippingPriceSummary().
            should('have.text', "$2.00")
        CartPage.
            verifyTotalPriceEqualsProductsPlusShipping().
            should('be.true');
    })

    it('adds product with sale price', () => {
        ProductsPage.
            addFirstProductToCart().
            clickOnProceedToCheckout();

        CartPage.
            verifyProductPriceLoweredByDiscount().
            should('be.true');
    })
})