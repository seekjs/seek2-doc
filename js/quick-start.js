 exports.$lang = {
    step1_title: {
        cn: "安装seekjs包及脚手架工具",
        en: "Install seekjs kit and scaffolding tools"
    },
    step2_title: {
        cn: "引入seekjs模块引擎",
        en: "Import seekjs module engine"
    },
    step3_title: {
        cn: "配置入口文件",
        en: "Configuration entry file"
    },
    step4_title: {
        cn: "添加.sk页面文件",
        en: "Add .sk page file"
    },
     delay_install_if_manual:{
        cn: "如手动部署,可等build时再安装",
        en: "If manual deployment, can be do install when build"
    },
    config_namespace: {
        cn: "配置命名空间",
        en: "Configuration namespace"
    },
    import_app: {
        cn: "引入APP",
        en: "Import APP"
    },
    or: {
        cn: "或",
        en: "OR"
    },
    config_app: {
        cn: "配置APP",
        en: "Configuration APP"
    },
    setting_ini_page: {
        cn: "设置初始页面",
        en: "Set initial page"
    }
};
 exports.onInit = function() {
    exports.code = {
step1: `
npm install seekjs-cli -g (${$lang.delay_install_if_manual})
npm install seekjs`,

step2: `
<script src="node_modules/seekjs/module.js" data-main="root.main"><\/script>`,

step3: `
//1.${$lang.config_namespace}
seekjs.config({
ns: {
    util: "/utils/"
}
});
//2. ${$lang.import_app}
require("sys.app");
//3. ${$lang.config_app}
app.config({
page: "/pages/"
});
${$lang.or}
app.config({
js: "/js/",
tp: "/templates/",
css: "/css"
});
//4. ${$lang.setting_ini_page}
app.init("home");`,

step4: `
<style>...</style>
<template>...</template>
<script type="text/ecmascript-6">...<\/script>`
    };
};
/*
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
*/
