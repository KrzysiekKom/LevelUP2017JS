var HomePage = require(pageObjectDir + "/homePage.js");
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var DressPage = require(pageObjectDir + "/dressPage.js");
var homePage = new HomePage();
var dressesPage = new DressesPage();
var dressPage = new DressPage();

var data = {
    "dress1": {
        'selector': "dressLink1",
        "price": "$26.00",
        "label": "Printed Dress"
    },
    "dress2": {
        'selector': "dressLink2",
        "price": "$50.99",
        "label": "Printed Dress"
    },
    "dress3": {
        'selector': "dressLink3",
        "price": "$28.98",
        "label": "Printed Summer Dress"
    },
    "dress4": {
        'selector': "dressLink4",
        "price": "$30.50",
        "label": "Printed Summer Dress"
    },
    "dress5": {
        'selector': "dressLink5",
        "price": "$16.40",
        "label": "Printed Chiffon Dress"
    }
};


fdescribe('Exercise 2', function () {

    beforeAll(function () {
        browser.get(homePage.URL);
    })
    
    beforeEach(function(){  
        homePage.dressesLink.click();
    })

    it('Check dresses page', function () {
        expect(dressesPage.dressesLabel.getText()).toEqual('DRESSES ');
    })

    using(data, function (dress) {
        it('Check price', function () {
            dressesPage[dress.selector].click();
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(dressPage.close), 5000)
            expect(dressPage.price.getText()).toEqual(dress.price);
        })
        it('Check label', function () {
            dressesPage[dress.selector].click();
            expect(dressPage.label.getText()).toEqual(dress.label);
            dressPage.close.click();
        })
    })
    
})
