const LoginPage = require('../pageobjects/Setmore_login.page');
const StaffPage = require('../pageobjects/Setmore_staff.page');

describe('Setmore Add Staff', () => {
    it('Adding staff in setmore', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await StaffPage.AddStaff("Staff1","Staff1@setmore.com");
        await browser.pause(2000);

        })
    })

    
describe('Setmore Delete Staff', () => {
     it('Deleting staff in setmore', async() => {
       await browser.url("");
       await browser.maximizeWindow();
       await LoginPage.login('athirasathya14@setmore.com','vrindavan14');
       await StaffPage.DeleteStaff();
       await browser.pause(5000);
   })
})

      