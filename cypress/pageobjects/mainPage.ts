import * as selectors from "../selectors/pageSelectors";
import Page from "./page";

class MainPage extends Page {
    clickOnSignIn() {
        cy.get(selectors.signInButtonSelector).click();
    }

    clickOnWomenCategory() {
        cy.get(selectors.womenCategorySelector).first().click();
    }
}

export default new MainPage();