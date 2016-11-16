/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    show_or_hide_view: {
        cn: "显示或隐藏View",
        en: "Show Or Hide View"
    }
};


exports.getApi = function(lang) {
    return {
        name: "toggle",
        title: lang.show_or_hide_view,
        cat: "method"
    };
};