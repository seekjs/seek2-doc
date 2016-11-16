/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    is_first_item: {
        cn: "是否第一项",
        en: "Whether or not the first item"
    }
};


exports.getApi = function(lang) {
    return {
        name: "src.first",
        title: lang.is_first_item
    };
};