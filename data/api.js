/**
 * Created by likaituan on 15/8/10.
 */

    //属性列表
exports.list = [

    //{ cat:"基本属性", color: "red"},

    {name: "type", title: "view类型", type: "String", example: "main", cat: "property"},
    {name: "title", title: "标题", type: "String", example: "欢迎光临", cat: "property"},
    {name: "model", title: "模型", type: "任意类型", example: "{a:1,b:2}", cat: "property"},
    {name: "templateHTML", title: "模板代码", type: "String", example: '<p>{this.name}</p>', cat: "property"},
    {name: "ui", title: "最顶层容器", type: "Node", cat: "property"},
    {name: "$ui", title: "最顶层容器", type: "Jquery", cat: "property"},

    //{ cat:"View/子View之间的相互调用", color: "blue"},

    {name: "parent", title: "父级View", type: "Object", cat: "property"},
    {name: "root", title: "主View(最顶层View)", type: "Object", cat: "property"},
    {name: "[subviewname]", title: "子View,直接写view id", type: "Object", cat: "property"},
    {name: "part", title: "局部", type: "Object", cat: "property"},
    {name: "pop", title: "弹窗", type: "Object", cat: "property"},

    //{ cat:"URL地址相关", color: "green"},

    {name: "from", title: "来源", type: "String", example: "home", cat: "property"},
    {name: "uri", title: "地址", type: "String", example: "ad/160101/r1", cat: "property"},
    {name: "path", title: "路径", type: "String", example: "160101/r1", cat: "property"},
    {name: "id", title: "view的唯一ID", type: "String", example: "r1", cat: "property"},
    {
        name: "params", title: "参数对象", type: "Object,Array", example: "{a:1,b:2}",
        subItems: [
            {name: "double模式(默认)", title: "返回对象"},
            {name: "single模式", title: "返回数组"}
        ],
        cat: "property"
    },
    {name: "paramType", title: "参数类型", type: "String", example: "double", cat: "property"},


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
];

//获取详情
exports.getDetail = function(id){
    return this.list.filter(x=>x.name==id)[0];
};
