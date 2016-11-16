/**
 * Created by likaituan on 15/8/10.
 */

var Lang = require("utils.Lang");
var json = require("data.list.json");

exports.lang = {
    view_description: {
        cn: "说明：P1=基本属性\nP2=View/子View之间的相互调用\nP3=URL地址相关",
        en: "Description: P1= basic attribute \nP2=View/ View sub \nP3=URL between the mutual call address related"
    }
};

//属性列表
exports.getApiList = function() {
    var lang = Lang.getLang(exports.lang, localStorage.lang);

    return {
        app: {
            list: json.app
        },
        view: {
            des: lang.view_description,
            list: json.view
        },
        template: {
            list: json.template
        },
        pipe: {
            list: json.pipe
        }
    };
};

//获取详情
exports.getDetail = function(id){
    var item = require(`data.${id}.js`);
    var lang = Lang.getLang(item.lang, localStorage.lang);
    return item.getApi(lang);
};