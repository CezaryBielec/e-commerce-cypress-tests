import Page from "./page";
import FakeDataClient from "../support/FakeDataClient";
import * as selectors from "../selectors/myAddressesSelectors";

const addressInfo = FakeDataClient.generateAddressInfo();

class MyAddressesPage extends Page {

    fillFormAndNameAddress(adressTitle: string) {
        cy.get(selectors.firstNameInputIdSelector).type(addressInfo.name);
        cy.get(selectors.lastNameInputIdSelector).type(addressInfo.lastName);
        cy.get(selectors.addressInputIdSelector).type(addressInfo.address);
        cy.get(selectors.cityInputIdSelector).type(addressInfo.city);
        cy.get(selectors.stateSelectIdSelector).select(addressInfo.state);
        cy.get(selectors.zipCodeInputIdSelector).type(addressInfo.zipCode);
        cy.get(selectors.mobilePhoneInputIdSelector).type(addressInfo.phoneNumber);
        cy.get(selectors.addressTitileIdSelector).clear().type(adressTitle);

        return this;
    }

    saveNewAddress() {
        cy.get(selectors.saveAddressButtonIdSelector).click();
    }
}

export default new MyAddressesPage();