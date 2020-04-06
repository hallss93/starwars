/**
 * @description             Return the string split by limit
 * @param {String} str      String for split
 * @param {Number} limit    Limit char
 */
export default function reduce(str, limit = 80) {
    return (str.substr(0, limit) + (str.length > limit ? "..." : ''))
}