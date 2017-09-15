
'use strict';

var fs = require('fs');
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
}

//同步读文件
//除了标准的异步读取模式外，fs也提供相应的同步读取函数。同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。
 
//如果同步读取文件发生错误，则需要用try...catch捕获该错误：