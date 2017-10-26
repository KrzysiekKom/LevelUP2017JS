var DressPage = function () {
        
    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
    this.price = element(By.css("#our_price_display"));
    this.label = element(By.css(".pb-center-column > h1:nth-child(1)"));
    this.close = element(By.css('#category > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a'));

}
module.exports = DressPage; 