var HomePage = require(pageObjectDir + "/homePage.js");
var ContactUs = require(pageObjectDir + "/contactUs.js");

var homePage = new HomePage();
var contactUs = new ContactUs();

var isLabelLongerThan = function(isLongerThan){
    return new Promise(function(resolve){
    browser.customerServiceLabel.getText().then(function(text){
    resolve(text.lenght > isLongerThan);
    })
    });
    }
    isLabelLongerThan(1).then(console.log)
describe('Automation Web flow', function () {

    beforeEach(function () {
        browser.get(homePage.URL);
        homePage.contactUsLink.click();
    })

    // it('Click ContactUs button', function () {
    //     browser.get(homePage.URL);
    //     homePage.contactUsLink.click();
    // });
    it('Check if Customer Service Label is displayed?', function () {
        expect(contactUs.customerServiceLabel.isDisplayed()).toBeTruthy();
    })
    it('Check if Subject Heading Dropdown is displayed?', function () {
        expect(contactUs.subjectHeadingDropdown.isDisplayed()).toBeTruthy();
    })
    it('Check if Submit Button is displayed?', function () {
        expect(contactUs.submitButton.isDisplayed()).toBeTruthy();
    })

})
