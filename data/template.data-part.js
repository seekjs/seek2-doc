/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    title: {
        cn: "局部对象",
        en: "part object"
    }
};


exports.getApi = function(lang) {
    return {
        name: "data-part",
        title: lang.title,
        cat: "data"
    };
};