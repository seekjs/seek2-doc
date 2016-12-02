/**
 * Created by likaituan on 02/12/2016.
 */

var ajax = require("sys.ajax");

exports.countPerson = function(){
    ajax({
        url: "/service/countPerson"
    });
};