const LoginPage = require('../pageobjects/Setmore_login.page');
const ClassPage = require('../pageobjects/Setmore_class.page');
const LogoutPage = require('../pageobjects/Setmore_logout.page');


describe('My classes', () => {
    it('should add classes', async () => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await ClassPage.addclass('Setmoreclass3','Class for teams3',1000,30);
         const element = await $('.noDisplay');
         await expect(element).toHaveText('Class saved successfully.');
        await LogoutPage.logout();
        
        })
})

