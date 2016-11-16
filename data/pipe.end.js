/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    take_few_from_end: {
        cn: "取末几位",
        en: "Take the first few"
    },
    string: {
        cn: "字符串",
        en: "String"
    }
};


exports.getApi = function(lang) {
    return {
        name: "end",
        title: lang.take_few_from_end,
        cat: "method",
        sub_cat: "string",
        args: [
            {name: "str", type: "String", title: lang.string, required: 1}
        ],
        example: `<template>{"13601187438" | end:4}}</template>`
    };
};