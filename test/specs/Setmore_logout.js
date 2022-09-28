const LoginPage = require('../pageobjects/Setmore_login.page');
const LogoutPage = require('../pageobjects/Setmore_logout.page');

describe('Setmore logout feature', async() => {
    it('User should logout from setmore', async () => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await LogoutPage.logout();
        await expect(browser).toHaveTitleContaining('Setmore');
        
    })
})

