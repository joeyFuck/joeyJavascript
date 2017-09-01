//toUpperCase、toLowerCase、indexOf、substring
var s = 'Hello';
s.toUpperCase(); // 返回'HELLO'

var s = 'Hello';
var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
lower; // 'hello'

var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1

//substring()返回指定索引区间的子串：
var s= 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'
