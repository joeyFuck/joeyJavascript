//由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数，就得到了一个新的Array作为结果：
//可以结合python的map()比较
function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var res = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

//reduce
var arr = [1, 3, 5, 7, 9];
res = arr.reduce(function (x, y) {
    return x + y;
}); // 25



//map()是将传入的函数依次作用到序列的每个元素，每个元素都是独自被函数“作用”一次；（请看下面的栗子）
//reduce()是将传人的函数作用在序列的第一个元素得到结果后，把这个结果继续与下一个元素作用（累积计算），
//最终结果是所有的元素相互作用的结果。





































































