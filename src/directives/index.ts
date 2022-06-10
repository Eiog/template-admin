import waterMarke  from "./waterMark"
import permission from './permission'
const directives = {
    waterMarke,
    permission
}
export default {
    install(Vue){
        Object.keys(directives).forEach(key=>{
            Vue.directive(key,directives[key])
        })
    }
}