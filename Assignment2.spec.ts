// Edit a Lead

/* 1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Find Leads
8. Enter the first name
9. Click Find Leads button
10. Click the first resulting Lead ID
11. Click Edit
12. Edit Company name
13. Edit Annual Revenue
14. Edit Department
15. Enter Description
16. Click Update
17. Verify the edited fields and print the title of the page */

import test, { expect } from '@playwright/test'
test ("Edit Lead", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("//input[@id='username']").fill("Demosalesmanager")                              //Xpath
    await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")                              //Xpath
    await page.locator(".decorativeSubmit").click()                                                     //CSS
    await page.locator(`text='CRM/SFA'`).click()                                                        //CSS
    await page.locator("//a[text()='Leads']").click()                                                   //Xpath
    await page.locator("//a[text()='Find Leads']").click()                                              //xpath
    await page.locator("(//div[@class='x-form-item x-tab-item']//input)[2]").fill("SK")                 //Xpath
    await page.getByRole('button',{name:"Find Leads"}).click()                                         //PW getbys
    await page.getByRole('link',{name: "10393" }).click()                                              //PW getbys
    await page.locator("//a[text()='Edit']").click()                                                   //XPath
    const updateCom = await page.locator("//input[@id='updateLeadForm_companyName']")                  //Xpath
    await updateCom.fill("TestQ")
    await expect.soft(updateCom).toHaveValue("TestQ")                                                  //Auto-Retry Soft
    const updateAnnual = await page.locator("//input[@id='updateLeadForm_annualRevenue']")             //Xpath
    await updateAnnual.fill("1000000")
    expect(updateAnnual).toHaveValue("1000000")                                                        //Non-Retry Hard
    const updateDepart =await page.locator("//input[@name='departmentName']")                         //Xpath
    await updateDepart.fill("Testing") 
    expect.soft(updateDepart).toHaveValue("Testing")                                                   //Non-Retry Soft
    await page.locator("//textarea[@id='updateLeadForm_description']").fill("Updated")                 //Xpath
    await page.locator(".smallSubmit").first().click()                                                 //CSS
    await page.waitForTimeout(10000)
})