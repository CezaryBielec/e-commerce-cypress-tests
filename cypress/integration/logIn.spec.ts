import MainPage from "../pageobjects/mainPage"
import MyAccountPage from "../pageobjects/myAccountPage";
import SignInPage from "../pageobjects/signInPage";

describe("Login", () => {
    beforeEach(() => {
        MainPage.visit();
        MainPage.clickOnSignIn();
    })

    it("should log in", () => {
        SignInPage.enterLogin();
        SignInPage.enterPassword();
        SignInPage.clickOnSignIn();

        MyAccountPage.verifyUserIsLoggedIn();
    })
})