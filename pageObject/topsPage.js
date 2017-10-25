var TopsPage = function TopsPage(){
    this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
    
    this.topsLabel = element(By.css('#center_column > div.content_scene_cat > div > div > span'));
    this.sleevesButton = element(by.linkText('Faded Short Sleeve T-shirts'));
    
}
module.exports = TopsPage;