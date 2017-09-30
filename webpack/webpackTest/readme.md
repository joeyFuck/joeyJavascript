### 第一种打包方式,用命令行
```js
F:\joey\joeyJavascript\webpack\webpackTest>webpack app/main.js public/bundle.js
Hash: 94ef7f3d1354235f29f6
Version: webpack 3.6.0
Time: 55ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.82 kB       0  [emitted]  main
   [0] ./app/main.js 97 bytes {0} [built]
   [1] ./app/Greeter.js 172 bytes {0} [built]

F:\joey\joeyJavascript\webpack\webpackTest>
```
# {extry file}出填写入口文件的路径，本文中就是上述main.js的路径， # {destination for bundled file}处填写打包文件的存放路径 
# 填写路径的时候不用添加{} webpack {entry file} {destination for bundled file}
 
### 第二种打包的方式,通过配置文件
在当前练习文件夹的根目录下新建一个名为webpack.config.js的文件，我们在其中写入如下所示的简单配置代码，目前的配置主要涉及到的内容是入口文件路径和打包后文件的存放路径。

# 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
```js
module.exports = {
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件 
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方 
        filename: "bundle.js"//打包后输出文件的文件名 
    }
} 
```
有了这个配置之后，再打包文件，只需在终端里对应目录下运行webpack(非全局安装需使用node_modules/.bin/webpack)命令就可以了，这条命令会自动引用webpack.config.js文件中的配置选项

### 第三种打包方式
在package.json 中进行配置
```js
  "scripts": {
    "start": "webpack" 
  },
```
npm start命令就可执行对应操作

npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build



