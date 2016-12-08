exports.$lang = {
    guide: {
        cn: "教程",
        en: "Guide"
    },
    quick_start: {
        cn: "快速上手",
        en: "Quick Start"
    },
    pipe: {
        cn: "管道",
        en: "Pipe"
    },
    unit_test: {
        cn: "单元测试",
        en: "Unit Test"
    },
    summary: {
        cn: "概览",
        en: "Summary"
    },
    plugin: {
        cn: "插件",
        en: "Plugin"
    },
    scaffold: {
        cn: "脚手架",
        en: "Scaffold"
    },
    template: {
        cn: "模板",
        en: "Template"
    },
    modularize: {
        cn: "模块化",
        en: "Modularize"
    },
    data_bind: {
        cn: "数据绑定",
        en: "Data Bind"
    },
    event_bind: {
        cn: "事件绑定",
        en: "Event Bind"
    },
    app: {
        cn: "seekApp框架",
        en: "App Framework"
    },
    view: {
        cn: "View页面",
        en: "View Page"
    },
    ajax: {
        cn: "Ajax封装",
        en: "AJAx"
    },
    form: {
        cn: "表单验证",
        en: "Form"
    },
    env: {
        cn: "环境检测",
        en: "Environment"
    }
};

var env = require("sys.env");

exports.onInit = function () {
    log(this.params);
    this.file = this.params.id || "guide-summary";

    this.preList = [
        {page: "guide-summary", name: "Summary", title: $lang.summary},
        {page: "guide-scaffold", name: "Scaffold", title: $lang.scaffold},
        {page: "quick-start", name: "Quick Start", title: $lang.quick_start}
    ];
    this.List = [
        {page: "guide-modularize", name: "Modularize", title: $lang.modularize},
        {page: "guide-app", name: "App", title: $lang.app},
        {page: "guide-view", name: "View", title: $lang.view},
        {page: "guide-template", name: "Template", title: $lang.template},
        {page: "guide-bind", name: "Bind", title: $lang.data_bind},
        {page: "guide-event", name: "Event", title: $lang.event_bind},
        {page: "guide-pipe", name: "Pipe", title: $lang.pipe},
        {page: "guide-ajax", name: "AJAX", title: $lang.ajax},
        {page: "guide-form", name: "Form", title: $lang.form},
        {page: "guide-env", name: "Environment", title: $lang.env},
        {page: "guide-test", name: "Unit Test", title: $lang.unit_test},
        {page: "guide-plugin", name: "Plugin", title: $lang.plugin}
    ];
};

exports.go2 = function(file){
    this.go(env.isPc ? `guide/${file}` : file);
};