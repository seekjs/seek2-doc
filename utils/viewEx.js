/**
 * Created by likaituan on 16/10/19.
 */

var app = require("sys.app");

//警告框
exports.alert = function(...args){
    app.plugin.dialog.alert.apply(app.plugin.dialog, args);
};

//确认框
exports.confirm = function(...args){
    app.plugin.dialog.confirm.apply(app.plugin.dialog, args);
};