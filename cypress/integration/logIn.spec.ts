import MainPage from "../pageobjects/mainPage"
import MyAccountPage from "../pageobjects/myAccountPage";
import SignInPage from "../pageobjects/signInPage";
import { invalidPasswordValidation } from "../fixtures/validations";
import { MY_ACCOUNT_URL } from "../fixtures/constants";

const emailOfExistingAccount = Cypress.env('email');
const passwordOfExistingAccount = Cypress.env('password');

describe("Login", () => {
    beforeEach(() => {
        MainPage.
            visit().
            clickOnSignIn();
    })

    it("logs in correctly", () => {
        SignInPage.
            enterEmail(emailOfExistingAccount).
            enterPassword(passwordOfExistingAccount).
            clickOnSignIn();

        MyAccountPage.
            getUrl().
            should('equal', MY_ACCOUNT_URL);
    })

    it("doesn't log in successfully because of incorrect password", () => {
        SignInPage.
            enterEmail(emailOfExistingAccount).
            enterPassword(passwordOfExistingAccount).
            clickOnSignIn();

        SignInPage.
            getValidation().
            should('have.text', invalidPasswordValidation);
    })
})