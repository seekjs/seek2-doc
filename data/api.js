/**
 * Created by likaituan on 15/8/10.
 */

var Lang = require("utils.Lang");
var app = require("data.app");
var view = require("data.view");
var template = require("data.template");
var pipe = require("data.pipe");

//属性列表
exports.getApiList = function() {
    //var lang = Lang.getLang(exports.lang, localStorage.lang);
    return {
        app: app.getApiList(),
        view: view.getApiList(),
        template: template.getApiList(),
        pipe: pipe.getApiList()
    };
};

//获取详情
exports.getDetail = function(id){
    var ids = id.split(".");
    var cate = ids.shift();
    var name = ids.join(".");
    var o = this.getApiList()[cate].list.filter(x=>x.name==name)[0];
    o.cate = cate;
    return o;
};
