import * as selectors from "../selectors/signUpPageSelectors";
import { ADDRESS, CITY, ZIPCODE, PHONE_NUMBER } from "../fixtures/constants";
const faker = require('faker');

class SignUpPage {
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
    }

    clickOnRegister() {
        cy.get(selectors.registerButtonSelector).click();
    }
}

export default new SignUpPage();