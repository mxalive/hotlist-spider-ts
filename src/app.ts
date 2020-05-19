import Koa from "koa"
import Router from "koa-router"
import { router as dataRouters } from "./routes"
const app: Koa = new Koa()
const router: Router = new Router()
/**
 * 路由
 */
router.use('/mxa', dataRouters.routes(), dataRouters.allowedMethods())
// 注册路由
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log("server started on 3000")
})