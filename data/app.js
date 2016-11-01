/**
 * Created by likaituan on 15/8/10.
 */


    //列表
    exports.data = [
        {
            title: "动画",
            list:[
                {name: "app.useAnimate", title: "是否使用动画", type: "boolean"},
                {name: "app.aniDuration", title: "动画时长(毫秒)", type: "number"}
            ]
        },
        {
            title: "插件",
            list:[
                {name: "app.plugin", title:"插件列表对象", type: "object"},
                {
                    name: "app.usePlugin",
                    title: '使用插件, 参考<a href="#guide-plugin">插件列表</a>',
                    args: [
                        {name: "module", title: "plug模块,写法同require", type: "string"}
                    ]
                }
            ]
        },
        {
            title: "事件",
            list: [
                {
                    name: "app.onViewInit",
                    title: "所有View的初始化事件",
                    args: [
                        {name: "view", title: "当前View", type: "object"}
                    ]
                },
                {
                    name: "app.onViewRender",
                    title: "所有View的加载完成事件",
                    args: [
                        {name: "view", title: "当前View", type: "object"}
                    ]
                }
            ]
        },
        {
            title: "标题",
            list: [
                {name: "app.title", title:"设置标题", type: "number"},
                {name: "app.useTitleRepair", title:"使用标题修复", type:"boolean"},
            ]
        },
        {
            title: "其他",
            list:[
                {name: "app.ext", title:"扩展名", type:"object"},
                {name: "app.useGrid", title:"是否使用栅格", type:"boolean"},
                {name: "app.viewEx", title:"设置页面公用方法模块", type:"module object"},
                {name: "app.formatEx", title:"设置格式化公用方法模块", type:"module object"},
                {
                    name: "app.setPath",
                    title: '设置目录,具体用法见<a href="#guide-path">path目录配置</a>',
                    args:[
                        {name: "path", title: "设置JS/HTML/CSS的目录", type: "object"}
                    ]
                },
                {
                    name: "app.init",
                    title: "设置初始页面",
                    args:[
                        {name: "uri", title: "设置JS/HTML/CSS的目录", type: "string"},
                        {name: "container", title: "DOM容器或选择器", type: "node/selector"}
                    ]
                }
            ]
        }
    ];
