const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1sim = '';
  let result = 0;
  let trues = true;
  for (let i = 0;i < s1.length;i++){
    s1sim = s1[i]; 
    trues = true;    
    for (let o = 0;o < s2.length;o++){      
      if(trues){
        if(s1sim == s2[o]){
          console.log(s2); 
          result += 1;    
          s2 = s2.replace(s2[o], ''); 
          trues = false;
        
        }
      }      
    }       
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
