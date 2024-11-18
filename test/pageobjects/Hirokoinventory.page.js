import { $ } from '@wdio/globals'
import Page from './Hirokopage.js';
import Login from './Hiroklogin.page.js';

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

    // Function to open the Hamburger Menu
    async openHamburgerMenu() {
        await this.hamburgerMenu.click();
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
        await this.ShoppingCart.click();
    }



 //test for hamburger menu and shopping cart
    async testHamburgermenu(){
        await Login.login('standard_user', 'secret_sauce');
        await expect(this.shoppingCart).toBeExisting();
        await this.openHamburgerMenu();
        await expect(this.allItemsLink).toBeExisting();
        await expect(this.aboutLink).toBeExisting();
        await expect(this.logoutLink).toBeExisting();
        await expect(this.resetAppStateLink).toBeExisting();
    }

}
export default new InventoryPage();