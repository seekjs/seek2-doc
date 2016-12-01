 var template = require("sys.template");
 exports.onInit = function(){
    exports.model = require("data.api").getDetail(exports.params.id);
};
 exports.runCode = function(){
    var code = document.querySelector("code").textContent.replace(/<\/?template>/ig,"").trim();
    var fun = template.compile(code);
    var html = fun();
    document.querySelector(".api-detail-result").innerHTML = html;
};
 exports.$lang = {
    title: {
        cn: "标题",
        en: "Title"
    },
    descriptions: {
        cn: "描述",
        en: "descriptions"
    },
    usage:{
        cn: "写法",
        en: "usage"
    },
    type: {
        cn: "类型",
        en: "Type"
    },
    argument: {
        cn: "参数",
        en: "argument"
    },
    is_required: {
        cn: "是否必须",
        en: "Required"
    },
    yes: {
        cn: "是",
        en: "Yes"
    },
    no: {
        cn: "否",
        en: "No"
    },
    example:{
        cn: "示例",
        en: "Example"
    },
    optional_value: {
        cn: "可选值",
        en: "Optional value"
    },
    default_value:{
        cn: "默认值",
        en: "Default Value"
    }
};
