define(function(req, exp){
	"use strict";
	var bar = req("sys.tool.chart.bar");
	var line = req("sys.tool.chart.line");
	var pie = req("sys.tool.chart.pie");

	exp.title = "BI图表";
	
	exp.srcData = {
		title: "移动用户统计",
		data:[
			{province:"北京", count:111},
			{province:"上海", count:222},
			{province:"广东", count:555},
			{province:"广西", count:444},
			{province:"江西", count:333},
		]
	};

	exp.onRender = function(){
		bar.draw({
			box: ".bar",
			data: exp.srcData	
		});
		line.draw({
			box: ".line",
			data: exp.srcData	
		});
		pie.draw({
			box: ".pie",
			data: exp.srcData	
		});
	};
});
