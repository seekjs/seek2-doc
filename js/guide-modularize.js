 var hl = require("code.highlight");
 exports.onRender = function(){
    [...exports.ui.querySelectorAll("code")].forEach( element => {
        var html = hl.getHTML(element.innerHTML.trim());
        var div = document.createElement("div");
        div.innerHTML = html;
        element.parentNode.insertBefore(div, element);
        element.style.display = "none";
    });
};
  exports.$lang = {
    usage:{
        cn: "写法",
        en: "usage"
    },
    example:{
        cn: "示例",
        en: "Example"
    },
    namespace:{
        cn: "命名空间",
        en: "namespace"
    },
    short_path:{
        cn: "短路径",
        en: "short path"
    },
    alias:{
        cn: "别名",
        en: "Alias"
    },
    package:{
        cn: "包",
        en: "Package"
    },
    config:{
        cn: "配置",
        en: "config"
    },
    modularize: {
        cn: "模块化",
        en: "Modularize"
    },
    
    stronger_modular:{
        cn: "增强模块化",
        en: "Enhanced modular"
    },
    commonJs_rule:{
        cn: "采用跟NodeJs一样的commonJs规范",
        en: "Using NodeJs as the same as the commonJs specification"
    },
    sync_mode:{
        cn: "采用同步方式",
        en: "Using synchronization mode"
    },
    join_namespace:{
        cn: "加入命名空间",
        en: "Join namespace"
    },
     module_object_and_method:{
        cn: "模块内部对象及方法",
        en: "Module internal object and method"
    },
    module_itself:{
        cn: "模块本身",
        en: "Module itself"
    },
    export_object:{
        cn: "输出对象",
        en: "Export object"
    },
    load_module:{
        cn: "加载模块",
        en: "Load module"
    },
    dir_name:{
        cn: "模块所在的目录名称",
        en: "Name of the directory where the module is located"
    },
    filename:{
        cn: "模块对应的文件名",
        en: "The file name of the module"
    }
};

