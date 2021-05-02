import * as selectors from "../selectors/cartSelectors";

class CartPage {
    clickOnProceedToCheckoutSummary() {
        cy.get(selectors.proceedToCheckoutSummaryButtonSelector).click();
    }
    clickOnProceedToCheckoutAddress() {
        cy.get(selectors.proceedToCheckoutAddressButtonSelector).click();
    }
    clickOnProceedToCheckoutShipping() {
        cy.get(selectors.proceedToCheckoutShippingButtonSelector).click();
    }
    clickOnTermsOfServiceCheckbox() {
        cy.get(selectors.termsOfServiceCheckboxSelector).click();
    }
    clickOnPayWithBankWire() {
        cy.get(selectors.payByBankWireButtonSelector).click();
    }
    clickOnConfirmOrder() {
        cy.get(selectors.confirmOrderButtonSelector).click();
    }
    confirmOrderCompleted() {
        cy.contains('Your order on My Store is complete.');
    }
}

export default new CartPage();