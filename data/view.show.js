/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    show_view: {
        cn: "显示View",
        en: "Show View"
    }
};


exports.getApi = function(lang) {
    return {
        name: "show",
        title: lang.show_view,
        cat: "method"
    };
};