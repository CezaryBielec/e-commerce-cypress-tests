import { MY_ACCOUNT_URL } from "../fixtures/constants";
import * as selectors from "../selectors/pageSelectors";

class MyAccountPage {
    verifyUserIsLoggedIn() {
        cy.url().should("equal", MY_ACCOUNT_URL);
        cy.get(selectors.signOutButtonSelector);
    }

}

export default new MyAccountPage();