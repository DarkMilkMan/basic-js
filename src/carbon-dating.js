const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(ACTIVITY) {
    if (typeof ACTIVITY == 'string'){
      let numACTIVITY = Number(ACTIVITY);
      if(numACTIVITY){
        if (numACTIVITY > 0 && numACTIVITY < MODERN_ACTIVITY ){
          return Math.ceil((HALF_LIFE_PERIOD/0.693) * Math.log(MODERN_ACTIVITY/ACTIVITY))
        } else {
          return false;
        }          
      } else {
        return false;
      }      
    } else {
      return false;
    }
    // 
}
dateSample(5);
dateSample('1');
dateSample('one');



module.exports = {
  dateSample
};
