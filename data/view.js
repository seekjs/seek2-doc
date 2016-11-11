/**
 * Created by likaituan on 15/8/10.
 */

var Lang = require("utils.Lang");

//语言配置
exports.lang = {
    view_description: {
        cn: "说明：P1=基本属性\nP2=View/子View之间的相互调用\nP3=URL地址相关",
        en: "Description: P1= basic attribute \nP2=View/ View sub \nP3=URL between the mutual call address related"
    },
    all_type: {
        cn: "任意类型",
        en: "Arbitrary type"
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
    }
};

//属性列表
exports.getApiList = function() {
    var lang = Lang.getLang(exports.lang, localStorage.lang);

    return {
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
                subcat: "basic",
                example: `
                <template>
                    <div class="main">
                        <div data-view="subview1"></div>
                        <div data-view="subview2"></div>
                    </div>
                </template>`
            },
            {
                name: "model",
                title: $Lang.model,
                des: "当设置model时, 模板的this指向model, 不然指向view本身",
                type: lang.all_type,
                cat: "property",
                subcat: "basic",
                example: `
                <template>
                    <div>
                        <p>姓名: {this.name}</p>
                        <p>性别: {this.sex}</p>
                    </div>
                </template>
                <script>
                exports.model = {name:"小明", sex:"男"};
                <\/script>`
            },
            {
                name: "box",
                title: lang.top_container,
                type: "Node",
                cat: "property",
                subcat: "basic"
            },
            {
                name: "ui",
                title: lang.top_container,
                type: "Node",
                cat: "property",
                subcat: "basic"
            },
            {
                name: "parent",
                title: lang.parent_view,
                type: "Object",
                cat: "property",
                subcat: "box"
            },
            {
                name: "root",
                title: lang.main_view,
                type: "Object",
                cat: "property",
                subcat: "box"
            },
            {
                name: "part",
                title: lang.part,
                type: "Object",
                cat: "property",
                subcat: "box"
            },
            //{name: "pop", title: "弹窗", type: "Object", cat: "property", subcat: "box"},
            {
                name: "from",
                title: lang.source,
                type: "String",
                example: "home",
                cat: "property",
                subcat: "url"
            },
            {
                name: "uri",
                title: lang.address,
                type: "String",
                example: "ad/160101/r1",
                cat: "property",
                subcat: "url"
            },
            {
                name: "path",
                title: lang.path,
                type: "String",
                example: "160101/r1",
                cat: "property",
                subcat: "url"
            },
            {
                name: "id",
                title: lang.view_id,
                type: "String",
                example: "r1",
                cat: "property",
                subcat: "url"
            },
            {
                name: "params",
                title: lang.param_object,
                type: "Object,Array",
                example: "{a:1,b:2}",
                subItems: [
                    {name: lang.double_mode, title: $Lang.return+$Lang.object},
                    {name: lang.single_mode, title: $Lang.return+$Lang.array}
                ],
                cat: "property",
                subcat: "url"
            },
            {
                name: "query",
                title: "查询参数",
                type: "Object",
                subItems: [
                    {name: lang.double_mode, title: $Lang.return+$Lang.object},
                    {name: lang.single_mode, title: $Lang.return+$Lang.array}
                ],
                cat: "property",
                subcat: "url",
                example: `
                uri:  #home?a=1&b=2
                query: {a:1,b:2}
                `
            },
            {
                name: "go",
                title: $Lang.jump,
                args: [
                    {name: "uri", type: "String", title: $Lang.title, required: 1}
                ],
                cat: "method",
                example: `
                exports.go("home");     //不带参数
                exports.go("list/cat/js");      //带参数
                exports.go("list/cat/js?key=seekjs");      //带查询参数
                `
            },
            {
                name: "back",
                title: lang.back_prev_page,
                cat: "method"
            },
            {
                name: "render",
                title: lang.refresh,
                cat: "method"
            },
            {
                name: "show",
                title: $Lang.show + "View",
                cat: "method"
            },
            {
                name: "hide",
                title: $Lang.hide + "View",
                cat: "method"
            },
            {
                name: "toggle",
                title: $Lang.show_or_hide + "View",
                cat: "method"
            },
            {
                name: "up2model",
                title: lang.up2model,
                cat: "method"
            },
            {
                name: "getHTML",
                title: lang.generate_html,
                cat: "method"
            },
            {
                name: "onInit",
                title: lang.ini_event,
                cat: "event"
            },
            {
                name: "onRenderBefore",
                title: lang.render_event,
                cat: "event"
            },
            {
                name: "onRender",
                title: lang.render_event,
                cat: "event"
            }
        ]
    };
};