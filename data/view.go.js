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
        exports.go("home");     //不带参数
        exports.go("list/cat/js");      //带参数
        exports.go("list/cat/js?key=seekjs");      //带查询参数`
    };
};