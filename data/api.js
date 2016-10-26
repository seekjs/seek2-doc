/**
 * Created by likaituan on 15/8/10.
 */


//属性列表
exports.apiList = {
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
    }
};

//获取详情
exports.getDetail = function(id){
    var [cate,name] = id.split(".");
    return this.apiList[cate].list.filter(x=>x.name==name)[0];
};
