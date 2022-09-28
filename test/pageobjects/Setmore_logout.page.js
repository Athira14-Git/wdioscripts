
class LogoutPage {
    get account_icon()
    {
        return $('//*[@id="account_menu"]/a/i[1]');
    }
    
    get signout_button() {
        return $('//*[@id="sign_out"]/a/div[2]');
    }
    async logout() {
        await browser.waitUntil(async () => { return await this.account_icon.isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: 'Account icon not displayed'
        })
        await this.account_icon.click();
        await this.signout_button.click();
    }
    
}

module.exports = new LogoutPage();
