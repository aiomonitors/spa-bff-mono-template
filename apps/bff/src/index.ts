import Koa from 'koa';
import Router from '@koa/router';
import { type ProductResponse, type ErrorResponse } from '@aiomonitors-spa/types';
import { formatMoney } from '@aiomonitors-spa/utils/money';

const server = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello World';
});


router.get('/error', (ctx) => {
  ctx.body = {
    instance: '/',
    path: '/',
    title: 'This is an error',
    description: 'This is an error',
    data: {
      reasons: [],
    },
  } satisfies ErrorResponse
});

router.get('/money-test', (ctx) => {
  ctx.body = {
    name: 'Test Product',
    description: 'This is a test product',
    amount: formatMoney(1000),
  } satisfies ProductResponse
})

server.use(router.routes());

server.listen(9000, () => {
  // eslint-disable-next-line no-console -- Need to add logging
  console.log('server listening on port 9000')
});
