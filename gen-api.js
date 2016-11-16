var fs = require("fs");
var log = console.log;
var keyList = require("./data/list.key.json");

var json = {};

for(var type in keyList) {
    json[type] = json[type] || [];
    keyList[type].split(",").forEach(name=> {
        var {cat,sub_cat} = require(`./data/${type}.${name}.js`).getApi({});
        json[type].push({name, cat, sub_cat});
    });
};

json = JSON.stringify(json,null,4);
fs.writeFileSync("./data/list.json", json);
