import { Page } from 'puppeteer'
import { Deviceonofflog } from './deviceonofflog'
import { elements } from '../dom/element'
import { config } from './config'


export class NavInfo {
    public async navDeviceSearch(
        page: Page,

        navinfoSlelctor: string,                 //导航栏中的ul

        waitForSelectorInput: string,           // 等待，直到 输入框相关 元素呈现
        deviceIdInputSearchSlelctor: string,    //deviceID的输入框
        deviceIdText: string,                   //输入框的内容
        searchBtn: string,                      //查询的button

        waitForSelectorSearchContentTbody: string,   //等待，直到 搜索内容的相关 元素呈现

        exportDataBtn: string,                  //导出button

        viewonoffBtn?: string,                      //查看上下线纪录 button
        waitForSelectorONOFFTbody?: string,      //等待，直到“相关”元素呈现
        // onoffContent: string,                   //设备上下线内容
        exportONOFFContnetBtn?: string,          //导出上下线按钮
        deleteONOFFContnetDiv?: string,          //删除tab栏的div

        //传入 viewSharerLimitBtn 下列相关的Sharer 都需要传
        viewSharerLimitBtn?: string,             //查看被分享人+权限 button
        viewSharerDialogDiv?: string,            //点击被分享人+权限 dialog 
        sharerDialogContent?: string,             //被分享人+权限 dialog内容
        sharerDialogAccept?: string,             //被分享人+权限 确认 -- Dialog

        //传入 viewDeviceStatusBtn 下列相关的DeviceStatus 都需要传
        viewDeviceStatusBtn?: string,            //查看当前设备状态 button
        viewDeviceStatusDialogDiv?: string,       //当前设备状态的 dialog 
        deviceStatusDialogContent?: string,             //当前设备状态 dialog内容
        deviceStatusDialogAccept?: string,             //当前设备状态  确认 -- Dialog

    ) {
        // 获取导航栏信息
        const nav_Info = await page.$$eval(navinfoSlelctor, eles => eles.map(ele => ele.textContent))
        nav_Info ? console.log(`nav_Info --> ${nav_Info}`) : console.log('nav_Info -- 获取导航栏信息失败')

        //等待 搜索框元素 出现后输入内容并点击
        await page.waitForSelector(waitForSelectorInput)
        await page.type(deviceIdInputSearchSlelctor, deviceIdText, { delay: 100 })
        await page.click(searchBtn);

        //等待 搜索内容table元素 出现 获取搜索内容 并打印
        await page.waitForSelector(waitForSelectorSearchContentTbody);
        const deviceId_Info_tbody = await page.$$eval(waitForSelectorSearchContentTbody, eles => eles.map(ele => ele.textContent));
        deviceId_Info_tbody ? console.log(`deviceId_Info_tbody --> ${deviceId_Info_tbody}`) : console.log('deviceId_Info_tbody -- 设备信息查询失败');

        //导出查询数据
        await page.click(exportDataBtn, { delay: 1500 }).then(() => {
            try {
                console.log('deviceid_Info_tbody -- 设备信息 -- 导出数据成功')
            } catch (error) {
                console.log(`deviceid_Info_tbody -- 设备信息 -- 导出数据失败${error}`)
            }
        });

        // //查看被分享人+权限  -- 只可以点开，但无法获取dialog内容和点击
        // if (!viewSharerLimitBtn) {
        //     await page.waitForSelector(viewSharerLimitBtn)
        //     await page.click(viewSharerLimitBtn);
        //     await page.waitForSelector(viewSharerDialogDiv)
        //     const sharer_Dialog_Info = await page.$$eval(sharerDialogContent, eles => eles.map(ele => ele.textContent))
        //     sharer_Dialog_Info !== undefined || null ? console.log(`sharer_Dialog_Info --> ${sharer_Dialog_Info}`) : console.log('sharer_Dialog_Info -- 查看被分享人+权限的dialog内容失败');
        //     await page.click(sharerDialogAccept)
        // }

        // //当前设备状态
        // if (!viewDeviceStatusBtn) {
        //     await page.waitForSelector(viewDeviceStatusBtn)
        //     await page.click(viewDeviceStatusBtn);
        //     await page.waitForSelector(viewDeviceStatusDialogDiv)
        //     await page.$$eval(deviceStatusDialogContent, eles => eles.map(ele => console.log(`deviceStatusDialogContent --- ${ele.textContent}`)), { delay: 1500 })
        //     await page.click(deviceStatusDialogAccept)
        // }


        //上下线纪录
        // let deviceonofflog = new Deviceonofflog()
        // deviceonofflog.notClickLionoffLog(page, viewonoffBtn, waitForSelectorONOFFTbody, exportONOFFContnetBtn, deleteONOFFContnetDiv)

        //操作历史记录
    }

}