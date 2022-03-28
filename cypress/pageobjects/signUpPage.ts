import * as selectors from "../selectors/signUpPageSelectors";
import { validationXpathSelector } from "../selectors/signInPageSelectors";
import Page from "./page";
import FakeDataClient from "../support/FakeDataClient";

const addressInfo = FakeDataClient.generateAddressInfo();

class SignUpPage extends Page {

    verifySignUpPageOpened() {
        return cy.url();
    }

    fillForm() {
        cy.get(selectors.mrGenderRadioButtonSelector).click();
        cy.get(selectors.firstNameInputSelector).type(addressInfo.name);
        cy.get(selectors.lastNameInputSelector).type(addressInfo.lastName);
        cy.get(selectors.passwordInputSelector).type("password");
        cy.get(selectors.dateOfBirthDaysDropdownSelector).select(addressInfo.day);
        cy.get(selectors.dateOfBirthMonthsDropdownSelector).select(addressInfo.month)
        cy.get(selectors.dateOfBirthYearsDropdownSelector).select(addressInfo.year)
        cy.get(selectors.addressInputSelector).type(addressInfo.address);
        cy.get(selectors.cityInputSelector).type(addressInfo.city);
        cy.get(selectors.stateDropdownSelector).select(addressInfo.state);
        cy.get(selectors.zipCodeInputSelector).type(addressInfo.zipCode);
        cy.get(selectors.mobilePhoneSelector).type(addressInfo.phoneNumber);

        return this;
    }

    clickOnRegister() {
        cy.get(selectors.registerButtonSelector).click();
    }

    getValidation() {
        return cy.xpath(validationXpathSelector).then(el => {
            return this.normalizeText(el.text());
        })
    }
}

export default new SignUpPage();