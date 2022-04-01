import {
    mergeOptions
} from '../util/index'
import { initState } from './state'

let uid = 0
export function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        const vm = this

        vm._uid = uid++

        // TODO 计算初始化时间的代码，后续补上

        // 一个标志，标记当前的实例 是 Vue
        vm._isVue = true

        // 合并 options
        if (options && options._isComponent) {

        } else {
            // 参数 parent child vm
            vm.$options = mergeOptions(
                resolveConstructorOptions(vm.constructor),
                options || {},
                vm
            )
        }

        // 开发模式进行代理
        if (true) {
            // TODO 代理代码
        } else {
            vm._renderProxy = vm
        }

        // 当前对象放到属性上
        vm._self = vm

        // TODO 初始化生命周期
        // TODO 初始化事件
        // TODO 初始化插槽
        // TODO 第一个生命周期钩子函数执行
        // TODO 初始化 inject
        // TODO 初始化 data props methods
        initState(vm)
        // TODO 初始化 provide
        // TODO 第二个生命周期钩子函数执行


        // 页面渲染
        if (!vm.$options.el) {
            vm.$mount(vm.$options.el)
        }
    }
}

/**
 * TODO 后续优化
 * @param {*} Ctor 
 */
export function resolveConstructorOptions(Ctor) {
    return {}
}