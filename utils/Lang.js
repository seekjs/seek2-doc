/**
 * Created by likaituan on 16/10/19.
 */


module.exports = {
    guide: {
        cn: "教程",
        en: "Guide"
    },
    forum: {
        cn: "论坛",
        en: "Forum"
    },
    blog: {
        cn: "博客",
        en: "Blog"
    },
    syntax:{
        cn: "语法",
        en: "Syntax"
    },
    three_in_one: {
        cn: "三位一体",
        en: "Three-in-one"
    },
    now_is_developing:{
        cn: "正在努力开发中,敬请期待!",
        en: "Is working hard to develop, please look forward to!"
    },
    list:{
        cn: "列表",
        en: "List"
    },
    usage:{
        cn: "写法",
        en: "usage"
    },
    example:{
        cn: "示例",
        en: "Example"
    },
    argument: {
        cn: "参数",
        en: "argument"
    },
    is_required: {
        cn: "是否必须",
        en: "Required"
    },
    title: {
        cn: "标题",
        en: "Title"
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
    install:{
        cn: "安装",
        en: "install"
    },
    condition:{
        cn: "条件",
        en: "condition"
    },
    config:{
        cn: "配置",
        en: "config"
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
    see_details:{
        cn: "详见",
        en: "See Details"
    },
    Import:{
        cn: "引入",
        en: "Import"
    },
    Call:{
        cn: "调用",
        en: "Call"
    },
    pipe: {
        cn: "管道",
        en: "Pipe"
    },
    unit_test: {
        cn: "单元测试",
        en: "Unit Test"
    },
    summary: {
        cn: "概览",
        en: "Summary"
    },
    modularize: {
        cn: "模块化",
        en: "Modularize"
    },
    template: {
        cn: "模板",
        en: "Template"
    },
    plugin: {
        cn: "插件",
        en: "Plugin"
    },
    scaffold: {
        cn: "脚手架",
        en: "Scaffold"
    },
    quick_start: {
        cn: "快速上手",
        en: "Quick Start"
    },
    main_view: {
        cn: "主View",
        en: "main view"
    },
    sub_view: {
        cn: "子View",
        en: "sub view"
    },
    data_bind: {
        cn: "数据绑定",
        en: "Data Bind"
    },
    event_bind: {
        cn: "事件绑定",
        en: "Event Bind"
    },
    Return:{
        cn: "返回",
        en: "Return"
    },
    return_value:{
        cn: "返回值",
        en: "Return value"
    },
    object: {
        cn: "对象",
        en: "Object"
    },
    array: {
        cn: "数组",
        en: "Array"
    },
    string: {
        cn: "字符串",
        en: "String"
    },
    number: {
        cn: "数字",
        en: "Number"
    },
    date: {
        cn: "日期",
        en: "Date"
    },
    model: {
        cn: "模型",
        en: "Model"
    },
    jump: {
        cn: "跳转",
        en: "Jump"
    },
    back: {
        cn: "回退",
        en: "Back"
    },
    show: {
        cn: "显示",
        en: "Show"
    },
    hide: {
        cn: "隐藏",
        en: "Hide"
    },
    show_or_hide: {
        cn: "显示或隐藏",
        en: "Show Or Hide"
    },
    amount_to: {
        cn: "相关于",
        en: "Amount to"
    },
    cond_exp: {
        cn: "条件表达式",
        en: "Conditional expression"
    },
    rmb: {
        cn: "人民币",
        en: "RMB"
    },
    form:{
        cn:"表单验证",
        en:"Form"
    },
    env: {
    cn: "环境检测",
        en: "Environment"
    },

    getLang: function(langObj, lang){
        if(!langObj){
            return {};
        }

        var o = {};
        for(var k in langObj){
            if(k!="getLang"){
                o[k] = langObj[k][lang];
            }
        }
        return o;
    }
};