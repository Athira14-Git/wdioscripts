const LoginPage = require('../pageobjects/Setmore_login.page');
const CustomerPage = require('../pageobjects/Setmore_customer.page');

describe('Setmore Add Customer', () => {
    it('Adding customer in setmore', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await CustomerPage.addcustomer("Customer1","Customer1@setmore.com");
        await browser.pause(2000);

        })
    })