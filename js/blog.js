 exports.$lang = {
    blog: {
        cn: "原型图",
        en: "Flow"
    },
    loading_flow:{
        cn: "加载流程图",
        en: "Loading Flow"
    },
    flow: {
        cn: "流程图",
        en: "Flow"
    }
};
 exports.subpage = "blog-flow";
exports.changePage = function(){
    this.subpage = this.element.innerHTML;
    this.render();
};
