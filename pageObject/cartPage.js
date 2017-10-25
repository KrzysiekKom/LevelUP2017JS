var CartPage = function CartPage(){
    this.URL = 'http://automationpractice.com/index.php?controller=order';
    
    this.label = element(By.css('#columns > div.breadcrumb.clearfix > span.navigation_page'));
    this.product = element(By.css('#product_1_3_0_0 > td.cart_description > p > a'));
    
}
module.exports = CartPage;