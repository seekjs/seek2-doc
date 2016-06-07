/**
 * Created by likaituan on 16/4/5.
 */


define(function (req, exp) {
    "use strict";

    exp.data = [
        {
            title: "架构基础",
            list:[
                "单页应用: 只加载一次HTML头",
                "分层及流程化管理: service/js/html/css/plugin/lib/event/form表单等分层有序配合",
                "模块化及命名空间: 所有JS文件模块化",
                "模板及格式化展示: 所有HTML生成和改变都是基于模板"
            ]
        },
        {
            title: "架构原则",
            list:[
                "简约, 复杂就是错误",
                "封装, 尽快做到不重复",
                "数据驱动, 能用刷新模板实现的绝不用dom"
            ]
        },
        {
            title: "多模式共存",
            list: [
                "支持MVC富前端架构",
                "支持轻量js/tp架构",
                "支持极简单页架构"
            ]
        }
    ];

});