define(function (req, exp) {
	"use strict";
	req("./ui.css");
    var $ = req("sys.jquery");

	//默认值
	var defaults = {
		el:{
    		box: ".sk-tabPanel",
    		tab: ".sk-tab",
    		panel: ".sk-panel"
		},
		index: 0,							//初始位置
		tabSelected: "sk-tab-selected",		//选中的样式
		onTabClick: null
    };

	exp.Class = function (ops) {
		var me = this;
		seekjs.mergeObj(this, defaults, ops, $);
		this.tabs = this.el.tab.children();
		this.panels = this.el.panel.children();
		this.tabs.unbind("click").click(function () {
			me.chgIndex($(this).index());
		});
		this.chgIndex(this.index);
    };

	//切换
	exp.chgIndex = function (index) {
		this.tabs.eq(this.index).removeClass(this.tabSelected);
		this.tabs.eq(index).addClass(this.tabSelected);
		this.panels.eq(this.index).css("display","none");
		this.panels.eq(index).css("display", "block");
		this.index = index;
    };

});