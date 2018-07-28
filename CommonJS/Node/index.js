
let uniq = require('uniq');

let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

let arr = [1,3,2,11,6,8];
console.log(uniq(arr)); //[ 1, 11, 2, 3, 6, 8 ]

module1.foo();
module2();
module3.foo();
console.log(module3.info);
