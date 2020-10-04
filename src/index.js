module.exports = function check(str, bracketsConfig) {
    let symbols = str.split(''),
        [newBrackets,result] = [[],[]];

    for(let i = 0; i < bracketsConfig.length; i++) {
        newBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    for(let symbol of symbols) {
        if(symbol === result[result.length - 1]) {
            result.pop();
        } else {
            if(newBrackets[symbol] === undefined) {
                return false;
            } else {
                result.push(newBrackets[symbol]);
            }
        }
    }
    return result.length == 0;
}
