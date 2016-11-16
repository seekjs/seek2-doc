/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    is_last_item: {
        cn: "是否最后一项",
        en: "Whether the last item"
    }
};


exports.getApi = function(lang) {
    return {
        name: "src.last",
        title: lang.is_last_item
    };
};