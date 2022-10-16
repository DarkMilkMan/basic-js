const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let separator = '';
  let additionSeparator = '';
  let result = '';
  let addition = '';
  str = String(str);
  
  if(options.hasOwnProperty('addition')){
    addition = String(options.addition); 
    optionAddition = String(options.addition);    
  }
 
  if(!options.separator){
    separator = '+';
  } else {
    separator = options.separator;
  }

  if(!options.additionSeparator){
    additionSeparator = '|';
  } else {
    additionSeparator = options.additionSeparator;
  }
  
  if(options.hasOwnProperty('addition')){
    for (let a = 1;a < options.additionRepeatTimes;a++){    
        addition += additionSeparator + optionAddition;                     
    } 
  }

  if (options.hasOwnProperty('addition') && options.additionRepeatTimes <= 1){
    result = str + addition;
  } else if (options.hasOwnProperty('addition') && options.additionRepeatTimes > 1){
    result = str + addition;
  } else if (options.hasOwnProperty('addition') && !options.additionRepeatTimes){
    result = str + addition;
  } else {
    result = str;
  }

  if(options.repeatTimes == 1){
    console.log(result);
    return result;
  } else {
    for (let i = 1;i < options.repeatTimes;i++) {   
      if (!options.hasOwnProperty('addition')){
        result += separator + str; 
      } else {
        result += separator + str + addition; 
      }               
    }
  }
  return result;  
}

// REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION

module.exports = {
  repeater
};
