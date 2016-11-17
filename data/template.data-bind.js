/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    title: {
        cn: "数据绑定",
        en: "bind data"
    }
};


exports.getApi = function(lang) {
    return {
        name: "data-bind",
        title: lang.title,
        cat: "data"
    };
};