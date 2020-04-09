const puppeteer = require('puppeteer');

let browser;
let page;


//生命周期
beforeAll(async () => {
    //打开浏览器
    browser = await puppeteer.launch({
        headless: false, //开启浏览器模式
        defaultViewport: { width: 2000, height: 868 } //默认页面宽高
    });

    //打开一个空白页
    page = await browser.newPage();

})

afterAll(async () => {
    //操作完成，关闭浏览器  
    await browser.close()
})

descrips('打开 查询售后工具 网站并登陆', () => {
    test('打开 查询售后工具', () => {
        //跳转到指定页面
        try {
            page.goto('https://cn-iotquery.coolkit.cn/')
            console.log('打开 测试网页 ')
        } catch (e) {
            throw new Error('请求页面超时')
        }
    })
    test('账号及密码内容是否相等', () => {

    })
    test('点击按钮/敲击回车 实现成功登录', () => {

    })
})
const test = async () => {

    const [jsCoverage, cssCoverage] = await Promise.all([
        page.coverage.stopJSCoverage(),
        page.coverage.stopCSSCoverage(),
    ]);
    let totalBytes = 0;
    let usedBytes = 0;
    const coverage = [...jsCoverage, ...cssCoverage];
    for (const entry of coverage) {
        totalBytes += entry.text.length;
        for (const range of entry.ranges)
            usedBytes += range.end - range.start - 1;
    }
    console.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);

    //获取输入框属性
    await page.type('#root > div > div > div:nth-child(2) > span:nth-child(1) > input', account, { delay: 50 })
    await page.type('#root > div > div > div:nth-child(2) > span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg > input', psw, { delay: 50 })

    //回车登录/点击登录btn
    try {
        // await page.click('.ant-btn').then(() => console.log('点击按钮登录成功'))
        await page.keyboard.press('Enter').then(() => console.log('敲击回车登录成功'))
    } catch (e) {
        throw new Error('账号密码不正确')
    }

    //查看登录后页面的标签元素是否存在
    await page.waitForSelector('#root > div > section > section > header > div > div > span.userInfo___7ZPSO')

    // 元素存在即代表页面加载成功，然后截图
    await page.screenshot({
        path: 'login.png',
        type: 'png',
        fullPage: true,
    });

    //用户信息是否为空
    const user_Info = await page.$eval('#root > div > section > section > header > div > div > span.userInfo___7ZPSO', ele => ele.innerText);
    user_Info === undefined || null ? console.log('无用户信息') : console.log(`user_Info --> ${user_Info}`)


    /**
     *  导航栏点击事件 操作
    */
    await page.click('#root > div > section > aside > div > div > ul > li:nth-child(2) > a', { delay: 500 }).then(() => console.log('click --> 用户信息查询成功'));
    await page.click('#root > div > section > aside > div > div > ul > li:nth-child(3) > a', { delay: 500 }).then(() => console.log('click --> 上下线记录查询'));
    await page.click('#root > div > section > aside > div > div > ul > li:nth-child(4) > a', { delay: 500 }).then(() => console.log('click --> 操作历史记录'));
    await page.click('#root > div > section > aside > div > div > ul > li:nth-child(1) > a', { delay: 500 }).then(() => console.log('click --> 设备查询信息'));

    // 获取导航栏信息
    const nav_Info = await page.$$evel('#root > div > section > aside > div > div > ul', eles => eles.map(ele => ele.innerHTML))
    nav_Info ? console.log(`nav_Info --> ${nav_Info}`) : console.log('获取导航栏信息失败')


    // 删除信息栏
    // const del_box = await page.$('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1)'); //父级
    // const device_serach = await page.$('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div > i > svg');
    // const history = await page.$('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div:nth-child(2) > div > i > svg');
    // const on_offline = await page.$('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div:nth-child(3) > div > i > svg')
    // const user_serach = await page.$('#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i > svg')
    // if(del_box.length >= 2){
    //     await page.click(device_serach, {delay :500}).then(() => console.log('delete --> device_serach'))
    //     await page.click(history, {delay :500}).then(() => console.log('delete --> history'))
    //     await page.click(on_offline, {delay :500}).then(() => console.log('delete --> on_offline'))
    //     await page.click(user_serach, {delay :500}).then(() => console.log('delete --> user_serach'))
    // }

    /**
     * 点击设备查询信息 相关操作
    */
    //得到选择条件框元素
    // let element  = await page.$('#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > div > div > span'); 
    // let box = element.boundingBox()
    // const x = box.x + (box.width/2);
    // const y = box.y + (box.height/2);
    // await page.mouse.move(x , y)
    // await page.click();


    // await page.type('#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input',
    // '+86')
    // .then(() => console.log())


    //点击按钮缩小导航条
    // await page.click('#root > div > section > section > header > div > button').then(() => console.log('导航栏已缩小')) //缩小
    // await page.click('#root > div > section > section > header > div > button',{delay: 1500}).then(() => console.log('导航栏已放大')) //放大

}
test()