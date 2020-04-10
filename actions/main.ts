import { Page, launch, Browser } from 'puppeteer'
import { LoginInfo } from './unit/loginInfo'
import { NavInfo } from './unit/navInfo'
import { config } from './unit/config'
import { elements } from './dom/element'
import { Deviceonofflog } from './unit/deviceonofflog'


const run = async () => {
    let loginInfo = new LoginInfo();
    let navInfo = new NavInfo();
    let deviceonofflog = new Deviceonofflog()

    //open launch
    let browser = await launch({ headless: false, defaultViewport: { width: 1600, height: 868 }, timeout: 30000 })
    let page: Page = await browser.newPage();
    await page.waitFor(3 * 1000);

    //sing in
    await loginInfo.userInfo(page, elements.waitForSingInDOM, elements.accountInput, elements.passwordInput, config.account, config.password, elements.signInBtn, elements.pressEnter)

    //get userInfo
    await page.waitForSelector(elements.userInfo___7ZPSO)
    const user_Info = await page.$eval(elements.userInfo___7ZPSO, ele => ele.textContent);
    user_Info === undefined || null ? console.log('无用户信息') : console.log(`user_Info --> ${user_Info}`)

    //缩小Nav
    await page.click(elements.narrowAndExpandNav);

    //NavDeviceInfoSearch
    await navInfo.navDeviceSearch(
        page,
        elements.navinfoSelelctor,

        elements.waitForSelectorSearchInput,
        elements.deviceIdInputSearchSelelctor,
        config.deviceIdText,
        elements.searchBtn,

        elements.waitForSelectorSearchContentTbody,

        // elements.exportDataBtn,  //导出设备信息数据

        // elements.viewonoffBtn,
        // elements.waitForSelectorONOFFTbody,
        // elements.exportONOFFContnetBtn,
        // elements.deleteONOFFContnetDiv,

        //    elements.searchContent,

        //    elements.viewSharerLimitBtn,
        //    elements.viewSharerDialogDiv  ,
        //    elements.sharerDialogContent,
        //    elements.sharerDialogAccept,

        // elements.viewDeviceStatusBtn,
        // elements.viewDeviceStatusDialogDiv,
        // elements.deviceStatusDialogContent,
        // elements.deviceStatusDialogAccept,
    )

    //扩大Nav
    await page.click(elements.narrowAndExpandNav);

    //点击上下线记录查询
    await deviceonofflog.onClickLionoffLog(
        page,
        elements.onClickONOFFLiSelelctor,
        elements.onoffLogdeviceIdInputSearchSelelctor,
        config.deviceIdText,
        // elements.clickLeftSelectionTimeSelelctor,
        // elements.leftSelectionTimeTextSelelctor,
        // elements.rightSelectionTimeTextSelelctor,
        // elements.acceptSelectionTimeTextSelelctor,
        elements.searchBtnSlelctor,
        // elements.waitForSelectorONOFFTbody,
        // elements.exportONOFFContnetBtn,
        elements.deleteONOFFContnetDiv
    )




    // 退出登录
    try {
        await page.click(elements.signOutBtn, { delay: 1000 });
    } catch (error) {
        console.log(`退出登录 --> ${error}`)
    }

    //等待两秒后关闭浏览器
    await page.waitFor(2 * 1000);
    await browser.close().then(() => console.log('关闭浏览器'));
}
run()