/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    other_condition: {
        cn: "最后条件",
        en: "Final condition"
    }
};


exports.getApi = function(lang) {
    return {
        name: "else",
        title: lang.other_condition,
        usage: `{else}`
    };
};