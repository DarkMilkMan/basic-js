const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const discardPrev = '--discard-prev';
  const doublePrev = '--double-prev';
  const doubleNext = '--double-next';
  const discardNext = '--discard-next';
  
  if (!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (!arr.length){
    return arr;
  }

 for (let i = 0;i < arr.length;i++){
    if (typeof arr[i] != 'string' && typeof arr[i] != 'number'){
      return arr;
    }

    if (arr[i] == discardPrev || arr[i] == doublePrev){
      if (!arr[i - 1]){
        return arr.slice(1, arr.length);
      }
      if (arr[i] == discardPrev){
        arr[i-1] = 'delete';
        arr = Array.from(arr, p => (p == discardPrev) ? arr[i-1] = 'delete' : p);  
      }
      if (arr[i] == doublePrev){
        arr = Array.from(arr, x => (x == doublePrev) ? x = arr[i-1] : x);
      }
    }
    if (arr[i] == doubleNext || arr[i] == discardNext){
      if (!arr[i + 1]){
        return arr.slice(0, arr.length - 1);
      }
      if (arr[i] == doubleNext){
        arr = Array.from(arr, x => (x == doubleNext) ? x = arr[i+1] : x);
      }
      if (arr[i] == discardNext){
        arr = Array.from(arr, x => (x == discardNext) ? arr[i+1] = 'delete' : x);          
      }
    }
    
 }
 arr = arr.filter(x => x !== 'delete');
 console.log(arr);
 return arr;
}

// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
// transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);
// transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);
transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]);
// transform(['--discard-prev', 1, 2, 3]);
// transform(['--double-prev', 1, 2, 3]);
// transform([1, 2, 3, '--double-next']);
// transform([1, 2, 3, '--discard-next']);

module.exports = {
  transform
};
