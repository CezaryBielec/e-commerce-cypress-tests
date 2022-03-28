import * as selectors from "../selectors/cartSelectors";
import { calculatePriceAfterDiscount, normalizeDiscount, normalizePrice } from "../support/utils";

class CartPage {

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
        return cy.get(selectors.productsPriceSummaryIdSelector);
    }

    getShippingPriceSummary() {
        return cy.get(selectors.shippingPriceSummaryIdSelector);
    }

    getTotalPriceSummary() {
        return cy.get(selectors.totalPriceSummaryIdSelector);
    }

    verifyTotalPriceEqualsProductsPlusShipping() {
        return this.getTotalPriceSummary().then(el => {
            let totalPrice = normalizePrice(el.text());

            this.getProductsPriceSummary().then(el => {
                let productsPrice = normalizePrice(el.text());

                this.getShippingPriceSummary().then(el => {
                    let shippingPrice = normalizePrice(el.text());

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
            let originalPrice = normalizePrice(el.text());

            this.getDiscountValue().then(el => {
                let discountValue = normalizeDiscount(el.text());

                this.getProductPriceAfterDiscount().then(el => {
                    let priceAfterDiscount = normalizePrice(el.text());
                    let actualPriceAfterDiscount = calculatePriceAfterDiscount(originalPrice, discountValue);
                    return cy.wrap(actualPriceAfterDiscount == priceAfterDiscount);
                })
            })
        })
    }

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