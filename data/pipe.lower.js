/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    turn_lower_case_letter: {
        cn: "转小写字母",
        en: "Turn lower case letters"
    },
    string: {
        cn: "字符串",
        en: "String"
    }
};


exports.getApi = function(lang) {
    return {
        name: "lower",
        title: lang.turn_lower_case_letter,
        cat: "method",
        sub_cat: "string",
        args: [
            {name: "str", type: "String", title: lang.string, required: 1}
        ],
        example: `<template>{ABC | upper}}</template>`
    };
};