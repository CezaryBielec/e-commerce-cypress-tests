import * as selectors from "../selectors/productsPageSelectors";

class ProductsPage {
    filterForPinkDresses() {
        cy.get(selectors.dressesCategoryCheckboxSelector).click();
        cy.get(selectors.pinkCategoryCheckboxSelector).click();
    }
    addFirstProductToCart() {
        cy.get(selectors.productContainerSelector).first().trigger('mouseover');
        cy.get(selectors.addToCartButtonSelector).first().click();
    }
    clickOnProceedToCheckout() {
        cy.get(selectors.cartPopupSelector).get(selectors.proceedToCheckoutButtonSelector).click();
    }
    verifyOneItemInCart() {
        cy.get(selectors.numberOfProductsInCartSelector).should('have.text', "1");
    }
    removeItemFromCart() {
        cy.get(selectors.cartSectionSelector).trigger('mouseover');
        cy.get(selectors.removeItemsFromCartButtonSelector).click();
    }
    verifyCartIsEmpty() {
        cy.get(selectors.noProductsInCartSelector);
    }
    clickOnContinueShopping() {
        cy.get(selectors.continueShoppingButtonSelector).click();
    }
}

export default new ProductsPage();