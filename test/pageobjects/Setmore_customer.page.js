
class CustomerPage {
    
    get customer_tab()
    {
        return $('#side-nav-customers');
    }
     get Plusicon()
     {
          return $('#newCustomer');
      }
    
   get customer_name() {
        return $('#customerNewName');
    }
     
    get customer_email(){
        return $('#customerNewEmail');
    }
    
    get addcustomer_button()
      {
        return $('//*[@id="addnewCustomer"]');
    }
    get allContactList() {
        return $("#customerList")
    }
     
async addcustomer(customername,customereid) {
    
    await browser.waitUntil(async () => { return await this.customer_tab.isDisplayed() === true }, {
        timeout: 30000,
        timeoutMsg: 'Customer Tab Not Displayed'
    })
        
        await this.customer_tab.click();

        await browser.waitUntil(async () => { return await this.allContactList.isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: 'Plus icon not Found'
        })
        
        await this.Plusicon.click();
        
        await this.customer_name.setValue(customername);
        await this.customer_email.setValue(customereid);
        await this.addcustomer_button.click();
        }    
}

module.exports = new CustomerPage();
