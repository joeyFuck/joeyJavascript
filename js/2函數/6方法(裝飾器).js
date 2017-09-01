//装饰器
//利用apply()，我们还可以动态改变函数的行为。
//
//JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。
//
//现在假定我们想统计一下代码一共调用了多少次parseInt()，可以把所有的调用都找出来，然后手动加上count += 1，
//不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的parseInt()：

var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3
//當然，這個需要在第一次調用parseInt前就加入裝飾器，不然之前的不會被計數。

//装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。















































