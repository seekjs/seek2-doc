/**
 * Created by likaituan on 15/8/9.
 */

define(function(req, exp){
    "use strict";
    var hl = req("sys.code.highlight");

    exp.onRender = function(){
        [].forEach.call(exp.ui.querySelectorAll("code"), function(element){
            var html = hl(element.innerHTML);
            var div = document.createElement("div");
            div.innerHTML = html;
            element.parentNode.insertBefore(div, element);
            element.style.display = "none";
        });
    };

});