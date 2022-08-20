
const Page = require('./page');


class ServicePage extends Page {
    get settings_btn()
    {
        return $('.settings-icon');
    }
    get service_button()
    {
        return $('//*[@id="settingsSideNav"]/ul/li[3]/a/span');
    }
    
    get add_newservice()
     {
        return $('#addNewService');
    }
     
    get service_name()
    {
        return $('#service_ServiceName');
    }
    get service_description()
    {
        return $('#service_description');
    }

    get service_cost()
    {
        return $('#service_Cost');
    }
    get service_time (){
        return $('#service_Duration');
    }
    get private_toggle(){
        return $('//*[@id="serviceDetails"]/ul[1]/li[2]/ul/li[4]/div/div/span[3]')
    }
    get video_toggle(){
        return $('//*[@id="serviceDetails"]/ul[1]/li[2]/ul/li[5]/div/div[1]/span[1]')
    }

    get service_staff(){
        return $('.selectall');
    }
    
     get addservice () {
        return $('#saveNewService');
    }
    

    async createservice(servicename,servicedescription,servicecost,servicetime) {
        
        await this.settings_btn.click();
        await this.service_button.click();
        await this.add_newservice.click();
        await this.service_name.setValue(servicename);
        await this.service_description.setValue(servicedescription);
        await this.service_cost.setValue(servicecost);
        await this.service_time.setValue(servicetime);
        await this.private_toggle.click();
        await this.video_toggle.click();
        await this.service_staff.waitForClickable();
        await this.service_staff.click();
        await this.addservice.waitForClickable();
        await this.addservice.click();
        }

    
     open () {
        return super.open('createservice');
    }
}

module.exports = new ServicePage();