import { normalize } from "path";
import * as selectors from "../selectors/cartSelectors";
import Page from "./page";

class CartPage extends Page {

    getNumberOfProductsInCart() {
        return cy.xpath(selectors.productsInCartXpathSelector);
    }

    removeFirstProductFromCart() {
        cy.get(selectors.removeProductButtonClassSelector).first().click();
        return this;
    }

    getWarning() {
        return cy.get(selectors.alertWarningInShoppingCartSummaryViewClassSelector);
    }

    increaseQuantityOfFirstProductInCart() {
        cy.get(selectors.increaseNumberOfProductButtonIdSelector).first().click();
        return this;
    }

    getQuantityOfFirstProductInCart() {
        return cy.xpath(selectors.quantityOfProductInCartXpathSelector).first();
    }

    getProductsPriceSummary() {
        return cy.get(selectors.productsPriceSummaryIdSelector).then(el => {
            return this.normalizePrice(el.text());
        });
    }

    getShippingPriceSummary() {
        return cy.get(selectors.shippingPriceSummaryIdSelector).then(el => {
            return this.normalizePrice(el.text());
        });
    }

    getTotalPriceSummary() {
        return cy.get(selectors.totalPriceSummaryIdSelector).then(el => {
            return this.normalizePrice(el.text());
        });
    }

    verifyTotalPriceEqualsProductsPlusShipping() {
        return this.getTotalPriceSummary().then(totalPrice => {

            this.getProductsPriceSummary().then(productsPrice => {

                this.getShippingPriceSummary().then(shippingPrice => {

                    return cy.wrap(totalPrice == (productsPrice + shippingPrice));
                })
            })
        })
    }

    getOriginalProductPrice() {
        return cy.get(selectors.originalProductPriceClassSelector);
    }

    getDiscountValue() {
        return cy.get(selectors.discountClassSelector);
    }

    getProductPriceAfterDiscount() {
        return cy.get(selectors.productPriceClassSelector);
    }

    verifyProductPriceLoweredByDiscount() {
        return this.getOriginalProductPrice().then(el => {
            let originalPrice = this.normalizePrice(el.text());

            this.getDiscountValue().then(el => {
                let discountValue = this.normalizeDiscount(el.text());

                this.getProductPriceAfterDiscount().then(el => {
                    let priceAfterDiscount = this.normalizePrice(el.text());
                    let actualPriceAfterDiscount = this.calculatePriceAfterDiscount(originalPrice, discountValue);
                    return cy.wrap(actualPriceAfterDiscount == priceAfterDiscount);
                })
            })
        })
    }

    clickOnProceedToCheckoutSummary() {
        cy.xpath(selectors.proceedToCheckoutSummaryButtonXpathSelector).click();
        return this;
    }

    clickOnProceedToCheckoutAddress() {
        cy.xpath(selectors.proceedToCheckoutAddressButtonXpathSelector).click();
        return this;
    }

    changeShippingAddress(addressTitle: string) {
        cy.get(selectors.changeShippingAddressSelectIdSelector).select(addressTitle);
        return this;
    }

    clickOnProceedToCheckoutShipping() {
        cy.xpath(selectors.proceedToCheckoutShippingButtonXpathSelector).click();
        return this;
    }

    clickOnTermsOfServiceCheckbox() {
        cy.get(selectors.termsOfServiceCheckboxIdSelector).click();
        return this;
    }

    clickOnPayByBankWire() {
        cy.get(selectors.payByBankWireButtonClassSelector).click();
        return this;
    }

    clickOnPayByCheck() {
        cy.get(selectors.payByCheckButtonClassSelector).click();
        return this;
    }

    clickOnConfirmOrder() {
        cy.xpath(selectors.confirmOrderButtonXpathSelector).click();
        return this;
    }

    clickOnConitnueShoppingBackButton() {
        cy.xpath(selectors.continueShoppingBackButtonXpathSelector).click();
        return this;
    }

    clickOnOtherPaymentMethods() {
        cy.xpath(selectors.otherPaymentMethodsButtonXpathSelector).click();
        return this;
    }

    clickOnAddNewAddress() {
        cy.xpath(selectors.addNewAddressXpathSelector).click();
    }

    getTermsAndConditionsError() {
        return cy.get(selectors.termsAndConditionsErrorClassSelector);
    }

    confirmOrderCompleted() {
        cy.contains('Your order on My Store is complete.');
    }

    getOrderConfirmationContent() {
        return cy.xpath(selectors.orderConfirmationContentXpathSelector).then(el => {
            return this.normalizeText(el.text());
        });
    }

    getOrderReference() {
        return this.getOrderConfirmationContent().then(orderContent => {
            return cy.wrap(orderContent.match(/reference(.*)in the/)[1].replace(/\s/g, ""));
        })
    }

    clickOnBackToOrders() {
        cy.xpath(selectors.backToOrdersButtonXpathSelector).click();
    }
}

export default new CartPage();