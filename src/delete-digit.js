const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let elem = 0;
  n = String(n);
  for (let i = 0;i < n.length;i++){
    elem = n.replace(n[i], '');
    arr.push(elem);
  }
  let max = Math.max.apply(null, arr);  
  return max;
}

module.exports = {
  deleteDigit
};
