/**
 * Created by likaituan on 15/8/10.
 */


//属性列表
exports.apiList = {
    app: {
        list: [
            {name: "useAnimate", title: "是否使用动画", type: "boolean", cat:"property", subcat:"animate"},
            {name: "aniDuration", title: "动画时长(毫秒)", type: "number", cat:"property", subcat:"animate"},
            {name: "plugin", title:"插件列表对象", type: "object", cat:"property", subcat:"plugin"},
            {
                name: "usePlugin",
                des: '使用插件, 参考<a href="#plugin">插件列表</a>',
                args: [
                    {name: "module", title: "plug模块,写法同require", type: "string"}
                ],
                cat: "method",
                subcat: "plugin"
            },
            {
                name: "onViewInit",
                title: "所有View的初始化事件",
                args: [
                    {name: "view", title: "当前View", type: "object"}
                ],
                cat: "event"
            },
            {
                name: "onViewRender",
                title: "所有View的加载完成事件",
                args: [
                    {name: "view", title: "当前View", type: "object"}
                ],
                cat: "event"
            },
            {name: "title", title:"设置标题", type: "number", cat: "property"},
            {name: "useTitleRepair", title:"使用标题修复", type:"boolean", cat: "property"},


            {name: "ext", title:"扩展名", type:"object", cat: "property"},
            {name: "useGrid", title:"是否使用栅格", type:"boolean", cat: "property"},
            {name: "viewEx", title:"设置页面公用方法模块", type:"module object", cat: "property"},
            {name: "pipeEx", title:"设置格式化公用方法模块", type:"module object", cat: "property"},
            {
                name: "setPath",
                des: '设置目录,具体用法见<a href="#path">path目录配置</a>',
                args:[
                    {name: "path", title: "设置JS/HTML/CSS的目录", type: "object"}
                ],
                cat: "method"

            },
            {
                name: "init",
                title: "设置初始页面",
                args:[
                    {name: "uri", title: "设置JS/HTML/CSS的目录", type: "string"},
                    {name: "container", title: "DOM容器或选择器", type: "node/selector"}
                ],
                cat: "method"
            }
        ]
    },
    view: {
        des: "说明：P1=基本属性\nP2=View/子View之间的相互调用\nP3=URL地址相关",
        list:[
            {
                name: "type",
                title: "view类型",
                type: "String",
                list: {
                    main: "主view",
                    sub: "子view"
                },
                cat: "property",
                subcat: "basic"
            },
            {name: "title", title: "标题", type: "String", example: "<p>设置标题 : exp.title = '欢迎使用seek.js'</p>", cat: "property", subcat: "basic"},
            {name: "model", title: "模型", type: "任意类型", example: "{a:1,b:2}", cat: "property", subcat: "basic"},
            {
                name: "templateHTML",
                title: "模板代码",
                type: "String",
                example: "<p><b>js:</b></p> exports.msg = {name:'姓名'} <div><p><b>html : </b></p><span><</span>p>{this.msg.name}<span><</span>/p></div><p><b>result : </b></p><div>姓名</div>",
                cat: "property",
                subcat: "basic"
            },
            {name: "ui", title: "最顶层容器", type: "Node", cat: "property", subcat: "basic"},


            {name: "parent", title: "父级View", type: "Object", cat: "property", subcat: "box"},
            {name: "root", title: "主View(最顶层View)", type: "Object", cat: "property", subcat: "box"},
            {name: "[subviewname]", title: "子View,直接写view id", type: "Object", cat: "property", subcat: "box"},
            {name: "part", title: "局部", type: "Object", cat: "property", subcat: "box"},
            {name: "pop", title: "弹窗", type: "Object", cat: "property", subcat: "box"},


            {name: "from", title: "来源", type: "String", example: "home", cat: "property", subcat: "url"},
            {name: "uri", title: "地址", type: "String", example: "ad/160101/r1", cat: "property", subcat: "url"},
            {name: "path", title: "路径", type: "String", example: "160101/r1", cat: "property", subcat: "url"},
            {name: "id", title: "view的唯一ID", type: "String", example: "r1", cat: "property", subcat: "url"},
            {
                name: "params", title: "参数对象", type: "Object,Array", example: "{a:1,b:2}",
                subItems: [
                    {name: "double模式(默认)", title: "返回对象"},
                    {name: "single模式", title: "返回数组"}
                ],
                cat: "property",
                subcat: "url"
            },
            {name: "paramType", title: "参数类型", type: "String", example: "double", cat: "property", subcat: "url"},


            {
                name: "go",
                title: "跳转",
                args: [
                    {name: "uri", type: "String", title: "标题", required: 1}
                ],
                cat: "method"
            },
            {name: "back", title: "回退", cat: "method"},
            {name: "show", title: "显示View", cat: "method"},
            {name: "hide", title: "隐藏View", cat: "method"},
            {name: "toggle", title: "显示或隐藏", cat: "method"},
            {name: "up2model", title: "更新到模型", cat: "method"},
            {name: "getHTML", title: "生成HTML", cat: "method"},
            {name: "getTemplate", title: "生成模板代码", cat: "method"},
            {name: "render", title: "刷新页面", cat: "method"},


            {name: "onInit", title: "初始化事件", cat: "event"},
            {name: "onRender", title: "View加载完成或刷新触发的事件,相当于window.onload", cat: "event"}
        ]
    },
    template: {
        title: "模板",
        list: [
            {name: "if", title: "条件开始"},
            {name: "elsif", title: "条件分支"},
            {name: "else", title: "最后条件"},
            {name: "foreach", title: "循环开始"},

            {name: "=[obj]", title: "相当于console.log(obj)"},
            {name: "src.length", title: "当前循环的数组长度"},
            {name: "src.first", title: "是否第一项"},
            {name: "src.last", title: "是否最后一项"},
            {name: "item", title: "当前项"},
            {name: "i", title: "当前索引, 从0开始"},
            {name: "sn", title: "当前索引, 从1开始"}
        ]
    },
    pipe: {
        title: "管道",
        list: [
            //字符串
            {
                name: "begin",
                title: "取头几位",
                method: "method"
            },
            {
                name: "end",
                title: "取末几位",
                method: "method"
            },
            {
                name: "upper",
                title: "转大写字母",
                method: "method"
            },
            {
                name: "lower",
                title: "转小写字母",
                method: "method"
            },

            //数字
            {
                name: "en",
                title: "转英文数字",
                method: "method"
            },
            {
                name: "cn",
                title: "转中文数字",
                method: "method"
            },
            {
                name: "big",
                title: "转繁体中文数字",
                method: "method"
            },
            {
                name: "sep",
                title: "分隔符",
                method: "method"
            },

            //日期
            {
                name: "date_format",
                title: "日期格式化",
                cat: "method",
                args: [
                    {name: "dateObj", type: "String", title: "日期对象", required: 1},
                    {name: "rule", type: "String", title: "格式化样式", required: 1}
                ]
            },
            {
                name: "rmb",
                title: "人民币格式化",
                cat: "method",
                args: [
                    {name: "number", type: "Number", title: "人民币", required: 1}
                ]
            },

            //对象
            {
                name: "json",
                title: "以JSON字符串的形式输出对象",
                cat: "method",
                args: [
                    {name: "jsonObj", type: "Object", title: "JSON对象", required: 1}
                ],
                example:`<template><%var jsonObj = {a:1,b:2,c:3}; %> { jsonObj | json}</template>`
            },

            //其他
            {
                name: "iif",
                title: "条件判断",
                des: "参考VB同名函数,条件为真,返回v1,否则返回",
                cat: "method",
                args: [
                    {name: "exp", type: "Boolean", title: "条件表达式", required: 1},
                    {name: "v1", type: "Value", title: "返回值1", required: 0},
                    {name: "v2", type: "Value", title: "返回值2", required: 0}
                ],
                example:`
                    <template>
                        <p>{"cn"|iif}</p>
                        <p>{"cn"|iif:china}</p>
                        <p>{undefined|iif:japan}</p>
                        <p>{2==2|iif:a,b}</p>
                        <p>{1==2|iif:c,d}</p>
                    </template>
                `
            }
        ]
    }
};

//获取详情
exports.getDetail = function(id){
    var [cate,name] = id.split(".");
    var o = this.apiList[cate].list.filter(x=>x.name==name)[0];
    o.cate = cate;
    return o;
};
