import config from '../config'
import {
    hasOwn
} from '../../shared/util'

// 这个对象就是后续不断的往里面添加vue的属性，像 data, watch, props, methods 等等
const strats = config.optionMergeStrategies

const defaultStrat = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal
}

// 合并配置参数
export function mergeOptions(parent, child, vm) {

    const options = {}
    let key
    for (key in parent) {
        mergeField(key)
    }

    for (key in child) {
        // TODO 暂不明白
        if (!hasOwn(parent, key)) {
            mergeField(key)
        }
    }

    function mergeField(key) {
        // 当前属性是否已经添加到 strats , 若未添加，则使用默认的
        const strat = strats[key] || defaultStrat
        options[key] = strat(parent[key], child[key], vm, key)
    }

    return options
}