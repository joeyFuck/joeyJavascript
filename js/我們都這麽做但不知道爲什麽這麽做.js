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

短路运算符 ||  就近返回,undefined则判断下一个属性
JavaScript对不存在属性返回undefined
var width = window.innerWidth || document.body.clientWidth;

----------------------------------------------------------------------------------------------------------------
location

location.href:http://www.example.com:8080/path/index.html?a=1&b=2#TOP
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'

location.reload();//重新加载当前页面
location.assign('/discuss'); // 加载一个新页面
----------------------------------------------------------------------------------------------------------------
document.cookie; // 'v=123; remember=true; prefer=zh'
如果引入的第三方的JavaScript中存在恶意代码，则www.foo.com网站将直接获取到www.example.com网站的用户登录信息。

为了解决这个问题，服务器在设置Cookie时可以使用httpOnly，设定了httpOnly的Cookie将不能被JavaScript读取。这个行为由浏览器实现，主流浏览器均支持httpOnly选项，IE从IE6 SP1开始支持。

为了确保安全，服务器端在设置Cookie时，应该始终坚持使用httpOnly
----------------------------------------------------------------------------------------------------------------
绝大多数时候，我们都直接用$（因为写起来更简单嘛）。但是，如果$这个变量不幸地被占用了，而且还不能改，那我们就只能让jQuery把$变量交出来，然后就只能使用jQuery这个变量：
	$; // jQuery(selector, context)
	jQuery.noConflict();
	$; // undefined
	jQuery; // jQuery(selector, context)
这种黑魔法的原理是jQuery在占用$之前，先在内部保存了原来的$,调用jQuery.noConflict()时会把原来保存的变量还原。
-----------------------------------------------------------------------------------------------------------------














