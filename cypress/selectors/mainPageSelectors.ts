import { classSelector } from "../support/utils";

export const categoriesMenuClassSelector = classSelector("cat-title");
export const mobileCategoryClass = ".menu-mobile-grover";

export const categoryXpathSelector = (category: string) => `//*[@id='block_top_menu']//a[@title='${category}']`; 
