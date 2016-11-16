/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    plugin: {
        cn: "插件列表对象",
        en: "Plugin List Object"
    },
    plugin_des: {
        cn: "全局插件,可用在任何页面",
        en: "Plugin List Object"
    }
};


exports.getApi = function(lang) {
    return {
        name: "plugin",
        title: lang.plugin,
        des: lang.plugin_des,
        cat: "property",
        sub_cat: "plugin",
        type: "object",
        usage: `app.plugin.[plugin-name].[plugin-method]`,
        example: `app.plugin.dialog.alert("hello seekjs")`
    };
};