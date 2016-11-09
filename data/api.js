/**
 * Created by likaituan on 15/8/10.
 */

var Lang = require("utils.Lang");

//语言配置
exports.lang = {
    //app相关
    is_use_animate: {
        cn: "是否使用动画",
        en: "Is Use Animate"
    },
    animate_duration: {
        cn: "动画时长(毫秒)",
        en: "Animate Duration(Millisecond)"
    },
    plugin: {
        cn: "插件列表对象",
        en: "Plugin List Object"
    },
    plugin_des: {
        cn: "全局插件,可用在任何页面",
        en: "Plugin List Object"
    },
    use_plugin: {
        cn: "使用插件",
        en: "Use Plugin"
    },
    plugin_module: {
        cn: "plug模块,写法同require",
        en: "The plug module, written with require"
    },
    all_view_ini_event: {
        cn: "所有View的初始化事件",
        en: "All View initialization events"
    },
    current_view: {
        cn: "当前View",
        en: "Current View"
    },
    all_view_loaded_event: {
        cn: "所有View的加载完成事件",
        en: "All View loaded to complete the event"
    },
    use_title_repair: {
        cn: "使用标题修复",
        en: "Use Title Repair"
    },
    extension_name: {
        cn: "扩展名",
        en: "Extension name"
    },
    page_method_extension: {
        cn: "设置页面公用方法扩展",
        en: "Set page common method extensions"
    },
    format_pipe_extension: {
        cn: "设置格式化公用方法扩展",
        en: "Set formatting common method extensions"
    },
    dir_setting: {
        cn: "设置目录",
        en: "Set directory"
    },
    pages_dir_config: {
        cn: "设置pages的目录",
        en: "Set pages directory"
    },
    set_ini_page: {
        cn: "设置初始页面",
        en: "Set initial page"
    },
    ini_page_name: {
        cn: "初始页面名称",
        en: "Initial page name"
    },
    dom_container_or_selector: {
        cn: "DOM容器或选择器",
        en: "DOM container or selector"
    },

    //view相关
    view_description: {
        cn: "说明：P1=基本属性\nP2=View/子View之间的相互调用\nP3=URL地址相关",
        en: "Description: P1= basic attribute \nP2=View/ View sub \nP3=URL between the mutual call address related"
    },
    title_example: {
        cn: "设置标题 : exp.title = '欢迎使用seek.js'",
        en: "Set title: exp.title = 'welcome to use seek.js'"
    },
    all_type: {
        cn: "任意类型",
        en: "Arbitrary type"
    },
    template_code: {
        cn: "模板代码",
        en: "Template code"
    },
    template_html_example: {
        cn: 'js: exports.msg = {name:"姓名"}; \nhtml: <p>{this.msg.name}</p> \nresult : 姓名',
        en: 'Js: exports.msg = {name: "Name"};   \nHTML: <p>{this.msg.name}</p> \nresult: Name'
    },
    top_container: {
        cn: "最顶层容器",
        en: "Top container"
    },
    parent_view: {
        cn: "父级View",
        en: "Parent View"
    },
    main_view: {
        cn: "主View(最顶层View)",
        en: "Main View (top View)"
    },
    child_view: {
        cn: "子View,直接写view id",
        en: "Child View, directly write ID view"
    },
    part: {
        cn: "局部",
        en: "part"
    },
    source: {
        cn: "来源",
        en: "source"
    },
    address: {
        cn: "地址",
        en: "address"
    },
    path: {
        cn: "路径",
        en: "path"
    },
    view_id: {
        cn: "view的唯一ID",
        en: "View only ID"
    },
    param_object: {
        cn: "参数对象",
        en: "Parameter object"
    },
    double_mode: {
        cn: "double模式(默认)",
        en: "Double mode (default)"
    },
    single_mode: {
        cn: "single模式",
        en: "Single mode"
    },
    param_type: {
        cn: "参数类型",
        en: "Parameter type"
    },
    back_prev_page: {
        cn: "返回上一页",
        en: "Return to the last page"
    },
    up2model: {
        cn: "更新到模型",
        en: "Update to model"
    },
    generate_html: {
        cn: "生成HTM",
        en: "Generate HTM"
    },
    generate_template_code: {
        cn: "生成模板代码",
        en: "Generate template code"
    },
    refresh: {
        cn: "刷新页面",
        en: "Refresh"
    },
    ini_event: {
        cn: "初始化事件",
        en: "Initialization event"
    },
    render_event: {
        cn: "View加载完成或刷新触发的事件,相当于window.onload",
        en: "View loaded to complete or refresh the trigger event, equivalent to window.onload"
    },

    //template相关
    condition_start: {
        cn: "条件开始",
        en: "Condition start"
    },
    conditional_branch: {
        cn: "条件分支",
        en: "conditional branch"
    },
    other_condition: {
        cn: "最后条件",
        en: "Final condition"
    },
    loop_start: {
        cn: "循环开始",
        en: "Loop start"
    },
    current_array_length: {
        cn: "当前循环的数组长度",
        en: "Current loop array length"
    },
    is_first_item: {
        cn: "是否第一项",
        en: "Whether or not the first item"
    },
    is_last_item: {
        cn: "是否最后一项",
        en: "Whether the last item"
    },
    current_item: {
        cn: "当前项",
        en: "Current Item"
    },
    start_from_zero_index: {
        cn: "当前索引, 从0开始",
        en: "Current index, starting from 0"
    },
    start_from_one_index: {
        cn: "当前索引, 从1开始",
        en: "Current index, starting from 1"
    },

    //pipe相关
    take_few_from_begin: {
        cn: "取头几位",
        en: "Take the first few"
    },
    take_few_from_end: {
        cn: "取末几位",
        en: "Take the first few"
    },
    turn_capital_letter: {
        cn: "转大写字母",
        en: "Turn capital letters"
    },
    turn_lower_case_letter: {
        cn: "转小写字母",
        en: "Turn lower case letters"
    },
    turn_english_number: {
        cn: "转英文数字",
        en: "Turn English number"
    },
    turn_chinese_number: {
        cn: "转中文数字",
        en: "Turn Chinese figures"
    },
    turn_big_chinese_number: {
        cn: "转繁体中文数字",
        en: "Transfer traditional Chinese figures"
    },
    separator: {
        cn: "分隔符",
        en: "Separator"
    },
    date_format: {
        cn: "日期格式化",
        en: "DateFormatter"
    },
    formatting_style: {
        cn: "格式化样式",
        en: "Formatting styles"
    },
    rmb_formatting: {
        cn: "人民币格式化",
        en: "RMB formatting"
    },
    output_object_use_json_string: {
        cn: "以JSON字符串的形式输出对象",
        en: "Output object in the form of a JSON string"
    },
    same_vb_function: {
        cn: "参考VB同名函数,条件为真,返回v1,否则返回",
        en: "Reference VB function of the same name, the condition is true, return V1, otherwise return"
    },
    condition_judgment: {
        cn: "条件判断",
        en: "Condition judgment"
    }
};

