/**
 * Created by likaituan on 15/8/9.
 */

define(function(req, exp){
    "use strict";
	var spring = req("sys.spring");
	
	exp.title = "折叠效果组件";
	
	exp.onRender = function(){
		spring({
			box:".ui-spring",
			tab:".ui-spring-tab",
			icon: ".ui-spring-icon",
			panel:".ui-spring-panel"	
		});
	};
});
