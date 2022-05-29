export const HexToRgb = (str: string) => {
    const reg = /^\#?[0-9A-Fa-f]{6}$/
    if (!reg.test(str)) return console.log('hex错误');
    str = str.replace('#', '')
    let hxs: any = str.match(/../g)
    for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16)
    return hxs
}
export const RgbToHex = (r, g, b) => {
    const reg = /^\d{1,3}$/;
    if (!reg.test(r) || !reg.test(g) || !reg.test(b)) return console.log('rgb输入错误');
    let hexs = [r.toString(16), g.toString(16), b.toString(16)]
    for (let i = 0; i < 3; i++) if (hexs[i].length === 1) hexs[i] = '0' + hexs[i]
    return '#' + hexs.join('')
}
export const darkColor = (color: string, level: number) => {
    const reg = /^\#?[0-9A-Fa-f]{6}$/
    if (!reg.test(color)) return console.log('hex错误');
    const rgbc = HexToRgb(color)
    for (let i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level))
    return RgbToHex(rgbc[0], rgbc[1], rgbc[2])
}
export const lightColor = (color: string, level: number) => {
    const reg = /^\#?[0-9A-Fa-f]{6}$/
    if (!reg.test(color)) return console.log('hex错误');
    const rgbc = HexToRgb(color)
    for (let i = 0; i < 3; i++) rgbc[i] = Math.floor((2555 - rgbc[i]) * level + rgbc[i])
    return RgbToHex(rgbc[0], rgbc[1], rgbc[2])
}