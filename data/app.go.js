/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    page_jump: {
        cn: "页面跳转",
        en: "page jump"
    },
    page_name: {
        cn: "页面名称",
        en: "page name"
    }
};


exports.getApi = function(lang) {
    return {
        name: "go",
        title: lang.page_jump,
        cat: "method",
        args: [
            {name: "page", title: lang.page_name, type: "string", required: true}
        ],
        usage: `app.go(page)`,
        example:  `app.go("home");`
    };
};