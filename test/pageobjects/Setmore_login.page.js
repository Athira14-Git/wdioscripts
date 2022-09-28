class LoginPage {
    
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get SubmitButton () {
        return $('#sm-login-btn');
    }

    
    async login (username, password) {
        
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.SubmitButton.click();
    }

    
}

module.exports = new LoginPage();
