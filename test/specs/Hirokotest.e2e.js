import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Hiroklogin.page.js'
import InventoryPage from '../pageobjects/Hirokoinventory.page.js'
//import YourCartPage from '../pageobjects/ShoppingCart.js'


describe('login positive stan_sec', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.positiveloginLoop('secret_sauce');
        await LoginPage.negativeloginLoop('secr_sauce');
    })
})
       
describe('hamburger menu and shopping cart', () => {
    it('should open Hamburger Menu and display all options', async () => {
        await InventoryPage.testHamburgermenu('standard_user', 'secret_sauce');
    })
    it('test close hanburger menu', async () => {
        await InventoryPage.testclosebutton('standard_user', 'secret_sauce');
    })
    it('shopping cart goes to your cart page', async () => {
        await InventoryPage.testShoppingCart('standard_user', 'secret_sauce');
    })
    it('test click on all tiems link', async () => {
        await InventoryPage.testAllItemsLink('standard_user', 'secret_sauce');
    })
    it('test click on about link', async () => {
        await InventoryPage.testAboutLink('standard_user', 'secret_sauce');
    })
    it('test click on logout link', async () => {
        await InventoryPage.testLogoutLink('standard_user', 'secret_sauce');
    })


})

       

        



       
            






           
   
