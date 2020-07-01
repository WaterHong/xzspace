import Router from 'koa-router';
import mongoose from 'mongoose';

const routes = new Router();

routes.get('/', (ctx, next) => {
    ctx.render();
    next();
})

routes.get('/list', (ctx, next) => {
    ctx.render();
    next();
})

// moogodb
const db = mongoose.connect("mongodb://localhost/test");
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
const User = mongoose.model("User", UserSchema);
var newUser = new User({
    username: 'xz',
    password: '1005',
    email: '1005@qq.com'
  });
newUser.save();

routes.get('/user', async (ctx, next) => {
	const data = await User.findOne({username: 'xz'});
	const result = {
		code:200,
		response: data,
		ts: 12345
	}
	ctx.response.body = result;
	return result
})


export default routes;
