import MainPage from "../pageobjects/mainPage"
import SignInPage from "../pageobjects/signInPage";
import SignUpPage from "../pageobjects/signUpPage";
import MyAccountPage from "../pageobjects/myAccountPage";
import each from 'mocha-each';
import { allRegistrationFieldsValidation, emailAlreadyUsedValidation, invalidEmailValidation } from "../fixtures/validations";
import { MY_ACCOUNT_URL } from "../fixtures/constants";

const emailOfAlreadyCreatedAccount = Cypress.env("CYPRESS_ACCOUNT_EMAIL");

describe("Sign up", () => {
    beforeEach(() => {
        MainPage.
            visit().
            clickOnSignIn();
    })

    it('opens "CREATE AN ACCOUNT" page', () => {
        SignInPage.
            enterRandomEmailAddress().
            clickOnCreateAnAccount();

        SignUpPage.
            getUrl().
            should("contain", "account-creation");
    });

    each(["", "wrongemail@"])
        .it('validates invalid email addres - value "%s"', (emailAddress) => {
            SignInPage.
                enterEmailAddress(emailAddress).
                clickOnCreateAnAccount();

            SignInPage.
                getValidation().
                should('contain', invalidEmailValidation);
        })

    it('validates email has already been used', () => {
        SignInPage.
            enterEmailAddress(emailOfAlreadyCreatedAccount).
            clickOnCreateAnAccount();

        SignInPage.
            getValidation().
            should('contain', emailAlreadyUsedValidation)
    })

    it('validated fields of sign up form', () => {
        SignInPage.
            enterRandomEmailAddress().
            clickOnCreateAnAccount();
        SignUpPage.
            clickOnRegister();

        SignUpPage.
            getValidation().
            should('contain', allRegistrationFieldsValidation);
    })

    it("should sign up", () => {
        SignInPage.
            enterRandomEmailAddress().
            clickOnCreateAnAccount()

        SignUpPage.fillForm().
            clickOnRegister();

        MyAccountPage.
            getUrl().
            should('contain', MY_ACCOUNT_URL);
    })
})