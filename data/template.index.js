/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    start_from_zero_index: {
        cn: "当前索引, 从0开始",
        en: "Current index, starting from 0"
    }
};


exports.getApi = function(lang) {
    return {
        name: "index",
        title: lang.start_from_zero_index
    };
};