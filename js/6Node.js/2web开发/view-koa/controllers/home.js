var fn_index = async (ctx, next) => {
//  ctx.response.body = `<h1>Index</h1>
//      <form action="/signin" method="post">
//          <p>Name: <input name="name" value="koa"></p>
//          <p>Password: <input name="password" type="password"></p>
//          <p><input type="submit" value="Submit"></p>
//      </form>`;
    ctx.render('home/index.html', { 
    });
};

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.render('hello/index.html', {
        	name: name||'Welcome'
   	    });
    } else {
        ctx.render('hello/faild.html', { 
    	});
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin,
    'GET /home': fn_index,
    'POST /home/signin': fn_signin
};