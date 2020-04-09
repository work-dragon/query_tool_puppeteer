const puppeteer = require('puppeteer');

let browser;
let page;



const test = async () => {
    browser = await puppeteer.launch({headless: false, defaultViewport: {width:1500, height: 868}})
    page = await browser.newPage()
    await page.goto('https://cn-iotquery.coolkit.cn/')
    

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
    // await page.screenshot({
    //     path: 'login.png',
    //     type: 'png',
    //     fullPage: true,
    // });

    //用户信息是否为空
    const user_Info = await page.$eval('#root > div > section > section > header > div > div > span.userInfo___7ZPSO', ele => ele.innerText);
    user_Info === undefined || null ? console.log('无用户信息') : console.log(`user_Info --> ${user_Info}`)

    // 设备信息查询
    const infosearch = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > div'
    const select = await page.waitForSelector(infosearch);
    await page.click(infosearch);
    const selectInfo = await select.boundingBox();
    console.log(selectInfo)

    // 移动鼠标    点击chipId
    // await page.mouse(selectInfo.x/2, selectInfo.y/2)
    const chipid = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > div > div > div > div'
    await page.waitForSelector(chipid);
    await page.click(chipid);

    /**
     *  导航栏点击事件 操作
    */
    // await page.click('#root > div > section > aside > div > div > ul > li:nth-child(2) > a', { delay: 500 }).then(() => console.log('click --> 用户信息查询成功'));
    // await page.click('#root > div > section > aside > div > div > ul > li:nth-child(3) > a', { delay: 500 }).then(() => console.log('click --> 上下线记录查询'));
    // await page.click('#root > div > section > aside > div > div > ul > li:nth-child(4) > a', { delay: 500 }).then(() => console.log('click --> 操作历史记录'));
    // await page.click('#root > div > section > aside > div > div > ul > li:nth-child(1) > a', { delay: 500 }).then(() => console.log('click --> 设备查询信息'));

    // 获取导航栏信息
    // const nav_Info = await page.$$evel('#root > div > section > aside > div > div > ul', eles => eles.map(ele => ele.innerHTML))
    // nav_Info ? console.log(`nav_Info --> ${nav_Info}`) : console.log('获取导航栏信息失败')


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