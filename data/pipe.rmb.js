/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    rmb_formatting: {
        cn: "人民币格式化",
        en: "RMB formatting"
    },
    rmb: {
        cn: "人民币",
        en: "RMB"
    }
};


exports.getApi = function(lang) {
    return {
        name: "rmb",
        title: lang.rmb_formatting,
        cat: "method",
        sub_cat: "number",
        args: [
            {name: "number", type: "Number", title: lang.rmb, required: 1}
        ],
        example: `<template>{88.8|rmb}</template>`
    };
};