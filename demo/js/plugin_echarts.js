define(function(req, exp){
	"use strict";
	var ec = req("echarts");
	var bar = req("echarts/chart/bar");
	var line = req("echarts/chart/line");
	var pie = req("echarts/chart/pie");

	exp.title = "Echarts图表";
	
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
		/*
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
		*/

		//基于准备好的dom，初始化echarts图表 
		varmyChart=ec.init(document.querySelector(".bar"));
												  
		varoption={                     
			tooltip:{                                               
				show:true                                                                                    
			},                                                                                                                         
			legend:{                                                                             
				data:['销量']                                                                                                            
			},                                                                                                                                                    
			xAxis:[{                                                                                                                                                    
				type:'category',
				data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			}],                     
			yAxis:[{                                                  
				type:'value'                                                                         
			}],                                                                                                                                       
			series:[{   
				"name":"销量",
				"type":"bar",                                                                                            
				"data":[5,20,40,10,10,20]
			}]					
		};
		
		//为echarts对象加载数据 
		myChart.setOption(option); 
	};
});
