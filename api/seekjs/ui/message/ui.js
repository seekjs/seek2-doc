define(function (req, exp) {
	"use strict";
    req("./ui.css");
    var $ = req("sys.query");
    var move = req('sys.move');
    var mask = req("sys.ui.mask");
	var ex = req("sys.ex");
	
	exp.defaults = {
		el: {
			box: ".sk-message",
			trigger: ".sk-message-trigger",
			ok: ".sk-message-ok",
			cancel: ".sk-message-cancel",
			content: ".sk-message-mask",
			mask: ".sk-message-mask"
		},
		usertime: 300,
		usemask: true
	};
	
    var Class = function (ops) {
    	ex.mergeObj(this, ops);
    	this.state = "close";
 		if(this.el.mask.length==0){
			this.el.mask = $('<div class="sk-message-mask"></div>').insertBefore(this.el.box);
 		}
 		var me = this;
 		this.el.trigger.find("i").click(function(){
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
					this.state = "close";
					callback && callback();
				}.bind(this));
			this.el.mask.fadeOut(this.usetime);
		},
		open: function (callback) {
			this.onOpen && this.onOpen();
			this.boxH = this.el.box.height();
			move(this.el.box[0])
				.duration(this.usetime)
				.y(-this.boxH)
				.end(function() {
					this.state = "open";
					callback && callback();
				}.bind(this));
			this.el.mask.fadeIn(this.usetime);
		}
	};
	
	//
    module.exports = function (ops) {
		return new Class(ops);
	};

});