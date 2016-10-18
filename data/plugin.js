/**
 * Created by likaituan on 15/8/10.
 */

define(function (req, exp) {
    "use strict";

    //插件列表
    exp.pluginList = [
        {page: "plugin_swipe", name: "sys.tool.swipe", title: "滑动组件"},
        {page: "plugin_move", name: "sys.tool.move", title: "动画插件"},
        {page: "plugin_dialog", name: "sys.ui.dialog", title: "弹窗插件"},
        {page: "plugin_mask", name: "sys.ui.mask", title: "遮罩层"},
        {page: "plugin_datePicker", name: "sys.ui.datePicker", title: "日期选择框"}
    ];

});