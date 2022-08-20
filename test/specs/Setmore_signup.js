const RegisterPage = require('../pageobjects/Setmore_signup.page');

describe('Setmore SignUp feature', () => {
    it('User should sign up with valid credentials', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await RegisterPage.register('Test','testzs@setmore.com',1234567890,'pass1234');
        await browser.pause(5000);
    })
})