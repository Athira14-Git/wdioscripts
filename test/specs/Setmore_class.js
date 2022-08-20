const LoginPage = require('../pageobjects/Setmore_login.page');
const ClassPage = require('../pageobjects/Setmore_class.page');

describe('My classes', () => {
    it('should add classes', async () => {
        await browser.url('');
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await browser.pause(5000);
        await ClassPage.addclass('Testsclass','Add class test',1000,30);
        
    })
})