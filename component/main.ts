import { Page, launch, Browser } from 'puppeteer'
import { LoginInfo } from './unit/loginInfo'
import { NavInfo } from './unit/navInfo'

//login
const waitForLoginDOM = '#root > div > div > div:nth-child(2)'
const accountInput = '#root > div > div > div:nth-child(2) > span:nth-child(1) > input'
const passwordInput = '#root > div > div > div:nth-child(2) > span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg > input'
const account = 'gavin.nie@coolkit.cn'
const password = '123456'
const loginBtn = '#root > div > div > div:nth-child(2) > button'
const pressEnter = 'Enter'

//userInfo
const userInfo___7ZPSO = '#root > div > section > section > header > div > div > span.userInfo___7ZPSO'

/**
 * NavInfo
 */
//NavDeviceInfoSearch
const waitForSelectorSearchInput = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper';
const deviceIdInputSearch = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input';
const deviceIdText = '1000028060'
const searchBtn = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > button'
// const waitForSelectorSearchContentTable = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr'
const waitForSelectorSearchContentTable = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody '
const searchContent = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr'
const exportDataBtn = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div:nth-child(1) > button > a'

//Sharer
const viewSharerLimit = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(16) > button'
const viewSharerDialogDiv = 'body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-body > div > div > div > div > div > div > div > div > div.ant-table-placeholder';
const sharerDialogContent = 'body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-body > div > div > div > div > div > div > div > div > div.ant-table-placeholder > div > p';
const sharerDialogAccept = 'body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button'

//DeviceStatus
const viewDeviceStatus = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(17) > button > span'
const viewonoff = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(18) > button > span'


// DeviceonoffLog
const waitForSelectorONOFFTable = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody'
const onoffContent = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr'
const exportONOFFContnetBtn = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div:nth-child(1) > button > a'
const deleteONOFFContnetDiv = '#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i > svg'

const logoutBtn = '#root > div > section > section > header > div > div > button'

const run = async () => {
    let browser = await launch({ headless: false, defaultViewport: { width: 1600, height: 868 } })
    let page: Page = await browser.newPage();
    let loginInfo = new LoginInfo();
    await loginInfo.userInfo(page, waitForLoginDOM, accountInput, passwordInput, account, password, loginBtn, pressEnter)

    await page.waitForSelector(userInfo___7ZPSO)
    const user_Info = await page.$eval(userInfo___7ZPSO, ele => ele.textContent);  //获取userInfo
    user_Info === undefined || null ? console.log('无用户信息') : console.log(`user_Info --> ${user_Info}`) //打印userInfo

    let navInfo = new NavInfo()
    await navInfo.navDeviceSearch(
        page,
        waitForSelectorSearchInput, 
        deviceIdInputSearch,
        deviceIdText,
        searchBtn,
        waitForSelectorSearchContentTable,
        searchContent,
        exportDataBtn,
        viewSharerLimit,
        viewSharerDialogDiv,
        viewDeviceStatus,
        viewonoff,
        // waitForSelectorONOFFTable,
        // onoffContent,
        // exportONOFFContnetBtn,
        // deleteONOFFContnetDiv,
    )


    // 退出登录
    try {
        await page.click(logoutBtn, { delay: 1000 });
    } catch (error) {
        console.log(`退出登录 --> ${error}`)
    }

    //等待两秒后关闭浏览器
    await page.waitFor(2 * 1000);
    await browser.close().then(() => console.log('关闭浏览器'));
}
run()