//属性列表
exports.getApiList = function() {
    var lang = Lang.getLang(exports.lang, localStorage.lang);

    return {
        app: {
            list: [
                {
                    name: "useAnimate",
                    title: lang.is_use_animate,
                    cat: "property",
                    subcat: "animate",
                    usage: `app.useAnimate = [boolean]`,
                    type: "boolean",
                    defaultVal: "false",
                    example: `app.useAnimate = true;`
                },
                {
                    name: "aniDuration",
                    title: lang.animate_duration,
                    cat: "property",
                    subcat: "animate",
                    usage: `app.aniDuration = [number]`,
                    type: "number",
                    defaultVal: 500,
                    example: `app.aniDuration = 500;`
                },
                {
                    name: "plugin",
                    title: lang.plugin,
                    des: lang.plugin_des,
                    cat: "property",
                    subcat: "plugin",
                    type: "object",
                    example: `app.plugin.dialog.alert("hello seekjs")`

                },
                {
                    name: "usePlugin",
                    des: `${lang.use_plugin}, <a href="#guide-plugin">${$Lang.see_details}</a>`,
                    args: [
                        {name: "plugin-name", title: lang.plugin_module, type: "string"}
                    ],
                    cat: "method",
                    subcat: "plugin",
                    usage: `app.usePlugin([plugin-name])`,
                    example: `app.usePlugin("seek-plugin-dialog")`
                },
                {
                    name: "onViewInit",
                    title: lang.all_view_ini_event,
                    args: [
                        {name: "view", title: lang.current_view, type: "object"}
                    ],
                    cat: "event"
                },
                {
                    name: "onViewRender",
                    title: lang.all_view_loaded_event,
                    args: [
                        {name: "view", title: lang.current_view, type: "object"}
                    ],
                    cat: "event"
                },
                {name: "useTitleRepair", title: lang.use_title_repair, type: "boolean", cat: "property"},


                {name: "ext", title: lang.extension_name, type: "object", cat: "property"},
                {name: "viewEx", title: lang.page_method_extension, type: "module object", cat: "property"},
                {name: "pipeEx", title: lang.format_pipe_extension, type: "module object", cat: "property"},
                {
                    name: "addView", title: lang.add_page_method_extension, cat: "method", args: [
                    {name: "viewEx", title: "viewEx"+$Lang.object, type: "object", required: true}
                ]
                },
                {
                    name: "addPipe", title: lang.add_format_pipe_extension, cat: "method", args: [
                    {name: "pipeEx", title: "pipeEx"+$Lang.object, type: "object", required: true}
                ]
                },
                {
                    name: "setPath",
                    des: lang.dir_setting,
                    args: [
                        {name: "path", title: lang.page_dir_config, type: "object"}
                    ],
                    cat: "method"

                },
                {
                    name: "init",
                    title: lang.set_ini_page,
                    args: [
                        {name: "uri", title: lang.ini_page_name, type: "string"},
                        {name: "container", title: lang.dom_container_or_selector, type: "node/selector"}
                    ],
                    cat: "method"
                }
            ]
        },
        view: {
            des: lang.view_description,
            list: [
                {
                    name: "type",
                    title: "view"+$Lang.type,
                    type: "String",
                    list: {
                        main: $Lang.main_view,
                        sub: $Lang.sub_view
                    },
                    cat: "property",
                    subcat: "basic"
                },
                {
                    name: "title",
                    title: $Lang.title,
                    type: "String",
                    example: lang.title_example,
                    cat: "property",
                    subcat: "basic"
                },
                {name: "model", title: $Lang.model, type: lang.all_type, example: "exports.model={a:1,b:2};", cat: "property", subcat: "basic"},
                {
                    name: "templateHTML",
                    title: lang.template_code,
                    type: "String",
                    example: lang.template_html_example,
                    cat: "property",
                    subcat: "basic"
                },
                {name: "ui", title: lang.top_container, type: "Node", cat: "property", subcat: "basic"},


                {name: "parent", title: lang.parent_view, type: "Object", cat: "property", subcat: "box"},
                {name: "root", title: lang.main_view, type: "Object", cat: "property", subcat: "box"},
                {name: "[subviewname]", title: lang.child_view, type: "Object", cat: "property", subcat: "box"},
                {name: "part", title: lang.part, type: "Object", cat: "property", subcat: "box"},
                //{name: "pop", title: "弹窗", type: "Object", cat: "property", subcat: "box"},


                {name: "from", title: lang.source, type: "String", example: "home", cat: "property", subcat: "url"},
                {name: "uri", title: lang.address, type: "String", example: "ad/160101/r1", cat: "property", subcat: "url"},
                {name: "path", title: lang.path, type: "String", example: "160101/r1", cat: "property", subcat: "url"},
                {name: "id", title: lang.view_id, type: "String", example: "r1", cat: "property", subcat: "url"},
                {
                    name: "params", title: lang.param_object, type: "Object,Array", example: "{a:1,b:2}",
                    subItems: [
                        {name: lang.double_mode, title: $Lang.return+$Lang.object},
                        {name: lang.single_mode, title: $Lang.return+$Lang.array}
                    ],
                    cat: "property",
                    subcat: "url"
                },
                {name: "paramType", title: lang.param_type, type: "String", example: "double", cat: "property", subcat: "url"},


                {
                    name: "go",
                    title: $Lang.jump,
                    args: [
                        {name: "uri", type: "String", title: $Lang.title, required: 1}
                    ],
                    cat: "method"
                },
                {name: "back", title: lang.back_prev_page, cat: "method"},
                {name: "show", title: $Lang.show + "View", cat: "method"},
                {name: "hide", title: $Lang.hide + "View", cat: "method"},
                {name: "toggle", title: $Lang.show_or_hide + "View", cat: "method"},
                {name: "up2model", title: lang.up2model, cat: "method"},
                {name: "getHTML", title: lang.generate_html, cat: "method"},
                {name: "getTemplate", title: lang.generate_template_code, cat: "method"},
                {name: "render", title: lang.refresh, cat: "method"},


                {name: "onInit", title: lang.ini_event, cat: "event"},
                {name: "onRender", title: lang.render_event, cat: "event"}
            ]
        },
        template: {
            title: $Lang.template,
            list: [
                { name: "if", title: lang.condition_start },
                { name: "elsif", title: lang.condition_branch },
                { name: "else", title: lang.other_condition },
                { name: "foreach", title: lang.loop_start },

                { name: "=[obj]", title: $Lang.amount_to + "console.log(obj)" },
                { name: "src.length", title: lang.current_array_length },
                { name: "src.first", title: lang.is_first_item },
                { name: "src.last", title: lang.is_last_item },
                { name: "item", title: lang.current_item },
                { name: "i", title: lang.start_from_zero_index },
                { name: "sn", title: lang.start_from_one_index }
            ]
        },
        pipe: {
            title: $Lang.pipe,
            list: [
                //字符串
                {
                    name: "begin",
                    title: lang.take_few_from_begin,
                    method: "method",
                    args: [
                        {name: "str", type: "String", title: $Lang.string, required: 1}
                    ],
                    example: `<template>{"13601187438" | begin:3}}</template>`
                },
                {
                    name: "end",
                    title: lang.take_few_from_end,
                    method: "method",
                    args: [
                        {name: "str", type: "String", title: $Lang.string, required: 1}
                    ],
                    example: `<template>{"13601187438" | end:4}}</template>`
                },
                {
                    name: "upper",
                    title: lang.turn_capital_letter,
                    method: "method",
                    args: [
                        {name: "str", type: "String", title: $Lang.string, required: 1}
                    ],
                    example: `<template>{abc | upper}}</template>`
                },
                {
                    name: "lower",
                    title: lang.turn_lower_case_letter,
                    method: "method",
                    args: [
                        {name: "str", type: "String", title: $Lang.string, required: 1}
                    ],
                    example: `<template>{ABC | upper}}</template>`
                },

                //数字
                {
                    name: "en",
                    title: lang.turn_english_number,
                    method: "method",
                    args: [
                        {name: "num", type: "Number", title: $Lang.number, required: 1}
                    ]
                },
                {
                    name: "cn",
                    title: lang.turn_chinese_number,
                    method: "method",
                    args: [
                        {name: "num", type: "Number", title: $Lang.number, required: 1}
                    ]
                },
                {
                    name: "big",
                    title: lang.turn_big_chinese_number,
                    method: "method",
                    args: [
                        {name: "num", type: "Number", title: $Lang.number, required: 1}
                    ]
                },
                {
                    name: "sep",
                    title: lang.separator,
                    method: "method",
                    args: [
                        {name: "num", type: "Number", title: $Lang.number, required: 1}
                    ]
                },

                //日期
                {
                    name: "date_format",
                    title: lang.date_format,
                    cat: "method",
                    args: [
                        {name: "dateObj", type: "String", title: $Lang.date+$Lang.object, required: 1},
                        {name: "rule", type: "String", title: lang.formatting_style, required: 1}
                    ]
                },
                {
                    name: "rmb",
                    title: lang.rmb_formatting,
                    cat: "method",
                    args: [
                        {name: "number", type: "Number", title: $Lang.rmb, required: 1}
                    ]
                },

                //对象
                {
                    name: "json",
                    title: lang.output_object_use_json_string,
                    cat: "method",
                    args: [
                        {name: "jsonObj", type: "Object", title: "JSON"+$Lang.object, required: 1}
                    ],
                    example: `<template><%var jsonObj = {a:1,b:2,c:3}; %> { jsonObj | json}</template>`
                },

                //其他
                {
                    name: "iif",
                    title: $lang.condition_judgment,
                    des: lang.same_vb_function,
                    cat: "method",
                    args: [
                        {name: "exp", type: "Boolean", title: $Lang.cond_exp, required: 1},
                        {name: "v1", type: "Value", title: $Lang.return_value+1, required: 0},
                        {name: "v2", type: "Value", title: $Lang.return_value+2, required: 0}
                    ],
                    example: `
                    <template>
                        <p>{"cn"|iif}</p>
                        <p>{"cn"|iif:china}</p>
                        <p>{undefined|iif:japan}</p>
                        <p>{2==2|iif:a,b}</p>
                        <p>{1==2|iif:c,d}</p>
                    </template>
                `
                }
            ]
        }
    };
};

//获取详情
exports.getDetail = function(id){
    var ids = id.split(".");
    var cate = ids.shift();
    var name = ids.join(".");
    var o = this.getApiList()[cate].list.filter(x=>x.name==name)[0];
    o.cate = cate;
    return o;
};
