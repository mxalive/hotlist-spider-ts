"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var routes_1 = require("./routes");
var app = new koa_1.default();
var router = new koa_router_1.default();
/**
 * 路由
 */
router.use('/mxa', routes_1.router.routes(), routes_1.router.allowedMethods());
// 注册路由
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, function () {
    console.log("server started on 3000");
});
