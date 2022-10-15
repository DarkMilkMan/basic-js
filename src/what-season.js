const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  let res = date.getMonth();
  if (res == 11 || res == 0 || res == 1) {
    console.log('winter');
    return 'winter';
  } else if (res == 2 || res == 3 || res == 4) {
    console.log('spring');
    return 'spring';
  } else if (res == 5 || res == 6 || res == 7) {
    console.log('summer');
    return 'summer';
  } else if (res == 8 || res == 9 || res == 10) {
    console.log('autumn');
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
