###备注
>Buffer对象可以和String作转换，例如，把一个Buffer对象转换成String：

```js
// Buffer -> String
var text = data.toString('utf-8');
console.log(text);
```
或者把一个String转换成Buffer：

```js
// String -> Buffer
var buf = Buffer.from(text, 'utf-8');
console.log(buf);
```

>写文件

writeFile()的参数依次为文件名、数据和回调函数。如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。回调函数由于只关心成功与否，因此只需要一个err参数。

>stat()也有一个对应的同步函数statSync()，请试着改写上述异步代码为同步代码。


异步还是同步

在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？

由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。


>stream

stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。

data事件可能会有多次，每次传递的chunk是流的一部分数据。
要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：

>pipe

就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。

在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。


默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：

```js
readable.pipe(writable, { end: false });
```

>crypto

crypto模块的目的是为了提供通用的加密和哈希算法。用纯JavaScript代码实现这些功能不是不可能，但速度会非常慢。Nodejs用C/C++实现这些算法后，通过cypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快。
[crypto](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501504929883d11d84a1541c6907eefd792c0da51000)
 




































