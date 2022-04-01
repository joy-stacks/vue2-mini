/**
 * 校验字符串是否是 $ 或着 _ 开头
 * @param {*} str 
 * @returns 
 */
export function isReserved(str) {
    const c = (str + '').charCodeAt(0)
    return c === 0x24 || c === 0x5F
}