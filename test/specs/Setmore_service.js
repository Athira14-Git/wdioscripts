const LoginPage = require('../pageobjects/Setmore_login.page');
const ServicePage = require('../pageobjects/Setmore_service.page');
const LogoutPage = require('../pageobjects/Setmore_logout.page');


describe('Setmore Add Service', () => {
    it('Adding service in setmore', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await ServicePage.createservice("Weekly meeting","Its a weekly meeting service",500,1000);
        const elem = await $('#voice-box');
        await expect(elem).toHaveText('Service saved.');
        await LogoutPage.logout();
   
         })
    })

    
