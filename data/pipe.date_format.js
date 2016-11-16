/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    date_format: {
        cn: "日期格式化",
        en: "DateFormatter"
    },
    formatting_style: {
        cn: "格式化样式",
        en: "Formatting styles"
    },
    date_object: {
        cn: "日期对象",
        en: "Date Object"
    }
};


exports.getApi = function(lang) {
    return {
        name: "date_format",
        title: lang.date_format,
        cat: "method",
        sub_cat: "date",
        args: [
            {name: "dateObj", type: "String", title: lang.date_object, required: 1},
            {name: "rule", type: "String", title: lang.formatting_style, required: 1}
        ],
        example: `<template>{new Date()|date_format:yyyy年M月dd日 hh:mm:ss}</template>`
    };
};