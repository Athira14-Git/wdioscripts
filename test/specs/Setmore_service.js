const LoginPage = require('../pageobjects/Setmore_login.page');
const ServicePage = require('../pageobjects/Setmore_service.page');

describe('Setmore Add Service', () => {
    it('Adding service in setmore', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await browser.pause(8000);
        await ServicePage.createservice("Service1","Its a Service",500,1000);
        

        })
    })
