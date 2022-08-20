const Page = require('./page');


class CustomerPage extends Page {
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
     
async addcustomer(customername,customereid) {
        
        await this.customer_tab.click();
        await browser.waitUntil(async () => { return await $("#customerList").isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: 'Timeout Service page'
        })
        await this.Plusicon.click();
        await this.customer_name.setValue(customername);
        await this.customer_email.setValue(customereid);
        await this.addcustomer_button.click();
        }
        
        
    
     open () {
        return super.open('addcustomer');
    }
}

module.exports = new CustomerPage();
