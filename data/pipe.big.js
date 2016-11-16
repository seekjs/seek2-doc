/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    turn_big_chinese_number: {
        cn: "转繁体中文数字",
        en: "Transfer traditional Chinese figures"
    },
    number: {
        cn: "数字",
        en: "Number"
    }
};


exports.getApi = function(lang) {
    return {
        name: "big",
        title: lang.turn_big_chinese_number,
        cat: "method",
        sub_cat: "number",
        args: [
            {name: "num", type: "Number", title: lang.number, required: 1}
        ],
        example: `<template>{8|big}</template>`
    };
};