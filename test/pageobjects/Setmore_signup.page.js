

class RegisterPage  {
    get signup()
    {
        return $('//*[@id="signup-btn"]');
    }
    
    get user_name() {
        return $('//*[@id="input-name"]');
    }
     
    get user_email(){
        return $('//*[@id="input-email"]');
    }

    get user_phoneno()
    {
        return $('//*[@id="phoneNo-req"]')
    }
    get password() {
        return $('//*[@id="input-password"]');
    }
     get signup_button() {
        return $("//button[@type='submit']")
    }
    get setmorefree()
    {
        return $("#pricing-free-button")
    }

   async register(user,eid,phone,pwd) {
    await browser.waitUntil(async () => {return await this.signup.isDisplayed() === true }, {
        timeout: 30000,
        timeoutMsg: 'Element not displayed'
    })

    await this.signup.click();
    await this.user_name.setValue(user);
    await this.user_email.setValue(eid);
    await this.user_phoneno.setValue(phone);
    await this.password.setValue(pwd);
    await this.signup_button.waitForClickable();
    await this.signup_button.click();
    await browser.waitUntil(async () => {return await this.setmorefree.isDisplayed() === true }, {
        timeout: 40000,
        timeoutMsg: 'Signup Failed'
    })
    

    
}

    
}

module.exports = new RegisterPage();
