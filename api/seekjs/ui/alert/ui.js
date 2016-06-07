//排序表格
define(function (req, exp) {
	"use strict";
    var app = req("sys.app");

	var model = {
        title: "提示",
        text: "内容",
        okText: "确定",
        cancelText: "取消",
        hasClose: false,
        hasOk: true,
        hasCancel : false,
        timeout:0
    };

    var obj = req("sys.object");

    exp.timer = null;

    //点击确定按钮
    exp.pickOk = function(context){
        window.clearTimeout(exp.timer);
        exp.hide();
        exp.model.onOk && exp.model.onOk();
    };

    //点击取消按钮
    exp.pickCancel = function(context){
        exp.hide();
        exp.model.onCancel && exp.model.onCancel();
    };

    //点击其他按钮
    exp.pickButton = function(context,index){
        exp.hide();
        exp.model.onButton && exp.model.onButton(index);
    };



    //警告框
    exp.alert = function(view, ops){
        if(typeof ops=="string") {
            ops = {text: ops};
            for(var i=2; i<arguments.length; i++){
               var v = arguments[i];
               typeof v == "number" && (ops.timeout = v);
               typeof v == "function" && (ops.onOk = v);
            }
        }
        ops.hasCancel = false;
        exp.setOps(view, ops);
    };

    //确认框
    exp.confirm = function(view, ops){
        if(typeof ops=="string"){
            ops = {
                text: arguments[1],
                onOk: arguments[2],
                onCancel: arguments[3]
            };
        }
        ops.hasCancel = true;
        exp.setOps(view, ops);
    };

    //提示框
    exp.tip = function(view, text){

    };

    exp.setOps = function(view, ops){
        exp.model = obj.merge(Object.create(model), ops);
        app.addSubView(view, "sys.alert");
        if(exp.model.timeout>0){
            exp.timer = window.setTimeout(exp.pickOk, exp.model.timeout);
        }
    };


});