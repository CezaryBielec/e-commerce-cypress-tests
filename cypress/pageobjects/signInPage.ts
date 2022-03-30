import { SIGN_IN_PAGE } from "../fixtures/constants";
import * as selectors from "../selectors/signInPageSelectors";
import Page from "./page";
import FakeDataClient from "../support/FakeDataClient";

class SignInPage extends Page {

    visitSignInPage() {
        this.visit(SIGN_IN_PAGE);
        return this;
    }

    enterRandomEmailAddress() {
        const emailAddress = FakeDataClient.generateEmail();
        this.enterEmailAddress(emailAddress);
        return this;
    }

    enterEmailAddress(emailAddress: string) {
        cy.get(selectors.emailAddressInputIdSelector).then(el => {
            if (emailAddress.length != 0) cy.wrap(el).type(emailAddress)
        });
        return this;
    }

    getValidation() {
        return cy.xpath(selectors.validationXpathSelector).then(el => {
            return this.normalizeText(el.text());
        })
    }

    clickOnCreateAnAccount() {
        cy.get(selectors.createAnAccountButtonIdSelector).click();
    }

    enterEmail(email: string) {
        cy.get(selectors.emailInputIdSelector).type(email);
        return this;
    }

    enterPassword(password: string) {
        cy.get(selectors.passwordInputIdSelector).type(password);
        return this;
    }

    clickOnSignIn() {
        cy.get(selectors.signInButtonIdSelector).click();
    }

    logIn(email: string, password: string) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickOnSignIn();
    }

    preserveAuthCookie() {
        cy.getCookies().then(cookies => {
            expect(cookies[0].value.length > 250);
            const cookieName = cookies[0].name;
            Cypress.Cookies.preserveOnce(cookieName);
        })
    }
}

export default new SignInPage();