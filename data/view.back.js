/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    back_prev_page: {
        cn: "返回上一页",
        en: "Return to the last page"
    }
};


exports.getApi = function(lang) {
    return {
        name: "back",
        title: lang.back_prev_page,
        cat: "method"
    };
};