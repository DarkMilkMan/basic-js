const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let obj = {};
  let parr = [];
  let first = '';
  for (let i = 0;i < arr.length;i++){
    if(i == 0){
      first = arr[i].split('.').reverse();
      first = '.' + first[i].split('.', 1);
      parr.push(first);
    }
    all = '.' + arr[i].split('.').reverse().join('.');
    parr.push(all);
    obj[first] = 0;    
    obj[all] = 0;    
  }

  for (let o = 0;o < parr.length;o++){
    let count = 0;
    for (let b = 1;b < parr.length;b++){
      if(parr[b].includes(parr[o])){
        count++;
      }      
    }
    obj[parr[o]] = count;
  }
  return obj;
}

getDNSStats([])

module.exports = {
  getDNSStats
};
