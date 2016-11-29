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
    },
    options: {
        cn: "选项",
        en: "Options"
    },
    default_lang:{
        cn: "默认语言",
        en: "Default Language"
    },
    lang_pack:{
        cn: "语言包",
        en: "Language Pack"
    },
    with_parameters: {
        cn: "带参数",
        en: "With parameters"
    },
    without_parameters: {
        cn: "不带参数",
        en: "Without parameters"
    }
};


exports.getApi = function(lang) {
    return {
        name: "usePlugin",
        des: `${lang.use_plugin}, <a href="#guide-plugin">${lang.see_details}</a>`,
        usage: `app.usePlugin(<plugin-name>, [options])`,
        args: [
            {name: "plugin-name", title: lang.plugin_module, type: "string", required:true},
            {name: "options", title: lang.options, type: "object", required:false},
            {name: "options.lang", title: lang.default_lang, type: "string", required:false},
            {name: "options.langPack", title: lang.lang_pack, type: "object", required:false},
        ],
        cat: "method",
        sub_cat: "plugin",
        example: `
        app.usePlugin(\"seekjs-plugin-dialog\");        //${lang.without_parameters}
        app.usePlugin(\"seekjs-plugin-dialog\", {
            lang:"en",
            langPack:{
                hello:{cn:"你好",cn:"Hello"}
            }
        });  //${lang.with_parameters}
        `
    };
};