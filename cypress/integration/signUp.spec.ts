import MainPage from "../pageobjects/mainPage"
import SignInPage from "../pageobjects/signInPage";
import SignUpPage from "../pageobjects/signUpPage";
import MyAccountPage from "../pageobjects/myAccountPage";

describe("Sign up", () => {
    beforeEach(() => {
        MainPage.visit();
    })

    it("should sign up", () => {
        MainPage.clickOnSignIn();
        SignInPage.enterCorrectEmailAddress();
        SignInPage.clickOnCreateAnAccount();
        SignUpPage.fillForm();
        SignUpPage.clickOnRegister();

        MyAccountPage.verifyUserIsLoggedIn();
    })
})