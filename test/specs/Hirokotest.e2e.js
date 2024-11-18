import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/Hiroklogin.page.js'
import InventoryPage from '../pageobjects/Hirokoinventory.page.js'


describe('login positive stan_sec', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.positiveloginLoop('secret_sauce');
        await LoginPage.negativeloginLoop('secr_sauce');
    })
})
       
describe('hamburger menu and shopping cart', () => {
    it('should open Hamburger Menu and display all options', async () => {
        await LoginPage.testHamburgermenu('standard_user', 'secret_sauce');
    })
})

       

        



       
            






           
   