//关键！！！！！！！！！！！
//每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”。暂停在这个节点里，next，则从这个节点继续执行，再暂停到这个节点.....

function* next_id() {
	var current_id = 1;
    while(1){ 
    	yield current_id; //第一次进来返回值，暂停在这。再进来，循环下去，再在这返回，暂停...
  		current_id=current_id+1;
	}
}



// 针对python
//一类是集合数据类型，如list、tuple、dict、set、str等；
//
//一类是generator，包括生成器和带yield的generator function。
//
//这些可以直接作用于for循环的对象统称为可迭代对象：Iterable。

//针对JS

//generator跟函数很像，定义如下：
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
//generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。



//sample
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
    return a;
}

//fib(5); // fib {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}
//直接调用一个generator和调用函数不一样，fib(5)仅仅是创建了一个generator对象，还没有去执行它。
//
//调用generator对象有两个方法，一是不断地调用generator对象的next()方法：

var f = fib(5);
f.next(); // {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: true}
//next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。
//
//当执行到done为true时，这个generator对象就已经全部执行完毕，不要再继续调用next()了。
//
//第二个方法是直接用for ... of循环迭代generator对象，这种方式不需要我们自己判断done：
for (var x of fib(5)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3
}


































