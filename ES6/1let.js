//1、let作用域
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();//10  i为全局变量，循环结束后，i=10

//------------------------

var b = [];
for (let i = 0; i < 10; i++) {
    b[i] = function () {
        console.log(i);
    };
}
b[6]();//6 let只在区域块中起作用


// 2、for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。 
for (let i = 0; i < 3; i++) {
    let i = 'abc';//这个i跟i=0不在一个作用域，而不是简单的覆盖 
    console.log(i);
}
// abc
// abc
// abc

//   这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

//3、不存在变量提升 
// var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

//var的情况
console.log(foo);
var foo = 2; //undefined

//let的情况
// console.log(bar);
// let bar = 2; // 报错 ReferenceError: bar is not defined

//4、暂时性死区 TDZ
//只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
// var tmp = 123;
// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

//5、不允许重复声明
//let不允许在相同作用域(注意这个相同作用域，如果变成父与子作用域则不符合这个条件)内，重复声明同一个变量。
//不报错
function func1() {
    var a = 10;
    var a = 1;
    console.log("可以");
}
func1();
// 报错
function func2() {
    let a = 10;
    var a = 1;
    console.log("可以");
}
func2();
// 报错
function func3() {
    let a = 10;
    let a = 1;
    console.log("可以");
}
func3();

// 因此，不能在函数内部重新声明参数。
function func(arg) {
    let arg; // 报错
}

function func(arg) {
    {
        let arg; // 不报错 换作用域了
    }
}

//6、块级作用域
//为何需要块级作用域：
// 第一种场景，内层变量可能会覆盖外层变量。
var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f(); // undefined
// 上面代码的原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。但是，函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。
// 第二种场景，用来计数的循环变量泄露为全局变量。
var s = 'hello';

for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}

console.log(i); // 5

// let实际上为 JavaScript 新增了块级作用域。
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
//   上面的函数有两个代码块，都声明了变量n，运行后输出5。这表示外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是10。

// ES6 允许块级作用域的任意嵌套。  
{ { { { { let insane = 'Hello World' } } } } };
// 内层作用域可以定义外层作用域的同名变量。
{
    {
        {
            {
                let insane = 'Hello World';
                { let insane = 'Hello World' }
            }
        }
    }
};
// 7、考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
// 函数声明语句
{
    let a = 'secret';
    function f() {
        return a;
    }
}

// 函数表达式
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}

// 8、do 表达式
// 本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值。
// let x = do{
//     let t = f();
//     t * t + 1;
// };
//   上面代码中，变量x会得到整个块级作用域的返回值。  
  
  














