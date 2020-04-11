export const elements = {
    //sign in
    waitForSingInDOM: '#root > div > div > div:nth-child(2)',
    accountInput: '#root > div > div > div:nth-child(2) > span:nth-child(1) > input',
    passwordInput: '#root > div > div > div:nth-child(2) > span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg > input',
    signInBtn: '#root > div > div > div:nth-child(2) > button',
    pressEnter: 'Enter',

    //get userInfo
    userInfo___7ZPSO: '#root > div > section > section > header > div > div > span.userInfo___7ZPSO',

    // 缩小扩大Nav
    navinfoSelelctor: '#root > div > section > aside > div > div > ul',
    narrowAndExpandNav: '#root > div > section > section > header > div > button',

    deletePreTabDiv: '#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div > i > svg > path',

    /**
     * NavDeviceInfoSearch
     */
    waitForSelectorSearchInput: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper',
    deviceIdInputSearchSelelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input',
    searchBtn: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > button',
    waitForSelectorSearchContentTbody: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr',
    // searchContent: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr',
    exportDataBtn: ' #root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div:nth-child(1) > button > a',
    deleteDeviceInfoSearchInputValue: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > span > i > svg > path',

    //Sharer
    viewSharerLimitBtn: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(16) > button > span',
    viewSharerDialogDiv: 'body > div:nth-child(8) > div > div.ant-modal-wrap > div > div.ant-modal-content > div',
    sharerDialogContent: 'body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-body > div > div > div > div > div > div > div > div > div.ant-table-placeholder > div > p',
    sharerDialogAccept: 'body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button',

    //DeviceStatus
    viewDeviceStatusBtn: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(17) > button > span',
    viewDeviceStatusDialogDiv: 'body > div:nth-child(8) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-body > div',
    deviceStatusDialogContent: 'body > div:nth-child(8) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-body > div > pre',
    deviceStatusDialogAccept: 'body > div:nth-child(8) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button > span',

    /**
    * NavDeviceonoffLog
    */
    viewonoffBtn: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(18) > button',
    waitForSelectorONOFFTbody: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input',
    exportONOFFContnetBtn: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div:nth-child(1) > button > a',
    deleteONOFFContnetDiv: '#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i',


    // onclick
    onClickONOFFLiSelelctor: '#root > div > section > aside > div > div > ul > li:nth-child(3)',
    onoffLogdeviceIdInputSearchSelelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input',
    clickLeftSelectionTimeSelelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(2) > span.ant-calendar-picker > span > input:nth-child(1)',
    // leftSelectionTimeTextSelelctor: ' body > div:nth-child(4) > div > div > div > div > div.ant-calendar-date-panel > div.ant-calendar-range-part.ant-calendar-range-left > div.ant-calendar-input-wrap > div > input',
    leftSelectionTimeTextSelelctor: 'body > div:nth-child(4) > div > div > div > div > div.ant-calendar-date-panel > div.ant-calendar-range-part.ant-calendar-range-left > div:nth-child(2) > div.ant-calendar-body > table > tbody > tr:nth-child(3) > td:nth-child(1)',
    clickRightSelectionTimeSelelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(2) > span.ant-calendar-picker > span > input:nth-child(3)',
    // rightSelectionTimeTextSelelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(2) > span.ant-calendar-picker > span > input:nth-child(3)',
    rightSelectionTimeTextSelelctor: 'body > div:nth-child(4) > div > div > div > div > div.ant-calendar-date-panel > div.ant-calendar-range-part.ant-calendar-range-left > div:nth-child(2) > div.ant-calendar-body > table > tbody > tr:nth-child(3) > td:nth-child(7)',
    acceptSelectionTimeTextSelelctor: 'body > div:nth-child(3) > div > div > div > div > div.ant-calendar-footer.ant-calendar-range-bottom.ant-calendar-footer-show-ok > div > a.ant-calendar-ok-btn',
    searchBtnSlelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.queryPanel___3l-Tv > div > button',

    /**
    * NavUserSearch
    */
    onClickUserLiSelelctor: '#root > div > section > aside > div > div > ul > li:nth-child(2)',
    userAccountInputSearchSelelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input',
    userSearchBtnSlelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.queryPanel___3l-Tv > div > button',
    waitForSelectorUserSearchContentTbody: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr',
    exportuserAccountInfoDataBtn: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div:nth-child(1) > button > a',
    deleteUserSearchContnetDiv: '#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i > svg',
    cleanUserDeviceIdText: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > span > i > svg > path',

    /**
     * NavHistoryRecord
     */
    onClickHistoryLiSelelctor: '#root > div > section > aside > div > div > ul > li:nth-child(4)',
    historyDeviceIdInputSearchSelelctor: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input',
    historySearchBtnSlelctor: 'button.ant-btn.queryBtn___EiRjA.ant-btn-primary',
    cleanHistoryDeviceIdText: '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > span > i > svg > path',



    //sign out
    signOutBtn: '#root > div > section > section > header > div > div > button',


    antInputValueSelector: "input.ant-input"
}