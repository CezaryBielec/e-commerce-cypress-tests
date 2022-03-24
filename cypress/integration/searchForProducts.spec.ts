import MainPage from "../pageobjects/mainPage"
import ProductsPage from "../pageobjects/productsPage";

describe("Filtering the products", () => {
    beforeEach(() => {
        MainPage.
            visit();
    })

    it('searches for blouse in WOMEN category', () => {
        MainPage.
            clickOnCategory('Women');
        
        ProductsPage.
            clickOnSubcategory('Tops').
            clickOnSubcategory('Blouses');

        ProductsPage.
            getItemFromProductsList("Blouse").
            should('exist');
    })

    it('searches for Printed Summer Dress in DRESSES category', () => {
        MainPage.
            clickOnCategory('Dresses');

        ProductsPage.
            clickOnSubcategory('Summer Dresses').
            filterByColor('White');

        ProductsPage.getItemFromProductsList("Printed Summer Dress")
    })

    it('triggers empty state in T-SHIRTS category', () => {
        MainPage.
            clickOnCategory('T-shirts');

        ProductsPage.changePriceRange(0);

        ProductsPage.verifyEmptyStateIsDisplayed().should('exist');
    })
})