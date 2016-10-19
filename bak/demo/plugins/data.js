/**
 * Created by likaituan on 15/8/10.
 */

define(function (req, exp, mod) {
    "use strict";

    mod.exports = [
        {
            name: "mvc",
            title: "前端MVC框架介绍",
            items: [
                {name: "summary", title: "MVC简介"},
                {name: "flow", title: "流程图"}
            ]
        },
        {
            name: "modularize", title: "前端模块化管理"
        },
        {
            name: "spa", title: "单页应用"
        },
        {
            name: "template",
            title: "前端JS模板",
            items: [
                {name: "summary", title: "前端模板简介"},
                {name: 'sytany', title: "seekjs模块语法"},
                {name: "example", title: "模板实例"}
            ]
        },
        {
            name: "event", title: "事件解析机制"
        },
        {
            name: "ajax", title: "ajax封装"
        },
        {
            name: "node", title: "node中间层"
        },
        {
            name: "plugin", title: "前端UI插件"
        }
    ];

});