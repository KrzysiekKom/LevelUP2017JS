var SleevesPage = function SleevesPage(){
    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product';
    
    this.label = element(By.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1'));
    this.productDescription = element(By.css('#short_description_content > p'));
    this.condition = element(By.css('#product_condition > span'));
    this.setSize = element(By.cssContainingText('option', 'M'));
    this.cart = element(By.css('#add_to_cart > button > span'));
    this.goToCart = element(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b'));
    
}
module.exports = SleevesPage;