import { Page } from 'puppeteer'

export class Deviceonofflog {
    public async onoffLog(
        page: Page,
        waitForSelectorONOFFTable: string,
        onoffContent: string,
        exportONOFFContnetBtn: string,
        deleteONOFFContnetDiv: string,
    ) {
        await page.waitForSelector(waitForSelectorONOFFTable);
        const onoff_Info = await page.$$eval(onoffContent, eles => eles.map(ele => ele.textContent))
        onoff_Info ? console.log(`Deviceonofflog --> ${onoff_Info}`) : console.log('onoff_Info --查询不到设备上下线记录');

        await page.click(exportONOFFContnetBtn,{delay:1000}).then(() => {
            try {
                console.log('Deviceonofflog -- 设备信息 -- 导出数据成功')
            } catch (error) {
                console.log(`Deviceonofflog -- 设备信息 -- 导出数据失败${error}`)
            }
        }); //导出查询数据

        await page.click(deleteONOFFContnetDiv, { delay: 1000 })
    }
}