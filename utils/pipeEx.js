/**
 * Created by likaituan on 16/10/19.
 */

exports.code = function(code){
    return code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,'<br>').replace(/\s/g,"&nbsp;");
};

//数字转字母
exports.letter = function(num){
    return String.fromCharCode(+num+64);
};