/**
 * Created by likaituan on 15/8/9.
 */

define(function(req, exp){
    "use strict";
    var compress = req("sys.code.compress");
    var format = req("sys.code.format");
    var highlight = req('sys.code.highlight');

    exp.model = exp;
    exp.srcCode = "";
    exp.codeType = "js";
    exp.code = "";
    exp.title = "seeks - 代码压缩格式化高亮工具";

    exp.onInit = function(done){
        seekjs.loadText("controllers/code.js", function(rs){
            exp.srcCode = rs.text;
            done();
        });
    };

    //压缩
    exp.compress = function(){
        exp.code = compress(exp.srcCode);
        exp.panel.render();
    };

    //格式化
    exp.format = function(){
        exp.code = format(exp.srcCode);
        exp.panel.render();
    };

    //高亮
    exp.highlight = function(){
        exp.code = highlight(exp.srcCode);
        exp.panel.render();
    };

    //压缩+高亮
    exp.compress_and_highlight = function(){
        exp.code = highlight(compress(exp.srcCode));
        exp.panel.render();
    };

    //格式化+高亮
    exp.format_and_highlight = function(){
        exp.code = highlight(format(exp.srcCode));
        exp.panel.render();
    };

    //运行代码
    exp.runCode = function(){
        if(exp.codeType=="js"){
            exp.code = new Function(exp.srcCode)();
            exp.panel.render();
        }
        else if(exp.codeType=="html"){
            var jscode = [];
            var srcCode = exp.srcCode.replace(/<script.*?>([\s\S]+?)<\/script>/ig, function(_,code){
                jscode.push(code);
                return "";
            });
            exp.code = srcCode;
            jscode.forEach(function(code){
                new Function(code)();
            });
            exp.panel.render();
        }
        else if(exp.codeType=="css"){
            dialog.alert("不能单独运行CSS");
        }
    };

    //保存代码
    exp.saveCode = function(){
        alert(888);
    };

    //检查键盘
    exp.chkKey = function(context) {
        if (context.event.keyCode == 9) {
            context.event.preventDefault();

            var range, node;
            if (!context.element.hasfocus) {
                context.element.focus();
            }
            if (window.getSelection && window.getSelection().getRangeAt) {
                range = window.getSelection().getRangeAt(0);
                range.collapse(false);
                node = range.createContextualFragment("text");
                var c = node.lastChild;
                range.insertNode(node);
                if (c) {
                    range.setEndAfter(c);
                    range.setStartAfter(c)
                }
                var j = window.getSelection();
                j.removeAllRanges();
                j.addRange(range);
            }
        }
    }

});