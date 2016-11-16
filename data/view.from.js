/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    source: {
        cn: "来源",
        en: "source"
    }
};


exports.getApi = function(lang) {
    return {
        name: "from",
        title: lang.source,
        type: "String",
        example: "home",
        cat: "property",
        sub_cat: "url"
    };
};