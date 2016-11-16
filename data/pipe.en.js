/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    turn_english_number: {
        cn: "转英文数字",
        en: "Turn English number"
    },
    number: {
        cn: "数字",
        en: "Number"
    }
};


exports.getApi = function(lang) {
    return {
        name: "en",
        title: lang.turn_english_number,
        cat: "method",
        sub_cat: "number",
        args: [
            {name: "num", type: "Number", title: lang.number, required: 1}
        ],
        example: `<template>{8|en}</template>`
    };
};