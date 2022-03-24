import * as selectors from "../selectors/productsPageSelectors";

type Subcategories = "Tops" | "Dresses" | "T-shirts" | "Blouses" | "Casual Dresses" | "Evening Dresses" | "Summer Dresses";
type Colors = "White" | "Black" | "Orange" | "Blue" | "Green" | "Yellow";

class ProductsPage {

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

    private verifyCategorySelected(categoryName: string) {
        cy.get(selectors.categoryNameBanner).should("contain.text", categoryName);
    }

    clickOnSubcategory(subcategory: Subcategories) {
        cy.xpath(selectors.subcategoryXpathSelector(subcategory)).click();
        return this;
    }

    getItemFromProductsList(productName) {
        return cy.xpath(selectors.productItemXpathSelector(productName));
    }

    filterByColor(color: Colors) {
        cy.xpath(selectors.colorFilterXpathSelector(color)).click();
        return this;
    }

    verifyTShirtCategorySelected() {
        this.verifyCategorySelected("T-shirts");
    }

    changePriceRange(xCooridnateOfTheSlider: number) {
        cy.xpath(selectors.rightEndOfThePriceRangeSlider).
            trigger('mousedown', {which: 1}).
            trigger('mousemove', {which: 1, pageX: xCooridnateOfTheSlider}).
            trigger('mouseup', {which: 1});
    }

    verifyEmptyStateIsDisplayed() {
        return cy.xpath(selectors.productsListEmptyStateXpathSelector);
    }
}

export default new ProductsPage();