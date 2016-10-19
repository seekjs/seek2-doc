/**
 * Created by likaituan on 15/8/10.
 */

    //属性列表
    exports.propertyList = [

        { cat:"基本属性", color: "red"},

        { name: "type", title: "view类型", type:"String", example:"main" },
        { name: "title", title: "标题", type:"String", example:"欢迎光临" },
        { name: "model", title: "模型", type:"任意类型", example:"{a:1,b:2}" },
        { name: "templateHTML", title: "模板代码", type:"String", example:'<p>{this.name}</p>' },
        { name: "ui", title: "最顶层容器", type:"Node" },
        { name: "$ui", title: "最顶层容器", type:"Jquery" },

        { cat:"View/子View之间的相互调用", color: "blue"},

        { name: "parent", title: "父级View", type:"Object" },
        { name: "root", title: "主View(最顶层View)", type:"Object" },
        { name: "[subviewname]", title: "子View,直接写view id", type:"Object"  },
        { name: "part", title: "局部", type:"Object"  },
        { name: "pop", title: "弹窗", type:"Object"  },

        { cat:"URL地址相关", color: "green"},

        { name: "from", title: "来源", type:"String", example:"home" },
        { name: "uri", title: "地址", type:"String", example:"ad/160101/r1" },
        { name: "path", title: "路径", type:"String", example:"160101/r1" },
        { name: "id", title: "view的唯一ID", type:"String", example:"r1" },
        { name: "params", title: "参数对象", type:"Object,Array", example:"{a:1,b:2}",
            subItems: [
                { name: "double模式(默认)", title: "返回对象" },
                { name: "single模式", title: "返回数组"}
            ]
        },
        { name: "paramType", title: "参数类型", type:"String", example:"double" }

    ];

    //方法列表
    exports.methodList = [
        {
            name: "go",
            title: "跳转",
            args:[
                {name:"uri", type:"String", title:"标题",required:1}
            ]
        },
        { name: "back", title: "回退" },
        { name: "show", title: "显示View" },
        { name: "hide", title: "隐藏View" },
        { name: "toggle", title: "显示或隐藏" },
        { name: "up2model", title: "更新到模型" },
        { name: "getHTML", title: "生成HTML" },
        { name: "getTemplate", title: "生成模板代码" },
        { name: "render", title: "刷新页面" }
    ];


    //事件列表
    exports.eventList = [
        {name: "onInit", title: "初始化事件"},
        {name: "onRender", title: "View加载完成或刷新触发的事件,相当于window.onload"}
    ];
