//需要特别指出的是，正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符。举例如下，匹配出数字后面的0：
var re = /^(\d+)(0*)$/;
re.exec('102300'); // ['102300', '102300', ''] //exec第一个输出是匹配的字符串本身

//由于\d+采用贪婪匹配，直接把后面的0全部匹配了，结果0*只能匹配空字符串了。

//必须让\d+采用非贪婪匹配（也就是尽可能少匹配），才能把后面的0匹配出来，加个?就可以让\d+采用非贪婪匹配
var re = /^(\d+?)(0*)$/;
re.exec('102300'); // ['102300', '1023', '00']











































