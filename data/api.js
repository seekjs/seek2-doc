/**
 * Created by likaituan on 15/8/10.
 */

var Lang = require("utils.Lang");

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
            list: []
        },
        view: {
            des: lang.view_description,
            list: ["type", "model", "box", "ui"]
        },
        template: {
            list: []
        },
        pipe: {
            list: []
        }
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