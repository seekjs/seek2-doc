/**
 * Created by likaituan on 02/12/2016.
 */

var ajax = require("sys.ajax");

exports.addVisitor = function(){
    ajax({
        url: "/service/addVisitor"
    });
};

exports.getVisitorList = function(callback){
    ajax({
        url: "/service/getVisitorList",
        dataType: 'json',
        success: callback
    });
};