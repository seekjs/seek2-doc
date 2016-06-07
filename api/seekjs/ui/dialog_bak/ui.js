//add by Li at 2014.9.9
define(function (req, exp) {
	"use strict";
	req("./ui.css");
	var htm = req("./ui.html");
	var $ = req("sys.query");
	var drag = req("sys.drag");
	var event = req("sys.event");
	var obj = req("sys.object");
	var fun = req("sys.template").compile(htm);

	var defaults = {
		el: {
			box: "body",						//盒子
			ui: ".sk-dialog",					//容器
			trigger: ".sk-dialog-trigger",		//触发器
			title: ".sk-dialog-title",			//标题对象
			content: ".sk-dialog-content",		//内容对象
			ok: ".sk-dialog-ok",				//确定按钮
			cancel: ".sk-dialog-cancel",		//取消按钮
			close: ".sk-dialog-close"			//关闭按钮
		},
		btn: {					//显示的按钮
			"ok": "确定"
		},
		title: "",				//标题
		content: "",			//内容
		text: "",				//内容
		url: "",				//链接地址
		width: 300,				//宽度
		height: 150,			//高度
		onOK: null,				//确定事件
		onCancel: null,			//取消事件
		onClose: null,			//关闭事件
		isdrag: false,			//是否拖动
		ismask: true,			//是否遮罩
		isbar: true,			//是否有标题栏
		pos: "center-middle",	//弹窗位置
		state: "close",			//状态
		effect: "none"			//动画效果
	};


	exp.Class = function (ops){
		//seekjs.mergeObj(this, defaults, ops, $);
		if(this.el.ui.length==0){
			var htm = fun(this);
			this.el.ui = $(htm);
			this.el.ui.appendTo(this.el.box);
			//seekjs.mergeObj(this, defaults, ops, $);
		}
		this.el.trigger.length > 0 && this.el.trigger.unbind("click").click(this.open.bind(this));
		event.parse(this.el.ui[0], this);

		this.setPos(this.pos, this.width, this.height);
		this.isdrag && !/MSIE/.test(navigator.userAgent) && drag(this.el.ui, this.el.title);
		this.state == "open" && this.open();
	};


	//点击按钮事件
	exp.pickButton = function (btnName) {
		this.close(btnName == "ok" ? 1 : 0);
	};


	//打开
	exp.open = function () {
		if (this.effect) {
			this.el.ui.fadeIn();
		} else {
			this.el.ui.show();
		}
		return this;
	};

	//关闭
	exp.close = function (isok) {
		var me = this;
		if (this.effect) {
			this.el.ui.fadeOut("normal", function () {
				me.onClose && me.onClose(me.el.ui);
				isok && me.onOk && me.onOk(me.el.ui);
			});
		} else {
			this.el.ui.hide();
			this.onClose && this.onClose(this.el.ui);
			isok && this.onOk && this.onOk(this.el.ui);
		}
		return this;
	};

	//设置位置
	exp.setPos = function (pos, w, h) {
		pos = pos || "center-middle";
		var cw = this.el.box.width();
		var ch = this.el.box.height();

		var x, y;
		if (/left/.test(pos)) {
			x = 0;
		} else if (/center/.test(pos)) {
			x = cw / 2 - w / 2;
		} else if (/right/.test(pos)) {
			x = cw - w;
		}
		if (/top/.test(pos)) {
			y = 0;
		} else if (/middle/.test(pos)) {
			y = ch / 2 - h / 2;
		} else if (/bottom/.test(pos)) {
			y = ch - h;
		}
		this.el.ui.css("left", x + "px").css("top", y + "px");
		return this;
	};

	//设置内容
	exp.setContent = function (htm) {
		this.el.content.html(htm);
		return this;
	};

	//增加内容
	exp.append = function (htm) {
		this.el.content.append('<div>' + htm + '</div>');
	};


	//phonegap原生alert
	var _alert = function (ops) {
		var text = ops.content||ops.text
		if (top.navigator.notification) {
			top.navigator.notification.alert(text, ops.onOk || null, ops.title, ops.btn.ok);
		} else {
			alert(text);
		}
	};

	//phonegap原生confirm
	var _confirm = function (ops) {
		var text = ops.content || ops.text;
		var fun = ops.onOk || null;
		if (top.navigator.notification) {
			top.navigator.notification.confirm(text, function (n) {n==1&&fun()}, ops.title, ops.btn.ok +","+ops.btn.cancel);
		} else {
			window.confirm(text) && fun();
		}
	};

	var dialog = function (ops) {
		return new Class(ops);
	};

	//警告框
	dialog.alert = function (msg) {
		var ops = msg;
		if (typeof msg == "string") {
			ops = { content: msg };
		}
		ops.title = ops.title || "温馨提示";
		ops.width = ops.width || 300;
		ops.height = ops.height || 200;
		ops.btn = ops.btn || {};
		ops.btn.ok = ops.btn.ok || "确定";
		ops.state = "open";
		//return _alert(ops);
		return dialog(ops);
	};



	//确认框
	dialog.confirm = function (msg) {
		var ops = msg;
		if (typeof msg == "string") {
			ops = { content: msg };
		}
		ops.title = ops.title || "温馨提示";
		ops.width = ops.width || 300;
		ops.height = ops.height || 200;
		ops.btn = ops.btn || {};
		ops.btn.ok = ops.btn.ok || "确定";
		ops.btn.cancel = ops.cancel || "取消";
		ops.state = "open";
		//return _confirm(ops);
		return dialog(ops);
	};

});