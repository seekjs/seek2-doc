 exports.$lang = {
    api_reference: {
        cn: "API参考",
        en: "API Reference"
    },
    api_des:{
        cn:"注",
        en:"Notes"
    }
};
 exports.onInit = function() {
    exports.apiList = require("data.api").getApiList();
};
