import { observe } from '../observer/index'
import {
    isReserved,
    isPlainObject,
    hasOwn,
    noop
} from "../util/index"

const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
}

/**
 * 数据访问代理 vm._data.name  =>  vm.name
 * @param {Object} target vm
 * @param {String} sourceKey _data
 * @param {string} key name
 */
export function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    }

    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val
    }

    Object.defineProperty(target, key, sharedPropertyDefinition)
}

export function initState(vm) {
    // TODO 暂不知用途
    vm._watchers = []
    const opts = vm.$options

    // TODO 其他的初始化后续跟进
    //  初始化 data
    if (opts.data) {
        initData(vm)
    }
}

function initData(vm) {
    let data = vm.$options.data

    // 将data的属性 放到实例的 _data属性中
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}

    // 最终得到的数据必须是一个普通对象
    if (!isPlainObject(data)) {
        data = {}
        console.log('data 函数需要返回一个对象')
    }

    // 判断 props 和 methods 上是否含有相同名称的属性
    const methods = vm.$options.methods
    const props = vm.$options.props

    Object.keys(data).forEach(key => {
        if (methods && hasOwn(methods, key)) {
            console.warn(`methods 上已经定义属性${key}`)
        }

        if (props && hasOwn(props, key)) {
            console.warn(`props 上已经定义属性${key}`)
        } else if (!isReserved(key)) {
            // 将获取数据进行代理 原先 是 vm._data.name => vm.name
            proxy(vm, '_data', key)
        }
    })

    // 开始数据劫持
    observe(data, true)
}

export function getData(data, vm) {
    // TODO 还需要再优化
    try {
        return data.call(vm, vm)
    } catch (error) {
        return {}
    } finally {

    }
}