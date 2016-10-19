/**
 * Created by likaituan on 15/8/9.
 */

seekjs.config({
    ns:{
        view: seekjs.resolve("./js/"),
		tpl: seekjs.resolve("./templates/"),
        sty: seekjs.resolve("./styles/"),
		plugin: seekjs.resolve("./plugins/")
    },
	paths:{
		echarts: seekjs.resolve("../../libs/echarts#"),
		zrender: seekjs.resolve("../../libs/zrender#")
	},
	alias:{
		echarts: seekjs.resolve("../../libs/echarts/echarts"),
		zrender: seekjs.resolve("../../libs/zrender/zrender")
	}
});

define(function(req, exp, mod){
    "use strict";
    req("sty.main.css");
    req("sty.ui.css");

    var app = req("sys.app");

    app.setPath({
        controller: "view.",
        view: "tpl.",
        style: "sty."
    });

    app.useAnimate = true;
	
	app.usePlugin("sys.ui.mask");
	app.usePlugin("sys.ui.dialog");

    app.init("home");
});
