//select and interact with elements using (Playwright getBys, CSS, XPath) and 
// to verify using auto retrying and non-retrying assertions

/* 1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone number
16. Click Create Lead button
17. Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions 
18. Get the page title */

import test, { expect } from '@playwright/test'
test ("Create Lead", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")                                            //CSS
    await page.locator("#password").fill("crmsfa")                                                      //CSS
    await page.locator("//input[contains(@class,'Submit')]").click()                                    //Xpath
    await page.locator("//a[contains(text(),'CRM')]").click()                                           //Xpath
    await page.locator(`text='Leads'`).click()                                                          //CSS
    await page.locator(`text='Create Lead'`).click()                                                    //CSS
    const companyName = await page.locator("//input[@id='createLeadForm_companyName']")                 //Xpath
    await companyName.fill("Test")
    await expect.soft(companyName).toHaveValue("Test")                                                  //Auto-Retry Soft
    const firstName = await page.locator("//input[@id='createLeadForm_firstName']")                     //Xpath
    await firstName.fill("SK")
    expect(firstName).toHaveValue("SK")                                                                 //Non-Retry Hard
    const lastName = await page.locator("//input[@id='createLeadForm_lastName']")                       //Xpath
    await lastName.fill("S") 
    expect.soft(lastName).toHaveValue("S")                                                              //Non-Retry Soft
    await page.locator("#createLeadForm_personalTitle").fill("Mr")                                      //CSS
    await page.locator("//input[@name='generalProfTitle']").fill("Test Engg")                           //Xpath
    await page.locator("//input[@name='annualRevenue']").fill("800000")                                 //Xpath
    await page.locator("//input[@name='departmentName']").fill("QA")                                    //Xpath
    await page.locator(".inputBox").nth(23).fill("9876543210")                                          //CSS
    await page.locator(".smallSubmit").click()                                                          //CSS
    await page.waitForTimeout(10000)
    const Status = await page.locator("//div[text()='View Lead']")
    await expect (Status).toHaveText("View Lead")                                                       //Auto-Retry Hard
    const pageTitle = await page.title()
    console.log("Title of the Page1 is "+ pageTitle)
    await page.waitForTimeout(10000)
})