

class StaffPage  {
    get Settings()
    {
      return $ ('.settings-icon');
    }

    get Staff_button ()
    {
        return $('//*[@id="settingsSideNav"]/ul/li[2]/a');
    }
    

    get Plus_icon()
     {
        return $('#newPlusIcon');
     }

     get Staff_name()
     {
        return $('#staffNewName');
     }

    get Staff_email()
     { 
        return $('#staffNewEmail');
     }
    
     get Addstaff_button ()
     {
        return $('#addstaff');
     }
    
     get Delete_button ()
      {
        return $('#btn-for-staffdelete');
      }

     get Delete_confirmbutton()
     {
        return $('#delete-confirmation-btn')
     }
    
    async AddStaff(staffname,staffeid)
         {
            await browser.waitUntil(async () => { return await this.Settings.isDisplayed() === true }, {
               timeout: 30000,
               timeoutMsg: 'Element not displayed'
           })
        await this.Settings.click();
        await this.Staff_button.click();
        await this.Plus_icon.click();
        await this.Staff_name.setValue(staffname);
        await this.Staff_email.setValue(staffeid);
        await this.Addstaff_button.waitForClickable();
        await this.Addstaff_button.click();
        }

    async DeleteStaff() 
        {
         await browser.waitUntil(async () => { return await this.Settings.isDisplayed() === true }, {
            timeout: 30000,
            timeoutMsg: 'Settings Not displayed'
        })
        await this.Settings.click();
        await this.Staff_button.click();
        await this.Delete_button.click();
        await this.Delete_confirmbutton.click();
        } 
        

        }
        module.exports = new StaffPage();
    