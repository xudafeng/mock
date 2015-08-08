/* ================================================================
 * mock by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

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
