
import { isObject } from '../util/index'

/**
 * 数据劫持
 * @param {any} value 要劫持的数据 
 * @param {Boolean} asRootData 是否是根数据
 */
export function observe(value, asRootData){
    // 普通数据不进行劫持
    if(!isObject(value) || value instanceof VNode){
        return
    }

    let ob



    return ob
}