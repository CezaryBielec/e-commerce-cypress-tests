import * as selectors from "../selectors/pageSelectors";
import Page from "./page";

type Categories = "Women" | "Dresses" | "T-shirts";

class MainPage extends Page {

    clickOnSignIn() {
        cy.get(selectors.signInButtonSelector).click();
    }

    clickOnCategory(category: Categories) {
        cy.xpath(selectors.categorySelector(category)).last().click();
    }
}

export default new MainPage();