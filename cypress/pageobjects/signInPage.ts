import * as selectors from "../selectors/signInPageSelectors";
import Page from "./page";

const faker = require('faker');

class SignInPage extends Page {
    visitSignInPage() {
        this.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    enterCorrectEmailAddress() {
        const emailAddress = faker.internet.email();
        cy.get(selectors.emailAddressInputSelector).type(emailAddress);
    }

    clickOnCreateAnAccount() {
        cy.get(selectors.createAnAccountButtonSelector).click();
    }

    enterLogin() {
        cy.get(selectors.emailInputSelector).type(Cypress.env('email'));
    }

    enterPassword() {
        cy.get(selectors.passwordInputSelector).type(Cypress.env('password'));
    }

    clickOnSignIn() {
        cy.get(selectors.signInButtonSelector).click();
    }

    logIn() {
        this.enterLogin();
        this.enterPassword();
        this.clickOnSignIn();
    }
}

export default new SignInPage();