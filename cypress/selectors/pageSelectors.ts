import { classSelector } from "../support/utils";

export const signInButtonSelector = classSelector("login");
export const signOutButtonSelector = classSelector("logout");

export const categorySelector = (category: string) => `//*[@id='block_top_menu']//*[@title='${category}']`; 
