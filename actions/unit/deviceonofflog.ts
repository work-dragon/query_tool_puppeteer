import { Page } from 'puppeteer'
import { elements } from '../dom/element'
import { config } from './config'

export class Deviceonofflog {
    //无点击是从设备信息查询的table中点击进入
    public async notClickLionoffLog(
        page: Page,
        viewonoffBtn,
        waitForSelectorONOFFTbody: string,
        // onoffContent: string,
        exportONOFFContnetBtn: string,
        deleteONOFFContnetDiv: string,
    ) {
        console.log('1111')
        await page.waitForSelector(viewonoffBtn)
        await page.click(viewonoffBtn)
        console.log('222')
        await page.waitForSelector(waitForSelectorONOFFTbody)
        const onoff_Info = await page.$$eval(waitForSelectorONOFFTbody, eles => eles.map(ele => ele.textContent))
        onoff_Info ? console.log(`onoff_Info --> ${onoff_Info}`) : console.log('onoff_Info --查询不到设备上下线记录');


        await page.waitForSelector(exportONOFFContnetBtn)
        await page.click(exportONOFFContnetBtn, { delay: 1000 }).then(() => {
            try {
                console.log('Deviceonofflog -- 设备信息 -- 导出数据成功')
            } catch (error) {
                console.log(`Deviceonofflog -- 设备信息 -- 导出数据失败${error}`)
            }
        }); //导出查询数据

        await page.click(deleteONOFFContnetDiv, { delay: 1000 })
    }

    //从导航栏中点击进入
    public async onClickLionoffLog(
        page: Page,
        onClickONOFFLiSelelctor: string,
        onoffLogdeviceIdInputSearchSelelctor: string,
        deviceIdText: string,

        // clickLeftSelectionTimeSelelctor: string,
        // leftSelectionTimeTextSelelctor: string,
        // leftSelectionTimeText: string,

        // clickRightSelectionTimeSelelctor: string,
        // rightSelectionTimeTextSelelctor: string,
        // rightSelectionTimeText: string,
        // acceptSelectionTimeTextSelelctor:string,
        searchBtnSlelctor: string,

        // waitForSelectorONOFFTbody: string,
        // onoffContent: string,
        // exportONOFFContnetBtn: string,
        deleteONOFFContnetDiv: string,
    ) {
        //点击导航栏中 上下线 Li slector
        await page.waitForSelector(onClickONOFFLiSelelctor)
        await page.click(onClickONOFFLiSelelctor)

        //等待 上下线页面 的搜索框元素出现
        //输入deviceID查询条件
        await page.waitForSelector(onoffLogdeviceIdInputSearchSelelctor)
        await page.type(onoffLogdeviceIdInputSearchSelelctor, deviceIdText, { delay: 100 })

        //选择日期
        // await page.click(clickLeftSelectionTimeSelelctor,{delay: 100})
        // await page.click(leftSelectionTimeTextSelelctor, {delay:100})
        // await page.click(rightSelectionTimeTextSelelctor, {delay: 100})
        // await page.waitForSelector(acceptSelectionTimeTextSelelctor)
        // await page.click(acceptSelectionTimeTextSelelctor,{delay: 100})
        // await page.evaluate(() => (<HTMLInputElement>document.querySelector(leftSelectionTimeTextSelelctor)).value = leftSelectionTimeText)
        // await page.click(clickRightSelectionTimeSelelctor, {delay:100})
        // await page.evaluate(() => (<HTMLInputElement>document.querySelector(rightSelectionTimeTextSelelctor)).value = rightSelectionTimeText)

        //点击查询
        await page.click(searchBtnSlelctor)


        //获取查询内容并打印
        //等待 查询内容 table元素出现
        // await page.waitForSelector(waitForSelectorONOFFTbody)
        // const onoff_Info = await page.$$eval(waitForSelectorONOFFTbody, eles => eles.map(ele => ele.textContent))
        // onoff_Info ? console.log(`Deviceonofflog --> ${onoff_Info}`) : console.log('onoff_Info --查询不到设备上下线记录');

        //导出查询数据内容
        // await page.waitForSelector(exportONOFFContnetBtn)
        // await page.click(exportONOFFContnetBtn, { delay: 1000 }).then(() => {
        //     try {
        //         console.log('Deviceonofflog -- 设备信息 -- 导出数据成功')
        //     } catch (error) {
        //         console.log(`Deviceonofflog -- 设备信息 -- 导出数据失败${error}`)
        //     }
        // });

        //删除tab栏
        await page.click(deleteONOFFContnetDiv, { delay: 1000 })
    }
}
