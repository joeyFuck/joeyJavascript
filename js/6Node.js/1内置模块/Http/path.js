'use strict';

var path = require('path');

// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'
console.log(workDir);

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
console.log(filePath);


//F:\joey\joeyJavascript\js\6Node.js\内置模块\Http
//F:\joey\joeyJavascript\js\6Node.js\内置模块\Http\pub\index.html



