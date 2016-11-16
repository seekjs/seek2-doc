/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    path: {
        cn: "路径",
        en: "path"
    }
};


exports.getApi = function(lang) {
    return {
        name: "path",
        title: lang.path,
        type: "String",
        example: "160101/r1",
        cat: "property",
        sub_cat: "url"
    };
};