const LoginPage = require('../pageobjects/Setmore_login.page');
const LogoutPage = require('../pageobjects/Setmore_logout.page');

describe('Setmore Application Login', async() => {
    it('User should login to setmore with valid credentials', async () => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com','vrindavan14');
        const elem = await $('#startDashboard');
        await expect(elem).toExist();
        await LogoutPage.logout();
   })
})

