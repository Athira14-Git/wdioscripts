const RegisterPage = require('../pageobjects/Setmore_signup.page');

describe('Setmore SignUp feature', () => {
    it('User should sign up with valid credentials', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await RegisterPage.register('UserSetmore','user.sm@setmore.com',1234567890,'pass1111');
        const element = await $('#pricing-free-button')
        await expect(element).toBePresent()
        
    })
})