import { initMixin } from './init'

function Vue(options){
    if(!(this instanceof Vue)){
        console.log('使用new创建实例')
    }
    // 初始化
    this._init(options)
}

// 以下的初始化，其实就是在原型上增加方法，例如 _init 方法
initMixin(Vue)

export default Vue