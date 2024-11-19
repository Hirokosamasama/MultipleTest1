import { $ } from '@wdio/globals'
import Page from './Hirokopage.js';
import LoginPage from './Hiroklogin.page.js';
import InventoryPage from './Hirokoinventory.page.js';


class YourCartPage extends Page {
    get hamburgerMenu() {
        return $('#react-burger-menu-btn');
    }

    get closehamburgerMenu(){
        return $('#react-burger-cross-btn')
    }
    get allItemsLink() {
        return $('#inventory_sidebar_link');
    }
    get shoppingCart () {//log in is success
        return $('a[class="shopping_cart_link"]');    
    }
        // Selector for items in the cart
    get cartItems() {
        return $('.cart_item'); // All cart items listed on the "Your Cart" page
    }
   
        // Selector for the "Continue Shopping" button
    get continueShoppingButton() {
        return $('#continue-shopping');
    }
        // Selector for the "Checkout" button
    get checkoutButton() {
        return $('#checkout');
    }
    get cancelButton(){
        return $('#cancel')
    }
    get removeBackpackButton(){
        return $('#remove-sauce-labs-backpack');
    }
    get checkCartContent(){
        return $('span[data-test="shopping-cart-badge"]')
    }
//functioned needed for the test
    async openHamburgerMenu() {
        await this.hamburgerMenu.click();
    }
    async clickAllItemsLink() {
        await this.allItemsLink.click();
    }
    async clickContinueShoppingButton(){
        await this.continueShoppingButton.click();
    }
    async clickcheckoutButton(){
        await this.checkoutButton.click();
    }
    async clickremoveBackpackButton() {
        await this.removeBackpackButton.click();
    }

    async clickcancelButton() {
        await this.cancelButton.click();
    }

async testclickAllItemsLink(username, password) { //all items' link test
    await this.open();
    await LoginPage.login(username, password);
    await expect(InventoryPage.shoppingCart).toBeExisting();
    await InventoryPage.openShoppingCart();
    await expect(InventoryPage.YourCart).toBeExisting();
    await this.openHamburgerMenu();
    await this.clickAllItemsLink();
    await expect (InventoryPage.sortButton).toBeExisting();   
}
}
export default new YourCartPage();
