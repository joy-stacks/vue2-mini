const hasOwnProperty = Object.prototype.hasOwnProperty
const _toString = Object.prototype.toString

// 判断对象是否含有指定的属性
export function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key)
}

/**
 * 普通对象校验
 * @param {Object} ob 
 * @returns 
 */
export function isPlainObject(ob) {
    return _toString.call(ob) === '[object Object]'
}

/**
 * 一个空白函数
 * @param {any} a 
 * @param {any} b 
 * @param {any} c 
 */
export function noop(a, b, c) {}

/**
 * 判断是否是对象 
 * 这里不能使用 toString.call(obj) === '[object Object]' 进行判断 因为需要判断数组
 * typeof null 也是一个对象，这是初代 js留下的设计问题
 * @param {any} obj 
 * @returns 
 */
export function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}