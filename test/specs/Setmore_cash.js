const LoginPage = require('../pageobjects/Setmore_login.page');
const CashPage = require('../pageobjects/Setmore_cash.page');

describe('ActivateCash', () => {
    it('should Activate cash', async () => {
        await browser.url("");
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await CashPage.ActivateCash();
        const elements= await $('#cash-deactivate');
        await expect(elements).toHaveText('Deactivate Cash');
        
        
        })
 })
describe('DectivateCash', () => {
    xit('should Deactivate Cash', async () => {
        await browser.url("");
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await CashPage .DeactivateCash();
        const elemnt= await $('#activate-cash');
        await expect(elemnt).toHaveText('Activate Cash Register');
        
        
        })
})

