import MainPage from "../pageobjects/mainPage"
import MyAccountPage from "../pageobjects/myAccountPage";
import SignInPage from "../pageobjects/signInPage";
import { invalidPasswordValidation } from "../fixtures/validations";
import { MY_ACCOUNT_URL } from "../fixtures/constants";

const emailOfExistingAccount = Cypress.env('CYPRESS_ACCOUNT_EMAIL');
const passwordOfExistingAccount = Cypress.env('CYPRESS_ACCOUNT_PASSWORD');

describe('Log in', () => {

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
            should('contain', MY_ACCOUNT_URL);
    })

    it("doesn't log in successfully because of incorrect password", () => {
        SignInPage.
            enterEmail(emailOfExistingAccount).
            enterPassword("incorrectpassword").
            clickOnSignIn();

        SignInPage.
            getValidation().
            should('contain', invalidPasswordValidation);
    })
})