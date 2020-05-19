import Router from "koa-router";
import {result} from "../src//dataApi/getData"

const router: Router = new Router()
router.get('/', ctx => {
  ctx.body = { msa: "hello koa" }
})
  .get('/vihuHot', ctx => {
    ctx.body =result[0]
  })
  .get('/wzboHot', ctx => {
    ctx.body = result[1]
  })
export { router }