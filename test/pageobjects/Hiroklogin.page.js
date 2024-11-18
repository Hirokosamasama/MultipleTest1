import { $ } from '@wdio/globals'
import Page from './Hirokopage.js';
import InventoryPage from './Hirokoinventory.page.js';

class LoginPage extends Page {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get getError () {
        return $('h3[data-test="error"]');
    }
    get ShoppingCart (){
        return $('a.shopping_cart_link');
    }

    usernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user']

    
    async login (username, password,) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async badLogin (username, badPassword) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(badPassword);
        await this.btnSubmit.click();
    }

    
    async positiveloginLoop (password) {
        for (let i = 0; i < this.usernames.length; i++){
        await this.open()
        await this.login(this.usernames[i], password);
            if (this.usernames[i]=='locked_out_user') {
            await expect(this.getError).toBeExisting()
            await expect(this.getError).toHaveText(
            expect.stringContaining('locked out'))
        }
            else {
            await expect(this.ShoppingCart).toBeExisting()
        }
    }
}
    async negativeloginLoop (password) {
        for (let i = 0; i < this.usernames.length; i++){
        await this.open()
        await this.badLogin(this.usernames[i], password);
            await expect(this.getError).toBeExisting()
            await expect(this.getError).toHaveText(
                expect.stringContaining('do not match'))
            }
    }

    //test for hamburger menu and shopping cart
    async testHamburgermenu(username, password) {
        await this.open();
        await this.login(username, password);
        await expect(this.ShoppingCart).toBeExisting();
        await InventoryPage.openHamburgerMenu();
        await expect(InventoryPage.allItemsLink).toBeExisting();
        await expect(InventoryPage.aboutLink).toBeExisting();
        await expect(InventoryPage.logoutLink).toBeExisting();
        await expect(InventoryPage.resetAppStateLink).toBeExisting();
    }
    
    
    open () {
        return super.open();
    }
}

export default new LoginPage();

