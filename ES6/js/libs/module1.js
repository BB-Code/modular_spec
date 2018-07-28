'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
exports.bar = bar;
/**
 * [foo 暴露函数]　分别暴露
 * @return {[type]} [description]
 */
function foo() {
  console.log('this is foo function');
}

function bar() {
  console.log('this is bar function');
}
/**
 * [arr 暴露数组]
 * @type {Array}
 */
var arr = exports.arr = [1, 24, 89, 4, 8];