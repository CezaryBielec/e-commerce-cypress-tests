import { classSelector, idSelector } from "../support/utils";

export const productsInCartXpathSelector = "//*[@id='cart_summary']//tbody//tr";
export const removeProductButtonClassSelector = classSelector("cart_quantity_delete");
export const alertWarningInShoppingCartSummaryViewClassSelector = classSelector("alert alert-warning");
export const increaseNumberOfProductButtonIdSelector = classSelector("icon-plus");
export const quantityOfProductInCartXpathSelector = "//*[@class='cart_quantity text-center']/input";

export const productPriceClassSelector = classSelector("price special-price");
export const discountClassSelector = classSelector("price-percent-reduction small");
export const originalProductPriceClassSelector = classSelector("old-price");

export const productsPriceSummaryIdSelector = idSelector("total_product");
export const shippingPriceSummaryIdSelector = idSelector("total_shipping");
export const totalPriceSummaryIdSelector = idSelector("total_price");

export const proceedToCheckoutSummaryButtonSelector = classSelector("button btn btn-default standard-checkout button-medium");
export const proceedToCheckoutAddressButtonSelector = classSelector("button btn btn-default button-medium");
export const proceedToCheckoutShippingButtonSelector = classSelector("button btn btn-default standard-checkout button-medium");
export const termsOfServiceCheckboxSelector = idSelector("uniform-cgv");
export const payByBankWireButtonSelector = classSelector("bankwire");
export const confirmOrderButtonSelector = classSelector("button btn btn-default button-medium");