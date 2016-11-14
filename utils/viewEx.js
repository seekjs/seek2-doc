/**
 * Created by likaituan on 16/10/19.
 */

var app = require("sys.app");

//数字转字母
exports.alert = function(text){
    return app.plugin.dialog.alert(text);
};