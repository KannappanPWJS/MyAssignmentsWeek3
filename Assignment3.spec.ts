// Create a new Account

/* 1. Navigate to the url https://login.salesforce.com/
2. Enter username using getByLabel
3. Enter password using getByLabel
4. Click Login
5. Verify the title and url of the page using appropriate assertions
6. Click App Launcher using the class locator
7. Click View All using getByText
8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
9. Click Service using index based XPath
10. Click Accounts using attribute based CSS selector
11. Click New using getByRole
12. Enter Account name using attribute based CSS selector
13. Click Save button using XPath
14. Verify the toast message displayed */

import test, { expect } from '@playwright/test'
test ("Create a new Account",async({page})=>{
    await page.goto ("https://login.salesforce.com/")
    await page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com")             //getBys
    await page.getByLabel('Password').fill("TestLeaf@2025")                                 //getBys
    await page.locator("#Login").click()                                                    //CSS
    await page.waitForTimeout(2000)
    const pageTitle=await page.title()
    console.log(pageTitle)
    await expect.soft(pageTitle).toEqual("Lightning Experience")                               //Auto-Retry Soft
    const pageUrl=await page.url()
    console.log(pageUrl)
    expect(pageUrl).toEqual("https://testleaf.lightning.force.com/one/one.app")             //Non-Retry Hard
    await page.waitForTimeout(2000)
    await page.locator("//div[@class='slds-r4']").click()                                   //Xpath
    await page.locator("//button[text()='View All']").click()                               //Xpath
    await page.locator("//input[@placeholder='Search apps or items...']").fill("Service") //Xpath
    await page.waitForTimeout(2000)        
    await page.locator("(//p[@class='slds-truncate'])[1]").click()                          //Xpath
    await page.locator("a[title='Accounts']").click()                                       //CSS
    await page.getByRole('button',{name:'New'}).click()                                     //getBys
    await page.locator("input[name='Name']").fill("Test Account1")                          //CSS
    await page.locator("//button[@name='SaveEdit']").click()                                //Xpath
    await page.waitForTimeout(2000)
}
)


//await page.getByText('View All').nth(8).click()                                     //getBys
//await page.getByPlaceholder('Search apps and items...').                            //getBys
//const toastMsg=await page.textContent('.toast-message')
//console.log(toastMsg)
//await expect (toastMsg).toEqual("Account Test Account1 was created.")                   //Auto-Retry Hard