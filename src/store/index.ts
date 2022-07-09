import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { setLocal,getLocal } from '@/utils'
const store = createPinia().use(createPersistedState({
    storage:{
        getItem(key:string):string|null{
            return getLocal(key)
        },
        setItem(key:string, value:string) {
            setLocal(key,value)
        },
    }
}))
export default store
export * from './modules'
export * from './subscribe'