/**
 * Created by likaituan on 16/10/19.
 */

var template = require("sys.template");

var cfg = {};

exports.config = function (_cfg) {
    for(var k in _cfg){
        cfg[k] = _cfg[k];
    }
};

exports.init  = function (page) {
    this.go(page);
};

//跳转
exports.go = function (page) {
    var code = require(`${cfg.path}${page}.sk`);
    var jsCode = /<script.*?>([\s\S]+?)<\/script>/.test(code) && RegExp.$1;
    var cssCode = /<style.*?>([\s\S]+?)<\/style>/.test(code) && RegExp.$1;
    var templateCode = /<template.*?>([\s\S]+?)<\/template>/.test(code) && RegExp.$1;
    if(!cssCode && !templateCode && !jsCode){
        jsCode = code.trim();
    }
    if(jsCode){
        exports.view = parseModule(jsCode);
    }else{
        throw `the "${page}" page no script`
    }
    cssCode && this.parseCss(cssCode);
    templateCode && this.parseTemplate(templateCode);
};

//解析样式
exports.parseCss = function (code) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = code;
    document.head.appendChild(style);
};

//解析模版
exports.parseTemplate = function (code) {
    var fun = template.compile(code);
    document.body.innerHTML = fun(exports.view);
};