import * as selectors from "../selectors/productsPageSelectors";

type Subcategories = "Tops" | "Dresses" | "T-shirts" | "Blouses" | "Casual Dresses" | "Evening Dresses" | "Summer Dresses";
type Colors = "White" | "Black" | "Orange" | "Blue" | "Green" | "Yellow";

class ProductsPage {

    addFirstProductToCart() {
        cy.get(selectors.productContainerSelector).first().trigger('mouseover');
        cy.get(selectors.addToCartButtonSelector).first().click();
        return this;
    }

    clickOnProceedToCheckout() {
        cy.get(selectors.cartPopupSelector).get(selectors.proceedToCheckoutButtonSelector).click();
    }

    clickOnContinueShopping() {
        cy.get(selectors.continueShoppingButtonSelector).click();
        return this;
    }

    getNumberOfProductsInCartPanel() {
        return cy.get(selectors.numberOfProductsInCartSelector);
    }

    removeItemFromCart() {
        cy.get(selectors.cartSectionSelector).trigger('mouseover');
        cy.get(selectors.removeItemsFromCartButtonSelector).click();
    }

    verifyCartIsEmpty() {
        cy.get(selectors.noProductsInCartSelector);
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
        this.unrollFiltersMenuIfMobileVersion();
        cy.xpath(selectors.colorFilterXpathSelector(color)).click();
        return this;
    }

    verifyTShirtCategorySelected() {
        this.verifyCategorySelected("T-shirts");
    }

    changePriceRange(xCooridnateOfTheSlider: number) {
        this.unrollFiltersMenuIfMobileVersion();
        cy.xpath(selectors.rightEndOfThePriceRangeSlider).
            trigger('mousedown', { which: 1 }).
            trigger('mousemove', { which: 1, pageX: xCooridnateOfTheSlider }).
            trigger('mouseup', { which: 1 });
    }

    private unrollFiltersMenuIfMobileVersion() {
        if(Cypress.config("viewportWidth") == 393) {
            cy.get(selectors.unrollFiltersButtonIdSelector).click();
        }
    }

    verifyEmptyStateIsDisplayed() {
        return cy.xpath(selectors.productsListEmptyStateXpathSelector);
    }

    openCart() {
        cy.get(selectors.cartSectionSelector).click();
    }
}

export default new ProductsPage();