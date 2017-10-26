var DressesPage = function () {
        
    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
    this.dressesLabel = element(By.css("#center_column > h1 > span.cat-name"));
    
    this.dressLink1 = element(By.css("li.ajax_block_product:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)"));
    this.dressLink2 = element(By.css("li.ajax_block_product:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)"));
    this.dressLink3 = element(By.css("li.ajax_block_product:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)"));
    this.dressLink4 = element(By.css("li.ajax_block_product:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)"));
    this.dressLink5 = element(By.css("li.ajax_block_product:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)"));

}
module.exports = DressesPage; 