// 1、函数参数的默认值
function log(x, y = 'world') {
    console.log(x + ',' + y);
}
log('hello');
log('hello', 'joey');

// 参数变量是默认声明的，所以不能用let或const再次声明。
function foo(x = 5) {
    let x = 1; // error
    const x = 2; // error
}
//   参数默认值是惰性求值的。
let x = 99;
function foo(p = x + 1) {
    console.log(p);
}
foo() // 100
x = 100;
foo() // 101

    // 每次调用函数foo，都会重新计算x + 1

    //2、函数的 length 属性
    // 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
    (function (a) { }).length // 1
    (function (a = 5) { }).length // 0
    (function (a, b, c = 5) { }).length // 2

    // 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
    (function (a = 0, b, c) { }).length // 0
    (function (a, b = 1, c) { }).length // 1

    // 后文的 rest 参数也不会计入length属性。
    (function (...args) { }).length // 0

//3、作用域
var m = 1;
function f(m, y = m) {
    console.log(y);
}
f(2) // 2
console.log(m);//1
// 输出是2而不是1
// 参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。

// 4、应用   这个实用
function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}
foo()
// Error: Missing parameter
//   上面代码的foo函数，如果调用的时候没有参数，就会调用默认值throwIfMissing函数，从而抛出一个错误。

//5、rest 参数 可变参数 rest参数需放在最后一个参数位置 函数的length属性，不包括 rest 参数。
function add(...values) {
    let sum = 0;
  
    for (var val of values) {
      sum += val;
    }
  
    return sum;
  }
  
  add(2, 5, 3) // 10


//6、箭头函数
var f = v => v;
// 等同
var f = function(v) {
    return v;
  };
//   如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
var sum = (num1, num2) => { return num1 + num2; }
// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });

// 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
let fn = () => void doesNotReturn();













