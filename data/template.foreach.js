/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    loop_start: {
        cn: "循环开始",
        en: "Loop start"
    }
};


exports.getApi = function(lang) {
    return {
        name: "foreach",
        title: lang.loop_start,
        usage: `{foreach src=json key=index }`
    };
};