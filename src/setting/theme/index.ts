const themeColorList = [
    { name: "朱砂", color: "#ff461f" },
    { name: "火红", color: "#ff2d51" },
    { name: "鹅黄", color: "#fff143" },
    { name: "蔚蓝", color: "#70f3ff" },
    { name: "石青", color: "#1685a9" },
    { name: "靛蓝", color: "#065279" },
    { name: "品红", color: "#f00056" },
    { name: "宝蓝", color: "#4b5cc4" },
    { name: "蓝灰色", color: "#a1afc9" },
    { name: "青葱", color: "#0aa344" },
    { name: "黛紫", color: "#574266" },
    { name: "乌色", color: "#725e82" },
    { name: "玄青", color: "#3d3b4f" },
    { name: "丁香色", color: "#cca4e3" },
    { name: "鸦青", color: "#424c50" },
    { name: "藕色", color: "#edd1d8" },
]
const defaultThemeSetting = {
    darkMode: false,
    autoMode: false,
    themeColor: themeColorList[0].color,
    themeColorList: themeColorList,
    otherColor: {
        info: '#2080f0',
        success: '#52c41a',
        warning: '#faad14',
        error: '#f5222d'
    },
    layout: {
        mode: 'vertical',
        minWidth: 1200,
        collapsed: false,
        hasTabs: true,
        modeList: [
            { value: 'vertical', lable: '左右布局' },
            { value: 'horizontal', lable: '上下布局' },
        ]
    },
    header: {
        inverted: false,
        fixed: true,
        height: 56
    },
    tabs: {
        inverted: false,
        fixed: true,
        height: 44
    },
    side: {
        inverted: false,
        fixed: true,
        width: 200,
        collapsedWidth: 64,
    },
    main: {
        animation: true,
        animationMode: 'fade-in'
    },
    footer: {
        inverted: false,
        fixed: true,
        height: 60,
    }
}
export function getDefaultThemeSetting(){
    return defaultThemeSetting
}