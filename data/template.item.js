/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    current_item: {
        cn: "当前项",
        en: "Current Item"
    }
};


exports.getApi = function(lang) {
    return {
        name: "item",
        title: lang.current_item
    };
};