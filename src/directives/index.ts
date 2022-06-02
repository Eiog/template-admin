import { waterMarker } from "./components"
const directives = {
    waterMarker
}
export default {
    install(Vue){
        Object.keys(directives).forEach(key=>{
            Vue.directive(key,directives[key])
        })
    }
}