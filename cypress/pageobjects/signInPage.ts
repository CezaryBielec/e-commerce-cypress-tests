import * as selectors from "../selectors/signInPageSelectors";
import Page from "./page";

const faker = require('faker');

class SignInPage extends Page {
    visitSignInPage() {
        this.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
        return this;
    }

    enterRandomEmailAddress() {
        const emailAddress = faker.internet.email();
        this.enterEmailAddress(emailAddress);
        return this;
    }

    enterEmailAddress(emailAddress: string) {
        cy.get(selectors.emailAddressInputSelector).then(el => {
            if (emailAddress.length != 0) cy.wrap(el).type(emailAddress)
        });
        return this;
    }

    getValidation() {
        return this.getValidationText(selectors.newAccountEmailValidationSelector);
    }

    clickOnCreateAnAccount() {
        cy.get(selectors.createAnAccountButtonSelector).click();
    }

    enterEmail(email: string) {
        cy.get(selectors.emailInputSelector).type(email);
        return this;
    }

    enterPassword(password: string) {
        cy.get(selectors.passwordInputSelector).type(password);
        return this;
    }

    clickOnSignIn() {
        cy.get(selectors.signInButtonSelector).click();
    }

    logIn(email: string, password: string) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickOnSignIn();
    }
}

export default new SignInPage();