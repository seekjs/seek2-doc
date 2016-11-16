/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    condition_start: {
        cn: "条件开始",
        en: "Condition start"
    }
};


exports.getApi = function(lang) {
    return {
        name: "if",
        title: lang.condition_start,
        usage: `{if condition}`
    };
};