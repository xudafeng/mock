let Faker = require('faker-zh-cn');

/**
 * test
 */

Faker.random.numberString = function(length) {
  let num = parseInt(length, 10);
  let result = '';

  while (num--) {
    result += Faker.random.number(10);
  }
  return result;
};

module.exports = Faker;
