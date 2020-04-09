import { Page } from 'puppeteer'
import { Deviceonofflog } from './deviceonofflog'

export class NavInfo {
    public async navDeviceSearch(
        page: Page,
        waitForSelector: string,                // 等待，直到“相关”元素呈现
        deviceIdInputSearch: string,            //deviceID的输入框
        deviceIdText: string,                   //输入框的内容
        searchBtn: string,                      //查询的button
        // waitForSelectorSearchContent: string,   //
        searchContent: string,                  //
        exportDataBtn: string,                  //导出button
        viewSharerLimit: string,                //查看被分享人+权限 button
        viewSharerDialogDiv: string,             //被分享人+权限 dialog 的div
        sharerDialogAccept:string,              //确认sharerDialog
        viewDeviceStatus: string,               //查看当前设备状态 button
        viewONOFF: string,                      //查看上下线纪录 button
        // waitForSelectorONOFFTable: string,      //等待，直到“相关”元素呈现
        onoffContent: string,                   //设备上下线内容
        // exportONOFFContnetBtn: string,          //导出上下线按钮
        deleteONOFFContnetDiv: string,          //删除tab栏的div

    ) {
        await page.waitForSelector(waitForSelector)
        await page.type(deviceIdInputSearch, deviceIdText, { delay: 100 })
        await page.click(searchBtn);

        await page.waitForSelector(waitForSelector);
        const deviceId_Info = await page.$$eval(searchContent, eles => eles.map(ele => ele.textContent));
        deviceId_Info ? console.log(`deviceId_Info --> ${deviceId_Info}`) : console.log('deviceid -- 设备信息查询失败');

        // await page.click(exportDataBtn).then(() => {
        //     try {
        //         console.log('deviceid_Info -- 设备信息 -- 导出数据成功')
        //     } catch (error) {
        //         console.log(`deviceid_Info -- 设备信息 -- 导出数据失败${error}`)
        //     }
        // }); //导出查询数据

        //查看被分享人+权限
        await page.click(viewSharerLimit);
        await page.waitForSelector(waitForSelector)
        await page.$$eval(viewSharerDialogDiv, eles =>  eles.map(ele => console.log(ele.textContent)))
        await page.click(sharerDialogAccept)
        // await page.on('dialog', async dialog => {
        //     console.log(`打印被分享人+权限dialog信息 ---> ${dialog.message()}`);
        //     await dialog.accept();
        // });

        //当前设备状态
        await page.click(viewDeviceStatus);
        // await page.on('dialog', async dialog => {
        //     console.log(`当前设备状态 params 信息 ---> ${dialog.message()}`);
        //     await dialog.accept();
        // });

        //上下线纪录
        await page.click(viewONOFF);
        let deviceonofflog = new Deviceonofflog()
        deviceonofflog.onoffLog(page, waitForSelector, onoffContent, exportDataBtn, deleteONOFFContnetDiv)

        //操作历史记录
    }
    public async navONOFFSearch() {

    }
}