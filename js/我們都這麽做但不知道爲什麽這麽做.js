--------------------------------------------------------------------------------------------------------
function fn1{
	
}
而不寫成
function fn2
{
	
}
有一定的講究
比如:
JavaScript引擎有一个在行末自动添加分号的机制，这可能让你栽到return语句的一个大坑：
function foo() {
    return { name: 'foo' };
}
foo(); // { name: 'foo' }
//如果把return语句拆成两行：
function foo() {
    return
        { name: 'foo' };
}
foo(); // undefined
---------------------------------------------------------------------------------------------------------


标准对象
--------------------------------------------------------------
important
判断Array要使用Array.isArray(arr)；

判断null请使用myVar === null；

判断某个全局变量是否存在用typeof window.myVar === 'undefined'；

函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
----------------------------------------------------------------
 
不要使用new Number()、new Boolean()、new String()创建包装对象；

用parseInt()或parseFloat()来转换任意类型到number；

用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

typeof操作符可以判断出number、boolean、string、function和undefined；

 123.toString(); // SyntaxError
123..toString(); // '123', 注意是两个点！
(123).toString(); // '123'
---------------------------------------------------------------------------------------------------------------
















