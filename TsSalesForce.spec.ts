// How to log in to Salesforce using Playwright with TypeScript

// to print the title and url of a web page using Playwright.


import test, {chromium} from '@playwright/test'

test("SalesForce Login", async()=>{

    const browser = await chromium.launch ({channel: 'chrome', headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@name='pw']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(10000)
    const pageTitle = await page.title()
    console.log("Page Tilte: "+pageTitle)
    const pageUrl = await page.url()
    console.log("Page URL: "+pageUrl)
    await page.waitForTimeout(10000)
    await browser.close()

})
    
