###npm下载依赖的方式

>以koa为例

```
方法一：可以用npm命令直接安装koa。先打开命令提示符，务必把当前目录切换到hello-koa这个目录，然后执行命令：
```
```js
C:\...\hello-koa> npm install koa@2.0.0
```
```
npm会把koa2以及koa2依赖的所有包全部安装到当前目录的node_modules目录下。
```

```
方法二：在hello-koa这个目录下创建一个package.json，这个文件描述了我们的hello-koa工程会用到哪些包。完整的文件内容如下：
```

```json
{
    "name": "hello-koa2",
    "version": "1.0.0",
    "description": "Hello Koa 2 example with async",
    "main": "app.js",
    "scripts": {
        "start": "node app.js"
    },
    "keywords": [
        "koa",
        "async"
    ],
    "author": "Michael Liao",
    "license": "Apache-2.0",
    "repository": {
        "type": "git",
        "url": "https://github.com/michaelliao/learn-javascript.git"
    },
    "dependencies": {
        "koa": "2.0.0"
    }
}
```
```
其中，dependencies描述了我们的工程依赖的包以及版本号。其他字段均用来描述项目信息，可任意填写。

然后，我们在hello-koa目录下执行npm install就可以把所需包以及依赖包一次性全部装好：
```

 ```
C:\...\hello-koa> npm install
```
```
很显然，第二个方法更靠谱，因为我们只要在package.json正确设置了依赖，npm就会把所有用到的包都装好。

注意，任何时候都可以直接删除整个node_modules目录，因为用npm install命令可以完整地重新下载所有依赖。并且，这个目录不应该被放入版本控制中。
```


还可以直接用命令node app.js在命令行启动程序，或者用npm start启动。npm start命令会让npm执行定义在package.json文件中的start对应命令：

```js
"scripts": {
    "start": "node app.js"
}
```







