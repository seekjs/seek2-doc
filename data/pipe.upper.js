/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    turn_capital_letter: {
        cn: "转大写字母",
        en: "Turn capital letters"
    },
    string: {
        cn: "字符串",
        en: "String"
    }
};


exports.getApi = function(lang) {
    return {
        name: "upper",
        title: lang.turn_capital_letter,
        cat: "method",
        sub_cat: "string",
        args: [
            {name: "str", type: "String", title: lang.string, required: 1}
        ],
        example: `<template>{abc | upper}}</template>`
    };
};