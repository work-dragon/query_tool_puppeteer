import { Page } from 'puppeteer';
import { config } from './config';

export class LoginInfo {
    public async userInfo(page: Page, waitForSelector: string, accountInput: string, passwordInput: string, account: string, password: string, loginBtn: string, pressEnter?: string) {
        // 跳转网站
        await page.goto(config.url).then(() => {
            try {
                console.log('成功跳转指定网站');
            } catch (error) {
                console.log(error);
                throw new Error('跳转失败')
            }
        });

        // 等待，直到“waitForSelector”元素呈现
        await page.waitForSelector(waitForSelector)

        //获取输入框属性并输入账号和密码
        await page.type(accountInput, account, { delay: 50 })
        await page.type(passwordInput, password, { delay: 50 })

        //回车登录 或 点击登录btn
        pressEnter ? await page.keyboard.press(pressEnter).then(() => console.log('回车登录')) : await page.click(loginBtn).then(() => console.log('点击登录'))
    }
}