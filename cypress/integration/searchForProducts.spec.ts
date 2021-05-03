import { FILTER_CATEGORIES_URL } from "../fixtures/constants";
import MainPage from "../pageobjects/mainPage"
import ProductsPage from "../pageobjects/productsPage";

describe("Filtering the products", () => {
    beforeEach(() => {
        MainPage.visit();
    })

    it('should filter t-shirts', () => {
        MainPage.clickOnWomenCategory();
        
        ProductsPage.clickOnTopsCategory();
        ProductsPage.clickOnTShirtsCategory();

        ProductsPage.verifyTShirtCategorySelected();
    })

    it.skip('should filter pink dresses', () => {
        cy.intercept(`${FILTER_CATEGORIES_URL}/*`).as('filter');

        MainPage.clickOnWomenCategory();
        ProductsPage.filterForPinkDresses();

        cy.wait('@filter').its('response.statusCode').should("be.eq", "200");
    })
})