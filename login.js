const puppeteer = require('puppeteer');

let browser;
let page;
let account = 'gavin.nie@coolkit.cn';
let psw = '123456'


const test = async () => {
    browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1500, height: 868 } }) //启动浏览器
    page = await browser.newPage()  //打开新的页面
    try {
        await page.goto('https://cn-iotquery.coolkit.cn/')  //跳转到指定网站
    } catch (error) {
        console.log(`跳转网页 ---> ${error}`)
    }


    //获取输入框属性
    await page.type('#root > div > div > div:nth-child(2) > span:nth-child(1) > input', account, { delay: 50 })  //获取input登录框，并输入账号
    await page.type('#root > div > div > div:nth-child(2) > span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg > input', psw, { delay: 50 }) //获取input密码框，并输入你妈


    //回车登录/点击登录btn
    try {
        // await page.click('.ant-btn').then(() => console.log('点击按钮登录成功'))
        await page.keyboard.press('Enter').then(() => console.log('敲击回车登录成功'))  //模拟敲击回车实现登录
    } catch (e) {
        throw new Error('账号密码不正确')
    }

    //查看登录后页面的标签元素是否存在
    await page.waitForSelector('#root > div > section > section > header > div > div > span.userInfo___7ZPSO')  // 等待，直到“userInfo”元素呈现
    //用户信息是否为空
    const user_Info = await page.$eval('#root > div > section > section > header > div > div > span.userInfo___7ZPSO', ele => ele.textContent);  //获取userInfo
    user_Info === undefined || null ? console.log('无用户信息') : console.log(`user_Info --> ${user_Info}`) //打印userInfo


    // 移动鼠标 点击chipId ---- 下拉框无法实现
    // const selectValue = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > div > div > div > div'
    // await page.waitForSelector(selectValue);
    // try {
    //     // await page.select(selectValue, 'chipId')
    //     // await page.mouse.down()
    //     //await page.mouse.move(selectInfo.x, selectInfo.y / 2, { delay: 1000 })
    //     //await page.mouse.click(selectInfo.x, selectInfo.y / 2, { delay: 1000 });
    //     // await page.mouse.up()
    // } catch (error) {
    //     console.log(error)
    // }


    // 获取导航栏信息
    const nav_Info = await page.$$eval('#root > div > section > aside > div > div > ul', eles => eles.map(ele => ele.textContent))
    nav_Info ? console.log(`nav_Info --> ${nav_Info}`) : console.log('获取导航栏信息失败')


    /**
     * 设备信息查询
     */
    const searchInput = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input';
    const tableValue = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr';
    await page.waitForSelector(searchInput)     // 等待，直到“searchInput”元素呈现 
    //    await page.click('#root > div > section > aside > div > div > ul > li:nth-child(1) > a', { delay: 500 }).then(() => console.log('click --> 设备查询信息'));
    await page.type(searchInput, '1000028060', { delay: 50 });     //选择对应的ipunt框，并输入内容 1000028060
    await page.click('#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > button'); //点击 查询 按钮
    await page.waitForSelector(tableValue);     //等待，直到“userInfo”元素呈现
    const table_Info = await page.$$eval(tableValue, eles => eles.map(ele => ele.textContent));          //获取table里的tr,遍历tr里td的内容
    table_Info ? console.log(`table_Info --> ${table_Info}`) : console.log('deviceid -- 设备信息查询失败')  //打印查询数据
    await page.click('#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div:nth-child(1) > button').then(() => {
        try {
            console.log('deviceid -- 设备信息 -- 导出数据成功')
        } catch (error) {
            console.log(`deviceid -- 设备信息 -- 导出数据失败${error}`)
        }
    }); //导出查询数据


    // await page.click('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i > svg', { delay: 500 }).then(() => console.log('delete --> 用户信息查询成功'))


    /**
    *  导航栏点击事件 操作
    */
    // await page.click('#root > div > section > aside > div > div > ul > li:nth-child(3) > a', { delay: 500 }).then(() => console.log('click --> 上下线记录查询'));
    // await page.click('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i > svg', { delay: 500 }).then(() => console.log('delete --> 上下线记录查询'))




    // await page.click('#root > div > section > aside > div > div > ul > li:nth-child(4) > a', { delay: 500 }).then(() => console.log('click --> 操作历史记录'));
    // await page.click('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i > svg', { delay: 500 }).then(() => console.log('delete --> 操作历史记录'))



    // await page.click('#root > div > section > aside > div > div > ul > li:nth-child(2) > a', { delay: 500 }).then(() => console.log('click --> 用户信息查询成功'));
    // await page.click('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i > svg', { delay: 500 }).then(() => console.log('delete --> 设备查询信息'))


    //点击按钮缩小导航条
    // await page.click('#root > div > section > section > header > div > button').then(() => console.log('导航栏已缩小')) //缩小
    // await page.click('#root > div > section > section > header > div > button',{delay: 1500}).then(() => console.log('导航栏已放大')) //放大


    // 退出登录
    try {
        await page.click('#root > div > section > section > header > div > div > button', { delay: 1000 });
    } catch (error) {
        console.log(`退出登录 --> ${error}`)
    }


    //等待两秒后关闭浏览器
    await page.waitFor(2 * 1000);
    await browser.close().then(() => console.log('关闭浏览器'));

}
test()