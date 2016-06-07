/**
 @title 代码公用
 @author Li
 @date 2015.1.12
 */
define(function (req, exp) {
	"use strict";

    //去除空白,包括回车换行符和TAB缩进符 多个空格换成一个空格
    exp.clearWhite = function(srcCode){
        return srcCode.replace(/\r|\n|\t/g, "").replace(/ +/g, " ");
    };

	//去除注释
	exp.clearComment = function(srcCode){
        var mRe = /\/\*[\s\S]*?\*\//g;
        var sRe = /\s*\/\/[^\r\n]+$/mg;
		return srcCode.replace(mRe,"").replace(sRe,"");
	};

});