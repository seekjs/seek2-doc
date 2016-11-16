/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    output_object_use_json_string: {
        cn: "以JSON字符串的形式输出对象",
        en: "Output object in the form of a JSON string"
    },
    object: {
        cn: "对象",
        en: "Object"
    }
};


exports.getApi = function(lang) {
    return {
        name: "json",
        title: lang.output_object_use_json_string,
        cat: "method",
        sub_cat: "object",
        args: [
            {name: "jsonObj", type: "Object", title: "JSON"+lang.object, required: 1}
        ],
        example: `<template><%var jsonObj = {a:1,b:2,c:3}; %> { jsonObj | json}</template>`
    };
};