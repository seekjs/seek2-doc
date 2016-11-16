/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    turn_chinese_number: {
        cn: "转中文数字",
        en: "Turn Chinese figures"
    },
    number: {
        cn: "数字",
        en: "Number"
    }
};


exports.getApi = function(lang) {
    return {
        name: "cn",
        title: lang.turn_chinese_number,
        cat: "method",
        sub_cat: "number",
        args: [
            {name: "num", type: "Number", title: lang.number, required: 1}
        ],
        example: `<template>{8|cn}</template>`
    };
};