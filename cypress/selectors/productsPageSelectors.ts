import { classSelector, idSelector } from "../support/helpers";

export const dressesCategoryCheckboxSelector = idSelector("layered_category_8");
export const pinkCategoryCheckboxSelector = idSelector("layered_id_attribute_group_24");

export const productContainerSelector = classSelector("product-container");
export const productNameSelector = classSelector("product-name");
export const addToCartButtonSelector = "[title='Add to cart']";
export const cartPopupSelector = idSelector("layer_cart");
export const proceedToCheckoutButtonSelector = "[title='Proceed to checkout']";
export const continueShoppingButtonSelector = classSelector("continue btn btn-default button exclusive-medium");
export const numberOfProductsInCartSelector = classSelector("ajax_cart_quantity unvisible");
export const noProductsInCartSelector = classSelector("ajax_cart_no_product");
export const removeItemsFromCartButtonSelector = classSelector("remove_link");
export const cartSectionSelector = "[title='View my shopping cart']";