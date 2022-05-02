import Router from 'koa-router';

const router = new Router();

router.get('/health', (ctx) => { ctx.body = { status: 'OK' }; });
router.get('/', (ctx) => { ctx.body = `Hello ${process.env.AWESOME_CONFIGMAP_VALUE || 'world'}`; });

export default router;
