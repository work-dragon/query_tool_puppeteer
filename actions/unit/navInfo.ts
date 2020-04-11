import { Page } from 'puppeteer'

export class NavInfo {
    //设备信息查询
    public async navDeviceSearch(
        page: Page,

        navinfoSlelctor: string,                 //导航栏中的ul

        waitForSelectorInput: string,           // 等待，直到 输入框相关 元素呈现
        deviceIdInputSearchSlelctor: string,    //deviceID的输入框
        deviceIdText: string,                   //输入框的内容
        searchBtn: string,                      //查询的button

        waitForSelectorSearchContentTbody: string,   //等待，直到 搜索内容的相关 元素呈现
        deleteDeviceInfoSearchInputValue: string,   //清空输入框的内容

        exportDataBtn?: string,                  //导出button

        viewonoffBtn?: string,                      //查看上下线纪录 button
        waitForSelectorUserSearchContentTbody?: string,      //等待，直到“相关”元素呈现
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
        const navText = await page.$$eval(navinfoSlelctor, eles => eles.map(ele => ele.textContent));
        navText ? console.log(`navText --> ${navText}`) : console.log('navText -- 获取导航栏信息失败');

        //等待 搜索框元素 出现后输入内容并点击
        await page.waitForSelector(waitForSelectorInput);
        await page.click(deviceIdInputSearchSlelctor);

        // await cleanText(page);;
        // let cleanText = new CleanText()
        // await cleanText.domClean(page, elements.antInputValueSelector)    


        await page.type(deviceIdInputSearchSlelctor, deviceIdText, { delay: 500 });
        await page.click(searchBtn);

        //等待 搜索内容table元素 出现 获取搜索内容 并打印
        await page.waitForSelector(waitForSelectorSearchContentTbody);
        const navDeviceId_Info_tbody = await page.$$eval(waitForSelectorSearchContentTbody, eles => eles.map(ele => ele.textContent));
        navDeviceId_Info_tbody ? console.log(`navDeviceId_Info_tbody --> ${navDeviceId_Info_tbody}`) : console.log('navDeviceId_Info_tbody -- 设备信息查询失败');

        //导出查询数据
        if (exportDataBtn) {
            await page.waitForSelector(exportDataBtn)
            await page.click(exportDataBtn, { delay: 1500 }).then(() => {
                try {
                    console.log('navDeviceid_Info_tbody -- 设备信息 -- 导出数据成功')
                } catch (error) {
                    console.log(`navDeviceid_Info_tbody -- 设备信息 -- 导出数据失败${error}`)
                }
            })
        };

        await page.waitForSelector(deleteDeviceInfoSearchInputValue);
        await page.click(deleteDeviceInfoSearchInputValue, { delay: 2000 }).then(() => console.log('清空 设备信息查询 输入框的内容'));

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
        // deviceonofflog.notClickLionoffLog(page, viewonoffBtn, waitForSelectorUserSearchContentTbody, exportONOFFContnetBtn, deleteONOFFContnetDiv)

        //操作历史记录
    }
    //用户信息查询
    public async navUserSearch(
        page: Page,
        deletePreTabDiv: string,
        onClickUserLiSelelctor: string,
        userAccountInputSearchSelelctor: string,
        accountPhone: string,
        userSearchBtnSlelctor: string,
        waitForSelectorUserSearchContentTbody: string,
        cleanUserDeviceIdText:string,
        exportuserAccountInfoDataBtn: string,
    ) {

        console.log('从导航栏中进入 用户信息查询')
        await page.waitForSelector(onClickUserLiSelelctor);
        await page.click(onClickUserLiSelelctor);

        await page.waitForSelector(userAccountInputSearchSelelctor);
        await page.click(userAccountInputSearchSelelctor);

        // await cleanText(page);
        await page.waitForSelector(deletePreTabDiv)
        await page.click(deletePreTabDiv, { delay: 1000 }).then(() => console.log('关闭用户信息查询前一个tab栏'));

        await page.type(userAccountInputSearchSelelctor, accountPhone, { delay: 500 });
        await page.click(userSearchBtnSlelctor).then(() => console.log('在用户信息查询中 点击查询按钮'));

        await page.waitForSelector(waitForSelectorUserSearchContentTbody);
        await page.click(waitForSelectorUserSearchContentTbody);
        const navUserSearch_Info = await page.$$eval(waitForSelectorUserSearchContentTbody, eles => eles.map(ele => ele.textContent));
        navUserSearch_Info ? console.log(`navUserSearch_Info --> ${navUserSearch_Info}`) : console.log('navUserSearch_Info -- 查询用户信息失败');

        //导出查询数据
        if (exportuserAccountInfoDataBtn) {
            await page.waitForSelector(exportuserAccountInfoDataBtn);
            await page.click(exportuserAccountInfoDataBtn, { delay: 1500 }).then(() => {
                try {
                    console.log('navUser_Info_tbody -- 用户账号信息 -- 导出数据成功')
                } catch (error) {
                    console.log(`navUser_Info_tbody -- 用户账号信息 -- 导出数据失败${error}`)
                }
            })
        };

        await page.click(cleanUserDeviceIdText).then(() => console.log('清空 用户信息查询 输入框的内容'));
    }
    //操作历史记录
    public async navHistoryRecord(
        page: Page,
        onClickHistoryLiSelelctor: string,
        deletePreTabDiv: string,
        historyDeviceIdInputSearchSelelctor: string,
        historyDeviceIdText: string,
        historySearchBtnSlelctor: string,
        cleanHistoryDeviceIdText: string,
    ) {
        console.log('从导航栏中进入 操作历史记录')
        await page.waitForSelector(onClickHistoryLiSelelctor);
        await page.click(onClickHistoryLiSelelctor);

        await page.waitForSelector(deletePreTabDiv);
        await page.click(deletePreTabDiv).then(() => console.log('关闭操作历史记录前一个tab栏'));

        await page.waitForSelector(historyDeviceIdInputSearchSelelctor);
        await page.type(historyDeviceIdInputSearchSelelctor, historyDeviceIdText, { delay: 500 }).then(() => console.log(`点击操作历史记录 --> 查询条件 deviceid  Input并输入-${historyDeviceIdText}-`));

        await page.click(historySearchBtnSlelctor).then(() => console.log('在操作历史中 点击查询按钮'));
        await page.click(cleanHistoryDeviceIdText).then(() => console.log('清空 操作历史记录 输入框的内容'));
    }
}