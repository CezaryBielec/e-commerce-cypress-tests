import { idSelector, classSelector } from "../support/utils";

export const validationSelector = classSelector('alert alert-danger');
export const emailAddressInputSelector = idSelector("email_create");
export const createAnAccountButtonSelector = idSelector("SubmitCreate");
export const emailInputSelector = idSelector("email");
export const passwordInputSelector = idSelector("passwd");
export const signInButtonSelector = idSelector("SubmitLogin");
export const newAccountEmailValidationSelector = idSelector("create_account_error")
