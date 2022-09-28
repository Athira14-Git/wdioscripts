

class CashPage  {


    get Settings_Button()
    {
        return $('#settings_new');
    }
    get cash_btn()
    {
        return $('//*[@id="paymentMainTab"]/a/span');
    }
    get cash()
    {
        return $('#setmore-cash-badge');
    }
    get activatecash()
    {
        return $('#activate-cash');
    }
    get deactivatecash()
    {
        return $('#cash-deactivate')
    }
    get okbtn()
    {
        return $('#alertOk');
    }
    async ActivateCash()
    {
        await browser.waitUntil(async () => { return await this.Settings_Button.isDisplayed ()  === true }, {
            timeout: 30000,
            timeoutMsg: 'Settings Not displayed'
        })
        await this.Settings_Button.click();
        await this.cash_btn.click();
        await this.cash.click();
        await this.activatecash.click();
        await this.okbtn.click();
    }
    async DeactivateCash()
    {
        await browser.waitUntil(async () => { return await this.Settings_Button.isDisplayed ()  === true }, {
            timeout: 30000,
            timeoutMsg: 'Settings Not Displayed'
        })
        await this.Settings_Button.click();
        await this.cash_btn.click();
        await this.cash.click();
        await this.deactivatecash.click();
        await this.okbtn.click();
    } 
    }

module.exports=new CashPage();