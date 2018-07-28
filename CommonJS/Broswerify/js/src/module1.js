/**
 * [暴露一个对象]
 * @type {Object}
 */
module.exports ={
  info: 'this is module1',
  foo (){
    console.log(this.info);
  }
}
