
exports.$lang = {
flow:{
    cn: "流程图",
    en: "Flow"
}
};

var data = [
{
    id: "main",
    text: "Main View"
},
{
    id: "parent",
    text: "Parent View"
},
{
    id: "part",
    text: "Part"
},
{
    id: "sub",
    text: "SubView"
},
{
    id: "plugin",
    text: "Plugin"
}
];

exports.onInit = function() {
exports.usePlugin("seekjs-plugin-flow", {
    title: `seekJs-view ${this.lang.flow}`,
    data
});
};
