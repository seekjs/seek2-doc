/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    refresh: {
        cn: "刷新页面",
        en: "Refresh"
    }
};


exports.getApi = function(lang) {
    return {
        name: "render",
        title: lang.refresh,
        cat: "method"
    };
};