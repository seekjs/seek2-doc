var ajax = require("ajax");

exports.onInit = function (done) {
	ajax.getVisitorList(data => {
		exports.list = data;
		done();
	});
};