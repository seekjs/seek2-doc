/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    separator: {
        cn: "分隔符",
        en: "Separator"
    },
    number: {
        cn: "数字",
        en: "Number"
    }
};


exports.getApi = function(lang) {
    return {
        name: "sep",
        title: lang.separator,
        method: "method",
        sub_cat: "number",
        args: [
            {name: "num", type: "Number", title: lang.number, required: 1}
        ]
    };
};