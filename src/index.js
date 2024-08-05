module.exports = function reverse (n) {
    const strN = Math.abs(n).toString();
    const revStr = parseInt(strN.split('').reverse().join('').toString());
    return revStr;       
}
