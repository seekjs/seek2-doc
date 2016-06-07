define(function (req, exp) {
	"use strict";

	var ua = navigator.userAgent;

	exp.os = "window";

	if (/ios/i.test(ua)) {
		exp.os = "ios";
		exp.ios = {
			version:0
		}
	}
	if (/android/i.test(ua)) {
		exp.os = "android";
		exp.android = {
			version:0
		}
	}

    exp.mediaMode = screen.width>screen.height ? "pad" : "phone";

});