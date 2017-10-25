var HomePage = require(pageObjectDir + "/homePage.js"),
    WomenPage = require(pageObjectDir + "/womenPage.js"),
    TopsPage = require(pageObjectDir + "/topsPage.js"),
    SleevesPage = require(pageObjectDir + "/sleevesPage.js"),
    CartPage = require(pageObjectDir + "/cartPage.js"),
    homePage = new HomePage(),
    womenPage = new WomenPage(),
    topsPage = new TopsPage(),
    sleevesPage = new SleevesPage(),
    cartPage = new CartPage();


var isLabelLongerThan = function (isLongerThan) {
    return new Promise(function (resolve) {
        sleevesPage.productDescription.getText().then(function (text) {
            resolve(text.length > isLongerThan);
        })
    });
}

fdescribe('Exercise 1', function () {
    beforeAll(function () {
        browser.get(homePage.URL);
    })

    it('Check \' Women \' label', function () {
        homePage.womenMenu.click();
        expect(womenPage.womenLabel.getText()).toEqual('Women');
    })

    it('Check \' Tops \' label', function () {
        womenPage.topsButton.click();
        expect(topsPage.topsLabel.getText()).toEqual('Tops');
    })

    it('Check \' Faded Short Sleeve T-shirts \' label', function () {
        topsPage.sleevesButton.click();
        expect(sleevesPage.label.getText()).toEqual('Faded Short Sleeve T-shirts');
    })

    it('Check description', function () {
        expect(isLabelLongerThan(8))
            .toBe(true);
    })

    it('Check condition', function () {
        expect(sleevesPage.condition.getText()).toEqual('New');
    })

    it('Add product of size \' M \'', function () {
        sleevesPage.setSize.click();
        sleevesPage.cart.submit();
    })

    it('Go to the cart', function () {
        sleevesPage.goToCart.click();
        expect(cartPage.label.getText()).toEqual('Your shopping cart');
    })

    it('Check product exists in cart', function () {
        expect(cartPage.product.getText()).toEqual('Faded Short Sleeve T-shirts');
    })
});