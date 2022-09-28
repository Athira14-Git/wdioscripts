const LoginPage = require('../pageobjects/Setmore_login.page');
const CustomerPage = require('../pageobjects/Setmore_customer.page');
const LogoutPage = require('../pageobjects/Setmore_logout.page');


describe('Setmore Add Customer', () => {
    it('Adding customer in setmore', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await CustomerPage.addcustomer("Customers14@setmore","Customer14.setmore@setmore.com");
        const elem = await $('#voice-box');
        await expect(elem).toHaveText('Created customer successfully');
        await LogoutPage.logout();

        })
    })