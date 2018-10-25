const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const Cors = require('@koa/cors');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://Dongor7:SidarDen19940209@ds239903.mlab.com:39903/recipe', { useNewUrlParser: true } );

app.use(Cors());
app.use(BodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422)
    }
}));

require('./routes')(router);
app.use(router.routes());
app.use(router.allowedMethods());

/*app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
});*/

app.listen(PORT, () => console.log(`Listen port ${PORT}`));
