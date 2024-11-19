import { $ } from '@wdio/globals'
import Page from './Hirokopage.js';
import LoginPage from './Hiroklogin.page.js';
import { browser } from '@wdio/globals';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shoppingCart () {
        return $('a.shopping_cart_link'); //fill "#flash" with css "" if it is correct password
    }

    get YourCart () {
        return $('[class="header_secondary_container"]');
    }
    // Selector for the Hamburger Menu button
    get hamburgerMenu() {
        return $('#react-burger-menu-btn');
    }

    get closehamburgerMenu(){
        return $('#react-burger-cross-btn')
    }


    // Selector for the 'All Items' link in the Hamburger Menu
    get allItemsLink() {
        return $('#inventory_sidebar_link');
    }

    // Selector for the 'About' link in the Hamburger Menu
    get aboutLink() {
        return $('#about_sidebar_link');
    }
    //selector for the page after the aboutlink, not in the inventory page
    get searchIconAfterAbout() {
        return $('img[alt="search"]');
    }

    // Selector for the 'Logout' link in the Hamburger Menu
    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    // Selector for the 'Reset App State' link in the Hamburger Menu
    get resetAppStateLink() {
        return $('#reset_sidebar_link');
    }

    get addBackPackButton(){
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get checkCartContent(){
        return $('span[data-test="shopping-cart-badge"]');
    }

    get sortButton(){
        return $('.product_sort_container');
    }

    get removeBackpackButton(){
        return $('#remove-sauce-labs-backpack');
    }


    // Function to open the Hamburger Menu
    async openHamburgerMenu() {
        await this.hamburgerMenu.click();
    }

    async clickclosehamburgerMenu() {
        await this.closehamburgerMenu.click();
    }


    // Function to test if 'All Items' link is displayed
    async isAllItemsLinkDisplayed() {
        return await this.allItemsLink.toBeExisting();
    }

    // Function to test if 'About' link is displayed
    async isAboutLinkDisplayed() {
        return await this.aboutLink.toBeExisting();
    }

    // Function to test if 'Logout' link is displayed
    async isLogoutLinkDisplayed() {
        return await this.logoutLink.toBeExisting();
    }

    async isResetAppStateLinkDisplayed() {
        return await this.resetAppStateLink.toBeExisting();
    }
   
    async clickAllItemsLink() {
        await this.allItemsLink.click();
    }

    async clickAboutLink() {
        await this.aboutLink.click();
    }

    async clickLogoutLink() {
        await this.logoutLink.click();
    }

    async clickResetAppStateLink() {
        await this.resetAppStateLink.click();
    }

    async clickAddBackpackbutton(){
        await this.addBackPackButton.click();
    }

    async openShoppingCart() {
        await this.shoppingCart.click();
    }

    async clickremoveBackpackButton() {
        await this.removeBackpackButton.click();
    }



 //test for hamburger menu exist and shopping cart exist, postive test, Functional Test
async testHamburgermenu(){
    await this.open()
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.allItemsLink).toBeExisting();
    await expect(this.aboutLink).toBeExisting();
    await expect(this.logoutLink).toBeExisting();
    await expect(this.resetAppStateLink).toBeExisting();
}

async testclosebutton(){
    await this.open()
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.closehamburgerMenu).isDisplayed;
    await this.clickclosehamburgerMenu();
    await expect(this.closehamburgerMenu).not.isDisplayed;
}
async testShoppingCart(username, password) {
    await this.open();
    await LoginPage.login(username, password);
    await expect(this.shoppingCart).toBeExisting();
    await this.openShoppingCart();
    await expect(this.YourCart).toBeExisting();
 }

 async testAllItemsLink(username, password) {
    await this.open();
    await LoginPage.login(username, password);
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.allItemsLink).toBeExisting();
    await this.clickAllItemsLink();
    await expect(this.shoppingCart).toBeExisting();
 }
 async testAboutLink(username, password) {
    await this.open();
    await LoginPage.login(username, password);
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.aboutLink).toBeExisting();
    await this.clickAboutLink();
    await expect(this.searchIconAfterAbout).toBeExisting();
 }

 async testLogoutLink(username, password) {
    await this.open();
    await LoginPage.login(username, password);
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.logoutLink).toBeExisting();
    await this.clickLogoutLink();
    await expect(LoginPage.inputUsername).toBeExisting();
 }


}
export default new InventoryPage();