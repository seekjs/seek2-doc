/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    page_method_extension: {
        cn: "设置页面公用方法扩展",
        en: "Set page common method extensions"
    }
};


exports.getApi = function(lang) {
    return {
        name: "viewEx",
            title: lang.page_method_extension,
        des: "相比于app.addView, 只能设置一次",
        type: "object",
        cat: "property",
        usage: `app.viewEx = [object]`,
        example:  `app.viewEx = require('util.viewEx');`
    };
};