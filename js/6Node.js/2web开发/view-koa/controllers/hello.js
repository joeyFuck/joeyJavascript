var fn_say = async (ctx, next) => {
//  var name = ctx.params.name;
//  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
	var name = ctx.params.name;
    ctx.render('hello/index.html', {
        name: name||'Welcome'
    });
};

module.exports = {
    'GET /hello/say/': fn_say,
    'GET /hello/say/:name': fn_say
};
 