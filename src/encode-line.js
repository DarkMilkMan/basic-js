const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = '';
  let later = '';
  let resultall = '';
  for (let i = 0;i < str.length;i++){    
    if(str[i] == str[i+1]){
      later = str[i];
      if(str.includes(str[i])){
        count = count + 1;
        console.log(count);
        if(count > 1){
          result = count + later;
        } else {
          result = later;
        }
      }      
    } else if (str[i] != str[i+1] && count < 2){
         resultall += str[i];
    } else if (i == str.length - 1){
      if(count > 1){
        resultall += count + str[i];
      } else {
        resultall += str[i];
      }
    } else {
      resultall += result
      count = 1;
    }
  }
  return resultall;
}

module.exports = {
  encodeLine
};
