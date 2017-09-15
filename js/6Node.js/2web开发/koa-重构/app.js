'use strict'

const Koa = require('koa');
const app = new Koa();

const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
 
 // 导入controller middleware:
const controller = require('./controller');
  
  
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
  


app.use(bodyParser());
app.use(controller());//controller.js将路由封装，逻辑封装在controller文件夹内的各个‘controller’中。替代了app.use(router.routes());。
// 使用middleware: controller.js暴露的是个函数非对象。换个角度，暴露为函数就是所谓midlleware？
 
 
app.listen(3000);
console.log('app started at port 3000...');
