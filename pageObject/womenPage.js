var WomenPage = function WomenPage(){
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    
    this.womenLabel = element(By.css('#center_column > div.content_scene_cat > div > div > span'));
    this.topsButton = element(By.css('#subcategories > ul > li:nth-child(1) > div.subcategory-image > a'));
    
}
module.exports = WomenPage;