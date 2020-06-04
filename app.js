const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
	ctx.response.body = 'Hello xz';
});

app.listen(3000);
