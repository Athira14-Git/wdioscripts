const LoginPage = require('../pageobjects/Setmore_login.page');
const StaffPage = require('../pageobjects/Setmore_staff.page');
const LogoutPage = require('../pageobjects/Setmore_logout.page');

describe('Setmore Add Staff', () => {
    it('Adding staff in setmore', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com','vrindavan14');
        await StaffPage.AddStaff("staff_aw","setmore_staffaw_4@setmore.com");
        const element= await $('#voice-box');
        await expect(element).toHaveText('Fetching staff details...');
        await LogoutPage.logout();
        

        })
    })
describe('Setmore Delete Staff', async() => {
     it('Deleting staff in setmore', async() => {
        await browser.url("");
        await browser.maximizeWindow();
        await LoginPage.login('athirasathya14@setmore.com', 'vrindavan14');
        await StaffPage.DeleteStaff();
        const elements= await $('#voice-box');
        await expect(elements).toHaveText('Deleting staff...');
        await LogoutPage.logout();
   })
})

      