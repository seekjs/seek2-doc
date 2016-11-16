/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    hide_view: {
        cn: "隐藏View",
        en: "Hide View"
    }
};


exports.getApi = function(lang) {
    return {
        name: "hide",
        title: lang.hide_view,
        cat: "method"
    };
};