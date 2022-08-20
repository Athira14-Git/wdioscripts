const Page = require('./page');

class ClassPage extends Page {
    

    get settings_btn()
    {
        return $('.settings-icon');
    }
    get class_button()
    {
        return $('//*[@id="settingsSideNav"]/ul/li[5]/a/span');
    }
    
    get addclass_btn()
     {
        return $('#addNewClass');
    }
     
    get class_name()
    {
        return $('#class_title');
    }
    get class_description()
    {
        return $('#class_desc');
    }

    get class_cost()
    {
        return $('#class_cost');
    }
    get class_duration (){
        return $('#class_duration')
    }
    get class_slot(){
        return $('#class_slots');
    }
    
     get addclass_button () {
        return $('#saveNewClass');
    }

    async addclass(clsname,clsdes,clscst,clstime) {
        await this.settings_btn.click();
        await this.class_button.click();
        await this.addclass_btn.click();
        await this.class_name.setValue(clsname);
        await this.class_description.setValue(clsdes);
        await this.class_cost.setValue(clscst);
        await this.class_duration.setValue(clstime);
        await this.class_slot.setValue();
        await this.addclass_button.waitForClickable();
        await this.addclass_button.click();
        }

    
     open () {
        return super.open('addclass');
    }
}

module.exports = new ClassPage();