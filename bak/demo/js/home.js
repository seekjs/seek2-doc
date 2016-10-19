/**
 * Created by likaituan on 15/8/9.
 */

define(function(req, exp){
    "use strict";
	var app = req("sys.app");
	var plugin = app.plugin;

    exp.title = "首页";
    exp.data = req("plugin.data");
	
	exp.showMask = function(){
		plugin.mask.showMask({loading:true});
		setTimeout(function(){
			plugin.mask.hide();
		},3000);
	};

	exp.showText = function(){
		plugin.dialog.alert("Hello Wolrd!");
	};

});
