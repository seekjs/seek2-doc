/**
 * Created by likaituan on 16/10/19.
 */

exports.code = function(code){
    return code.replace(/</g,"&lt;").replace(/>/g,"&gt;");
};