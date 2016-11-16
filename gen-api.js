var fs = require("fs");
var log = console.log;

var json = {};
var type;
var name;
fs.readdirSync("./data").forEach(x=>{
    if(/^(\w+)\.(\w+)\.js$/.test(x)){
        [type, name] = [RegExp.$1, RegExp.$2];
        var {cat,sub_cat} = require(`./data/${x}`).getApi({});
        json[type] = json[type] || [];
        json[type].push({name,cat,sub_cat});
    }
});

json = JSON.stringify(json,null,4);
fs.writeFileSync("./data/list.json", json);
