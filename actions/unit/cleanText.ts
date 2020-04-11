import { Page } from 'puppeteer'

export class CleanText {
    public async keyboardclean(page: Page) {
        await page.keyboard.down('Control');
        await page.keyboard.press('a');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');
    }
    public async domClean(page: Page, antInputValueSelector: string) {
        await page.waitForSelector(antInputValueSelector),
        await page.evaluate(() => (<HTMLInputElement>document.querySelector(antInputValueSelector)).value = '')
    }
}