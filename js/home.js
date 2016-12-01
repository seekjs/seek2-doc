 exports.$lang = {
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
    now_is_developing:{
        cn: "正在努力开发中,敬请期待!",
        en: "Is working hard to develop, please look forward to!"
    },
     framework_des: {
        cn: "数据驱动的组件，为现代化的 Web 界面而生",
        en: "Data driven components for the modernization of the Web interface"
    },
    switch_language: {
        cn: "切换语言",
        en: "switch language"
    },
    quick_start: {
        cn: "快速上手",
        en: "Quick Start"
    },
     modular: {
        cn: "模块化+命名空间",
        en: "Modular Add Namespace"
    },
    modular_des: {
        cn: "采用目前流行的CommonJS模块化规范,无缝兼容NodeJS; 独创的命名空间写法, 方便加载和管理模块",
        en: "Real front end browser module, non AMD specification; Writing the original namespace, convenient loading and management module"
    },
    spa: {
        cn: "单页应用",
        en: "Single Page Application"
    },
    spa_des: {
        cn: "简单的路由配置,丰富的页面切换效果",
        en: "Simple routing configuration, rich page switching effect"
    },
    data_driver:{
        cn: "数据驱动模板",
        en: "Data Driver"
    },
    data_driver_des:{
        cn: "数据跟模板双向绑定, 只需专注数据, 去掉繁琐的dom操作, 让你的工作效率嗖嗖提升",
        en: "Basically do not operate DOM, just care about the data"
    },
    three_in_one: {
        cn: "三位一体",
        en: "Three-in-one"
    },
    three_in_one_des: {
        cn: "CSS样式 + HTML模板 + Javascript 合并成一个文件",
        en: "CSS style + HTML template + Javascript mixed into one file"
    },
    nice_extend_mode: {
        cn: "友好的扩展机制",
        en: "Nice Extend Mode"
    },
    nice_extend_mode_des: {
        cn: "统一规范的插件机制, 通过NPM一键安装",
        en: "Unified specification of the plug-in mechanism, through the NPM a key to install"
    },
    lightweight: {
        cn: "轻量模式",
        en: "Lightweight"
    },
    lightweight_des: {
        cn: "~10kb min+gzip，简洁,无依赖, 无需借助任何外部插件即起即用",
        en: "Min+gzip ~10kb, concise, no dependence, no need to use any external plug-ins to play"
    }
};
 exports.langs = {
    en: "english",
    cn: "中文"
};
 exports.showTip = function(){
    this.confirm(this.lang.now_is_developing);
};
 exports.setLang = function(){
    localStorage.lang = this.element.value;
    require("sys.app").onInit(this);
    exports.render();
};
