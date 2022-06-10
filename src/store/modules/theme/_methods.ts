import { colord } from "colord"
import type { GlobalThemeOverrides } from 'naive-ui';
import { defaultThemeSetting } from '@/setting/theme/index';
import { getThemeColor } from "@/utils";
interface colors{
    primary:string,
    info:string,
    success:string,
    warning:string,
    error:string
}
function getColor(color){
    return {
        color:color,
        hover:colord(color).lighten(.1).toHex(),
        pressed:colord(color).darken(.1).toHex(),
        suppl:colord(color).lighten(.1).toHex()
    }
}

export function getDefaultThemeSetting(){
    const themeColor = getThemeColor()||defaultThemeSetting.themeColor
    return {...defaultThemeSetting,themeColor}
}
export function getNaiveThemeOverrides(colors:colors):GlobalThemeOverrides{
    const {primary,info,success,warning,error} = colors
    const themeColors = {
        primaryColor:primary,
        primaryColorHover:getColor(primary).hover,
        primaryColorPressed:getColor(primary).pressed,
        primaryColorSuppl:getColor(primary).suppl,
        infoColor:info,
        infoColorHover:getColor(info).hover,
        infoColorPressed:getColor(info).pressed,
        infoColorSuppl:getColor(info).suppl,
        successColor:success,
        successColorHover:getColor(success).hover,
        successColorPressed:getColor(success).pressed,
        successColorSuppl:getColor(success).suppl,
        warningColor:warning,
        warningColorHover:getColor(warning).hover,
        warningColorPressed:getColor(warning).pressed,
        warningColorSuppl:getColor(warning).suppl,
        errorColor:error,
        errorColorHover:getColor(error).hover,
        errorColorPressed:getColor(error).pressed,
        errorColorSuppl:getColor(error).suppl,
    }
    return {
        common:{
            ...themeColors
        }
    }
}