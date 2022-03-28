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

export const continueShoppingBackButtonXpathSelector = "//a[@title='Previous']";
export const otherPaymentMethodsButtonXpathSelector = "//*[@id='cart_navigation']//a"

export const addNewAddressXpathSelector = "//a[@title='Add']";
export const changeShippingAddressSelectIdSelector = idSelector("id_address_delivery");

export const termsAndConditionsErrorClassSelector = classSelector("fancybox-error");

export const proceedToCheckoutSummaryButtonClassSelector = classSelector("button btn btn-default standard-checkout button-medium");
export const proceedToCheckoutAddressButtonClassSelector = classSelector("button btn btn-default button-medium");
export const proceedToCheckoutShippingButtonClassSelector = classSelector("button btn btn-default standard-checkout button-medium");
export const termsOfServiceCheckboxIdSelector = idSelector("uniform-cgv");
export const payByBankWireButtonClassSelector = classSelector("bankwire");
export const payByCheckButtonClassSelector = classSelector("cheque");
export const confirmOrderButtonClassSelector = classSelector("button btn btn-default button-medium");

export const orderConfirmationContentXpathSelector = "//*[@id='center_column']//*[@class='box']";
export const backToOrdersButtonXpathSelector = "//a[text() = 'Back to orders']";