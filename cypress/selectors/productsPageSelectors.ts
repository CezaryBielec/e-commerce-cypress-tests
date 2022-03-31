import { classSelector, idSelector } from "../support/utils";

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

export const subcategoryXpathSelector = (subcategory: string) => `//*[@id='subcategories']//*[@title='${subcategory}']`

export const unrollFiltersButtonIdSelector = idSelector("layered_block_left");
export const colorFilterXpathSelector = (color: string) => `//*[@id='left_column']//*[contains(text(), '${color}')]`;
export const rightEndOfThePriceRangeSlider = "//*[@class='ui-slider-handle ui-state-default ui-corner-all'][2]";

export const productItemXpathSelector = (itemName: string) => `//*[@class='product_list grid row']//*[@title='${itemName}']`;

export const categoryNameBanner = classSelector("category-name");
export const productsListEmptyStateXpathSelector = "//*[@class='product_list']//*[contains(text(), 'There are no products')]"