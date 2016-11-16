/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    double_mode: {
        cn: "double模式(默认)",
        en: "Double mode (default)"
    },
    single_mode: {
        cn: "single模式",
        en: "Single mode"
    },
    return_object: {
        cn: "返回对象",
        en: "Return Object"
    },
    return_array: {
        cn: "返回数组",
        en: "Return Array"
    }
};


exports.getApi = function(lang) {
    return {
        name: "query",
        title: "查询参数",
        type: "Object",
        subItems: [
            {name: lang.double_mode, title: lang.return_object},
            {name: lang.single_mode, title: lang.return_array}
        ],
        cat: "property",
        sub_cat: "url",
        example: `
        uri:  #home?a=1&b=2
        query: {a:1,b:2}`
    };
};