/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    dir_setting: {
        cn: "设置目录",
        en: "Set directory"
    },
    pages_dir_config: {
        cn: "设置pages的目录",
        en: "Set pages directory"
    }
};


exports.getApi = function(lang) {
    return {
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
    };
};