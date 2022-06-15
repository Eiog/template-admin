import waterMarke  from "./waterMark"
import permission from './permission'
import lazyLoad from "./lazyLoad"
const directives = {
    waterMarke,
    permission,
    lazyLoad
}
export default {
    install(Vue){
        Object.keys(directives).forEach(key=>{
            Vue.directive(key,directives[key])
        })
    }
}