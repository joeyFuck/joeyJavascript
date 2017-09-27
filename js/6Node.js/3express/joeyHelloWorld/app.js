var express = require('express');
var app = express();

//express自身就集成了路由，不像koa2里需要引用router中间件来进行路由配置。不够灵活，但方便
app.get('/',function(req,res){
	res.send('Hello,express for joey');
})

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(server.address()); 
	console.log('Exanple app listening at http://%s:%s',host,port);
});



















