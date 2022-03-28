import Page from "./page";
import * as selectors from "../selectors/myAccountSelectors";

class MyAccountPage extends Page {

    getFirstOrderReference() {
        return cy.xpath(selectors.firstOrderReferenceXpathSelector).then(el => {
            return this.normalizeText(el.text());
        });
    }
}

export default new MyAccountPage();