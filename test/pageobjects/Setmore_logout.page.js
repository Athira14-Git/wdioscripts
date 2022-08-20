const Page = require('./page');


class LogoutPage extends Page {
    get account_icon()
    {
        return $('//*[@id="account_menu"]/a/i[1]');
    }
    
    get signout_button() {
        return $('//*[@id="sign_out"]/a/div[2]');
    }
    async logout() {
        await this.account_icon.click();
        await this.signout_button.click();
    }
    open () {
        return super.open('logout');
    }
}

module.exports = new LogoutPage();
