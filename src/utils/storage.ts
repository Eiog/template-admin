export const setStorage = function (key: string, val: Object) {
    return window.localStorage.setItem(key, JSON.stringify(val))
}
export const getStorage = function (key: string) {
    return JSON.parse(window.localStorage.getItem(key) as string)
}
export const removeStorage = function(key:string){
    window.localStorage.removeItem(key)
}
export const clearStorage = function(){
    window.localStorage.clear()
}