/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    current_array_length: {
        cn: "当前循环的数组长度",
        en: "Current loop array length"
    }
};


exports.getApi = function(lang) {
    return {
        name: "src.length",
        title: lang.current_array_length
    };
};