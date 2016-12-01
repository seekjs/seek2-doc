 exports.$lang = {
    plugin: {
        cn: "插件",
        en: "Plugin"
    },
    usage:{
        cn: "用法",
        en: "usage"
    },
    install:{
        cn: "安装",
        en: "install"
    },
    condition:{
        cn: "条件",
        en: "condition"
    },
    see_details:{
        cn: "详见",
        en: "See Details"
    },
     recommended_plugin: {
        cn: "推荐的插件",
        en: "Recommended plugin"
    },
    more_plugin: {
        cn: "更多插件",
        en: "more plugin"
    },
    seekJs_no_store_plugin: {
        cn: "seekjs本身不带任何插件,所有插件均从npm下载",
        en: "Seekjs itself does not bring any plugins, all plugins are downloaded from the NPM"
    },
    plugin_name_prefix:{
        cn: "插件名称前缀统一为",
        en: "The Plugin name prefix is unified"
    },
    filename_suffix:{
        cn: "文件后缀统一为",
        en: "File name suffix unified"
    },
    must_contain_doc:{
        cn: "必须包含完整API文档+Demo+单元测试",
        en: "Must contain complete API documentation and Demo and unit tests"
    },
     swipe: {
        cn:"滑动组件",
        en: "Swipe Plugin"
    },
    move: {
        cn:"动画插件",
        en: "Move Plugin"
    },
    dialog: {
        cn:"弹窗插件",
        en: "Dialog Plugin"
    },
    mask: {
        cn:"遮罩层",
        en: "Mask Plugin"
    },
    datePicker: {
        cn:"日期选择框",
        en: "datePicker Plugin"
    }
};
 exports.onInit = function(){
    //推荐插件列表
    exports.pluginList = [
        { page: "seekjs-plugin-dialog", name: "dialog", title: $lang.dialog },
        { page: "seekjs-plugin-mask", name: "mask", title: $lang.mask },
        { page: "seekjs-plugin-datepicker", name: "datepicker", title: $lang.datePicker },
        { page: "seekjs-plugin-move", name: "move", title: $lang.move },
        { page: "seekjs-plugin-swipe", name: "swipe", title: $lang.swipe }
    ];
};
