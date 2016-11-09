/**
 * Created by likaituan on 15/8/10.
 */

var Lang = require("utils.Lang");

//语言配置
exports.lang = {
    //app相关
    is_use_animate: {
        cn: "是否使用动画",
        en: "Is Use Animate"
    },
    animate_duration: {
        cn: "动画时长(毫秒)",
        en: "Animate Duration(Millisecond)"
    },
    plugin: {
        cn: "插件列表对象",
        en: "Plugin List Object"
    },
    plugin_des: {
        cn: "全局插件,可用在任何页面",
        en: "Plugin List Object"
    },
    use_plugin: {
        cn: "使用插件",
        en: "Use Plugin"
    },
    plugin_module: {
        cn: "插件模块名称",
        en: "plugin module name"
    },
    all_view_ini_event: {
        cn: "所有View的初始化事件",
        en: "All View initialization events"
    },
    current_view: {
        cn: "当前View",
        en: "Current View"
    },
    all_view_loaded_event: {
        cn: "所有View的加载完成事件",
        en: "All View loaded to complete the event"
    },
    use_title_repair: {
        cn: "使用标题修复",
        en: "Use Title Repair"
    },
    page_jump: {
        cn: "页面跳转",
        en: "page jump"
    },
    page_method_extension: {
        cn: "设置页面公用方法扩展",
        en: "Set page common method extensions"
    },
    format_pipe_extension: {
        cn: "设置格式化公用方法扩展",
        en: "Set formatting common method extensions"
    },
    dir_setting: {
        cn: "设置目录",
        en: "Set directory"
    },
    pages_dir_config: {
        cn: "设置pages的目录",
        en: "Set pages directory"
    },
    set_ini_page: {
        cn: "设置初始页面",
        en: "Set initial page"
    },
    ini_page_name: {
        cn: "初始页面名称",
        en: "Initial page name"
    },
    dom_container_or_selector: {
        cn: "DOM容器或选择器",
        en: "DOM container or selector"
    }
};

//属性列表
exports.getApiList = function() {
    var lang = Lang.getLang(exports.lang, localStorage.lang);

    return {
        list: [
            {
                name: "useAnimate",
                title: lang.is_use_animate,
                cat: "property",
                subcat: "animate",
                usage: `app.useAnimate = [boolean]`,
                type: "boolean",
                defaultVal: "false",
                example: `app.useAnimate = true;`
            },
            {
                name: "aniDuration",
                title: lang.animate_duration,
                cat: "property",
                subcat: "animate",
                usage: `app.aniDuration = [number]`,
                type: "number",
                defaultVal: 500,
                example: `app.aniDuration = 1000;`
            },
            {
                name: "plugin",
                title: lang.plugin,
                des: lang.plugin_des,
                cat: "property",
                subcat: "plugin",
                type: "object",
                usage: `app.plugin.[plugin-name].[plugin-method]`,
                example: `app.plugin.dialog.alert("hello seekjs")`

            },
            {
                name: "usePlugin",
                des: `${lang.use_plugin}, <a href="#guide-plugin">${$Lang.see_details}</a>`,
                args: [
                    {name: "plugin-name", title: lang.plugin_module, type: "string", required:true}
                ],
                cat: "method",
                subcat: "plugin",
                usage: `app.usePlugin(plugin-name)`,
                example: `app.usePlugin("seek-plugin-dialog");`
            },
            {
                name: "onViewInit",
                title: lang.all_view_ini_event,
                args: [
                    {name: "view", title: lang.current_view, type: "object", required:false}
                ],
                cat: "event",
                usage: `app.onViewInit = function(view){...}`,
                example: `
                app.onViewInit = function(view){
                    if(!localStorage.isLogin && view.uri!="login"){
                        app.go("login");
                    }
                }`
            },
            {
                name: "onViewRender",
                title: lang.all_view_loaded_event,
                args: [
                    {name: "view", title: lang.current_view, type: "object"}
                ],
                cat: "event",
                usage: `app.onViewRender = function(view){...}`,
                example: `
                app.onViewRender = function(view){
                    if(view.uri=="home"){
                        alert("welcome goto my home!");
                    }
                }`
            },
            {
                name: "useTitleRepair",
                title: lang.use_title_repair,
                des: "前提条件, 只有设置有title属性的页面才有效",
                cat: "property",
                usage: `app.useTitleRepair = [boolean]`,
                type: "boolean",
                defaultVal: "false",
                example: `app.useTitleRepair = true;`
            },
            {
                name: "go",
                title: lang.page_jump,
                cat: "method",
                args: [
                    {name: "page", title: lang.page_name, type: "string", required: true}
                ],
                usage: `app.go(page)`,
                example:  `app.go("home");`
            },
            {
                name: "viewEx",
                title: lang.page_method_extension,
                des: "相比于app.addView, 只能设置一次",
                type: "object",
                cat: "property",
                usage: `app.viewEx = [object]`,
                example:  `app.viewEx = require("util.viewEx");`
            },
            {
                name: "pipeEx",
                title: lang.format_pipe_extension,
                des: "相比于app.addPipe, 只能设置一次",
                type: "object",
                cat: "property",
                usage: `app.pipeEx = [object]`,
                example:  `app.pipeEx = require("util.pipeEx");`
            },
            {
                name: "addView",
                title: lang.add_page_method_extension,
                des: "相比于app.viewEx, 可以设置多次",
                cat: "method",
                args: [
                    {name: "viewEx", title: "viewEx" + $Lang.object, type: "object", required: true}
                ],
                usage: `app.addView(viewEx)`,
                example:  `
                app.addView(require("util.viewEx1"));
                app.addView(require("util.viewEx2"));`
            },
            {
                name: "addPipe",
                title: lang.add_format_pipe_extension,
                des: "相比于app.pipeEx, 可以设置多次",
                cat: "method",
                args: [
                    {name: "pipeEx", title: "pipeEx" + $Lang.object, type: "object", required: true}
                ],
                usage: `app.addPipe(pipeEx)`,
                example:  `
                app.addPipe(require("util.pipeEx1"));
                app.addPipe(require("util.pipeEx2"));`
            },
            {
                name: "config",
                des: lang.dir_setting,
                args: [
                    {name: "options", title: lang.pages_dir_config, type: "object", required:true},
                    {name: "options.path", title: lang.pages_dir_config, type: "string", required:true}
                ],
                cat: "method",
                usage: `app.addPipe(options)`,
                example:  `
                app.config({
                    path: "/path/to/"
                });`
            },
            {
                name: "init",
                title: lang.set_ini_page,
                usage: `app.init(page, container)`,
                args: [
                    {name: "uri", title: lang.ini_page_name, type: "string", required:true},
                    {name: "container", title: lang.dom_container_or_selector, type: "node/selector"}
                ],
                cat: "method",
                example: `app.init("home");`
            }
        ]
    };
};