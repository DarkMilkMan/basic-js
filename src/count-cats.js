const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0;
  if (typeof matrix[0] !== 'object'){
    cats += matrix.filter(x => x =='^^').length;
  } else {
    for (let i = 0;i < matrix.length;i++){    
      cats += matrix[i].filter(x => x=='^^').length;
    }
  }
  return cats;
}

module.exports = {
  countCats
};
