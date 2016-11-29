/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    jump: {
        cn: "跳转",
        en: "Jump"
    },
    title: {
        cn: "标题",
        en: "Title"
    },
    with_params:{
        cn: "带参数",
        en: "With Parameters"
    },
    without_params:{
        cn: "不带参数",
        en: "Without Parameters"
    },
    with_query_params:{
        cn: "带查询参数",
        en: "With Query Parameters"
    }
};


exports.getApi = function(lang) {
    return {
        name: "go",
        title: lang.jump,
        args: [
            {name: "uri", type: "String", title: lang.title, required: 1}
        ],
        cat: "method",
        example: `
        exports.go("home");     //${lang.without_params}
        exports.go("list/cat/js");      //${lang.with_params}
        exports.go("list/cat/js?key=seekjs");      //${lang.with_query_params}`
    };
};