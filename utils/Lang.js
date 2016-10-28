/**
 * Created by likaituan on 16/10/19.
 */


module.exports = {
    //菜单
    guide: {
        cn: "教程",
        en: "Guide"
    },
    api: {
        cn: "API",
        en: "API"
    },
    forum: {
        cn: "论坛",
        en: "Forum"
    },
    blog: {
        cn: "博客",
        en: "Blog"
    },
    github: {
        cn: "GitHub",
        en: "GitHub"
    },

    //首页
    framework_des: {
        cn: "数据驱动的组件，为现代化的 Web 界面而生",
        en: "Data driven components for the modernization of the Web interface"
    },
    quick_start: {
        cn: "快速上手",
        en: "GET STARTED"
    },

    three_in_one: {
        cn: "三位一体",
        en: "Three-in-one"
    },
    three_in_one_des: {
        cn: "CSS样式 + HTML模板 + Javascript合并成一个文件",
        en: "CSS style + HTML template + Javascript to merge into a file"
    },
    data_driver:{
        cn: "数据驱动模板",
        en: "data driver"
    },
    data_driver_des:{
        cn: "基本不用操作dom, 只需关心数据",
        en: "Basically do not operate DOM, just care about the data"
    },
    modular: {
        cn: "模块化",
        en: "modular"
    },
    modular_des: {
        cn: "真正的前端浏览器模块化,非AMD规范",
        en: "Real front end browser module, non AMD specification"
    },
    plugin: {
        cn: "方便的插件机制",
        en: "plugin"
    },
    plugin_des: {
        cn: "统一规范的插件机制, 通过NPM一键安装",
        en: "Unified specification of the plug-in mechanism, through the NPM a key to install"
    },
    light: {
        cn: "轻量",
        en: "light"
    },
    light_des: {
        cn: "~10kb min+gzip，简洁, 无依赖。",
        en: "Min+gzip ~10kb, concise, no dependence."
    },
    language_setting: {
        cn: "多语言",
        en: "language setting"
    },
    language_setting_des: {
        cn: "简单配置下语言, 立即让你的项目显得高大上",
        en: "Simple configuration language, immediately let your project appear on the tall"
    },


    //API首页
    api_reference: {
        cn: "API参考",
        en: "API Reference"
    },

    api_des:{
        cn:"注",
        en:"Notes"
    },

    example:{
        cn : "例子",
        en : "example"
    },

    //API详情页
    argument: {
        cn: "参数",
        en: "argument"
    },
    is_required: {
        cn: "是否必须",
        en: "Required"
    },
    descriptions: {
        cn: "描述",
        en: "descriptions"
    },
    type: {
        cn: "类型",
        en: "Type"
    },
    yes: {
        cn: "是",
        en: "Yes"
    },
    no: {
        cn: "否",
        en: "No"
    },


    //其他
    now_is_developing:{
        cn: "正在努力开发中,敬请期待!",
        en: "Is working hard to develop, please look forward to!"
    },

    getLang: function(lang){
        var o = {};
        for(var k in this){
            if(k!="getLang"){
                o[k] = this[k][lang];
            }
        }
        return o;
    }
};