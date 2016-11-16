/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    use_plugin: {
        cn: "使用插件",
        en: "Use Plugin"
    },
    plugin_module: {
        cn: "插件模块名称",
        en: "plugin module name"
    },
    see_details:{
        cn: "详见",
        en: "See Details"
    }
};


exports.getApi = function(lang) {
    return {
        name: "usePlugin",
        des: `${lang.use_plugin}, <a href="#guide-plugin">${lang.see_details}</a>`,
        args: [
            {name: "plugin-name", title: lang.plugin_module, type: "string", required:true},
            {name: "options", title: "选项", type: "object", required:false},
            {name: "options.lang", title: "语言", type: "string", required:false},
            {name: "options.langPack", title: "语言包", type: "object", required:false},
        ],
        cat: "method",
        sub_cat: "plugin",
        usage: `app.usePlugin(plugin-name)`,
        example: `
        app.usePlugin("seek-plugin-dialog");        //不带参数
        app.usePlugin("seek-plugin-dialog", {
            lang:"en",
            langPack:{
                hello:{cn:"你好",cn:"Hello"}
            }
        });  //带参数
        `
    };
};