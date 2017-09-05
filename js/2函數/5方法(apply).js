//apply
//apply也可以解決this指向不明確的問腿
 
function getAge() {
	var y = new Date().getFullYear();
	return y - this.birth;
}

var xiaoming = {
	name: '小明',
	birth: 1990,
	age: getAge
};

var res = getAge();
alert(res);//NaN，window下沒這個birth('use strict';下報錯)
res = getAge.apply(xiaoming, [])//要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，
//第二个参数是Array，表示函数本身的参数。
alert(res);//27

//另一个与apply()类似的方法是call()，唯一区别是：
//apply()把参数打包成Array再传入；
//call()把参数按顺序传入。

//比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
//对普通函数调用，我们通常把this绑定为null。 其實也就是window，
Math.max.call(window, 3, 5, 4); // 5





















