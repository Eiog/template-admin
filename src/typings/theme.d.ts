declare namespace ThemeSetting {
    interface Theme {
        darkMode: boolean,
        autoMode: boolean,
        themeColor: ThemeColor['color']
        themeColorList: ThemeColor[]
        otherColor: OtherColor
        layout: Layout
        header: Header
        tab: Tab
        side: Side
        main: Main
        footer: Footer
    }
    enum Mode {
        vertical = '左右布局',
        horizontal = '上下布局'
    }
    type ThemeColor = {
        name: string
        color: string
    }
    type OtherColor = {
        info: string,
        success: string,
        warning: string,
        error: string
    }
    type Layout = {
        mode: keyof typeof Mode;
        minWidth: number,
        collapsed: boolean,
        hasTabs: boolean,
        modeList: {
            value: keyof typeof Mode,
            lable: `${Mode}`
        }[]
    }
    type Header = {
        inverted: boolean,
        fixed: boolean,
        height: number
    }
    type Tab = {
        inverted: boolean,
        fixed: boolean,
        height: number
    }
    type Side = {
        inverted: boolean,
        fixed: boolean,
        width: number,
        collapsedWidth: number,
    }
    type Main = {
        animation: boolean,
        animationMode: string
    }
    type Footer = {
        inverted: boolean,
        fixed: boolean,
        height: number
    }
}