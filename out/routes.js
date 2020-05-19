"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var router = new koa_router_1.default();
exports.router = router;
router.get('/', function (ctx) {
    ctx.body = { msa: "hello koa" };
})
    .get('./vihuHot', function (ctx) {
    ctx.body = { msa: "hello vihu" };
})
    .get('/wzboHot', function (ctx) {
    ctx.body = { msa: "hello wzbo" };
});
