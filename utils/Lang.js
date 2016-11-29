/**
 * Created by likaituan on 16/10/19.
 */


module.exports = {
    getLang: function(langObj, lang){
        if(!langObj){
            return {};
        }

        var o = {};
        for(var k in langObj){
            if(k!="getLang"){
                o[k] = langObj[k][lang];
            }
        }
        return o;
    }
};