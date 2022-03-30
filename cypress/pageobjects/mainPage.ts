import { signInButtonSelector } from "../selectors/pageSelectors";
import * as selectors from "../selectors/mainPageSelectors";
import Page from "./page";

type Categories = "Women" | "Dresses" | "T-shirts";

class MainPage extends Page {

    clickOnSignIn() {
        cy.get(signInButtonSelector).click();
    }

    clickOnCategory(category: Categories) {
        cy.get("body").then(body => {
            if(body.find(selectors.mobileCategoryClass).length) {
                cy.get(selectors.categoriesMenuClassSelector).click()
            }
        })
        cy.xpath(selectors.categoryXpathSelector(category)).last().click();
    }
}

export default new MainPage();