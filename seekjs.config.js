/**
 * Created by likaituan on 16/11/28.
 */
var fs = require("fs");

module.exports = function(args){
    var modules = fs.readdirSync(`${__dirname}/data`).filter(x=>/^([\w\-]+\.){2,}js$/.test(x)).map(x=>`data.${x}`);
    return {
        extraModules: modules
    };
};