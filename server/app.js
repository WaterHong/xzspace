import Koa from 'koa';
import routes from './router';
import templating from './templating'
import cors from 'koa2-cors';

const app = new Koa();

// 处理跨域的配置
 app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous']
 }));

app.use(templating);
app.use(routes.routes(), routes.allowedMethods());

app.listen(3000, () => {
    console.log(`node服务已经启动, 请访问localhost:3000`)
})
