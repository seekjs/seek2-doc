/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    start_from_one_index: {
        cn: "当前索引, 从1开始",
        en: "Current index, starting from 1"
    }
};


exports.getApi = function(lang) {
    return {
        name: "sn",
        title: lang.start_from_one_index
    };
};