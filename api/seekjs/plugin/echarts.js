define(function(req,exp){
	"use strict";
	var ec = req("lib.echarts");

	//柱图
	exp.bar = function(ops){
		ops.type = "bar";
		this.draw(ops);		
	};

	//线图
	exp.line = function(ops){
		ops.type = "line";
		this.draw(ops);
	};

	//饼图
	exp.pie = function(ops){
		ops.type = "pie";
		this.draw(ops);
	};
	
	//绘图
	exp.draw = function(ops){
	
	};

});
