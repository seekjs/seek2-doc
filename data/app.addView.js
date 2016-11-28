/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    object: {
        cn: "对象",
        en: "Object"
    }
};


exports.getApi = function(lang) {
    return {
        name: "addView",
        title: lang.add_page_method_extension,
        des: "相比于app.viewEx, 可以设置多次",
        cat: "method",
        args: [
            {name: "viewEx", title: "viewEx" + lang.object, type: "object", required: true}
        ],
        usage: `app.addView(viewEx)`,
        example:  `
        app.addView(require(\"util.viewEx1\"));
        app.addView(require(\"util.viewEx2\"));`
    };
};