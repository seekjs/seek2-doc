define(function (req, exp, mod) {
	"use strict";
    req("./ui.css");
    var $ = req("sys.jquery");
	var move = req('sys.move');

	var mergeObj = function(This, defaults, ops){
		defaults = defaults || {};
		ops = ops || {};
		This.el = {};
		[defaults, ops].forEach(function(obj){
			obj.el = obj.el || {};
	    	for(var k in obj){
	    		if(k=="el"){
	    			for(var name in obj.el){
	    				This.el[name] = $(obj.el[name]);
	    			}
	    		}else{
	    			This[k] = obj[k];    			
	    		}
	    	}		
		});
    	return This;
	};
	
	var defaults = {
		el: {
			box: ".ui-drawer",
			trigger: ".ui-drawer-trigger",
			ok: ".ui-drawer-ok",
			cancel: ".ui-drawer-cancel",
			content: ".ui-drawer-mask",
			mask: ".ui-drawer-mask"
		},
		usertime: 300,
		usemask: true,
		triggerClass:["ui-drawer-trigger","ui-drawer-trigger-selected"]	
	};
	
    var Class = function (ops) {
    	mergeObj(this, defaults, ops);
    	this.state = "close";
 		if(this.el.mask.length==0){
			this.el.mask = $('<div class="ui-drawer-mask"></div>').insertBefore(this.el.box);
 		}
 		var me = this;
 		this.el.trigger.click(function(){
 			me.state == "close" ? me.open() : me.close();
 		});
 		this.el.cancel.click(function(){
 			me.close();		
 		});
	};
	
	//加载更多列表
	Class.prototype = {
		close: function(callback) {
			move(this.el.box[0])
				.duration(this.usetime)
				.y(0)
				.end(function() {
					this.el.trigger.attr("class",this.triggerClass[0]);
					this.state = "close";
					callback && callback();
				}.bind(this));
			this.el.mask.fadeOut(this.usetime);
		},
		open: function (callback) {
			this.onOpen && this.onOpen();
			this.boxH = this.el.box.height() - 48;
			move(this.el.box[0])
				.duration(this.usetime)
				.y(-this.boxH)
				.end(function() {
					this.el.trigger.attr("class",this.triggerClass[1]);
					this.state = "open";
					callback && callback();
				}.bind(this));
			this.el.mask.fadeIn(this.usetime);
		}
	};
	
	//
    mod.exports = function (ops) {
		return new Class(ops);
	};

});