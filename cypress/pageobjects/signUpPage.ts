import * as selectors from "../selectors/signUpPageSelectors";
import { validationSelector } from "../selectors/signInPageSelectors";
import { ADDRESS, CITY, ZIPCODE, PHONE_NUMBER } from "../fixtures/constants";
import Page from "./page";
const faker = require('faker');

class SignUpPage extends Page {

    verifySignUpPageOpened() {
        return cy.url();
    }

    fillForm() {
        const name = faker.name.firstName();
        const lastName = faker.name.lastName();

        cy.get(selectors.mrGenderRadioButtonSelector).click();
        cy.get(selectors.firstNameInputSelector).type(name);
        cy.get(selectors.lastNameInputSelector).type(lastName);
        cy.get(selectors.passwordInputSelector).type("password");
        cy.get(selectors.dateOfBirthDaysDropdownSelector).select("8");
        cy.get(selectors.dateOfBirthMonthsDropdownSelector).select("September")
        cy.get(selectors.dateOfBirthYearsDropdownSelector).select("1997")
        cy.get(selectors.addressInputSelector).type(ADDRESS);
        cy.get(selectors.cityInputSelector).type(CITY);
        cy.get(selectors.stateDropdownSelector).select("New York");
        cy.get(selectors.zipCodeInputSelector).type(ZIPCODE);
        cy.get(selectors.mobilePhoneSelector).type(PHONE_NUMBER);
        
        return this;
    }

    clickOnRegister() {
        cy.get(selectors.registerButtonSelector).click();
    }

    getValidation() {
        return this.getValidationText(validationSelector);
    }
}

export default new SignUpPage();