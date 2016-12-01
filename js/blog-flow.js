
exports.$lang = {
loading_flow:{
    cn: "加载流程图",
    en: "Loading Flow"
}
};

var data = [
{
    id: "new",
    text: "New Page"
},
{
    id: "hash",
    text: "Parse Hash"
},
{
    id: "uri",
    text: "Parse URI"
},
{
    id: "skpage",
    text: "Parse SkPage"
},
{
    id: "init",
    text: "onInit"
},
{
    id: "view",
    text: "Parse View",
    items: [
        {
            id: "css",
            text: "Parse Css"
        },
        {
            id: "js",
            text: "Parse Js"
        },
        {
            id: "template",
            text: "Parse Template"
        }
    ]
},
{
    id: "render-before",
    text: "onRenderBefore"
},
{
    id: "html",
    text: "Parse HTML",
    items: [
        {
            id: "event",
            text: "Parse Event"
        },
        {
            id: "bind",
            text: "Parse Bind"
        },
        {
            id: "part",
            text: "Parse Part"
        }
    ]
},
{
    id: "render",
    text: "onRender"
},
{
    id: "subview",
    text: "Has SubView",
    type: "rhombus",
    yes: "uri",
    no: "end"
},
{
    id: "load",
    text: "onLoad"
},{
    id: "leave",
    text: "onLeave"
}
];

exports.onInit = function() {
exports.usePlugin("seekjs-plugin-flow", {
    title: `seekjs ${this.lang.loading_flow}`,
    data
});
};
