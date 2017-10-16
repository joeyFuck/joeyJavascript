//1、 字符的 Unicode 表示法 
console.log("\u0061");
// "a"
console.log("\uD842\uDFB7");
// "𠮷" 
console.log("\u20BB7");
// " 7"

//2、codePointAt()
// ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
//感觉平时没卵用

//3、 String.fromCodePoint()
// S6提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。
// 感觉还是没卵用

//4、字符串的遍历器接口
for (let codePoint of 'foo') {
    console.log(codePoint)
}
  // "f"
  // "o"
  // "o"

//5、at() 需要垫片库实现 所以没乱用
// console.log('abc'.at(0)) // "a"
// console.log('𠮷'.at(0)) // "𠮷"
// ES5 对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。


//字符串也就一堆方法。没啥卵用，不继续了。还有正则的扩展，数值的扩展也一样。





















