/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
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


exports.getApi = function(lang) {
    return {
        name: "init",
        title: lang.set_ini_page,
        usage: `app.init(page, container)`,
        args: [
            {name: "uri", title: lang.ini_page_name, type: "string", required:true},
            {name: "container", title: lang.dom_container_or_selector, type: "node/selector"}
        ],
        cat: "method",
        example: `app.init("home");`
    };
};