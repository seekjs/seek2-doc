/**
 * Created by likaituan on 15/8/10.
 */

var Lang = require("utils.Lang");

//语言配置
exports.lang = {
    take_few_from_begin: {
        cn: "取头几位",
        en: "Take the first few"
    },
    take_few_from_end: {
        cn: "取末几位",
        en: "Take the first few"
    },
    turn_capital_letter: {
        cn: "转大写字母",
        en: "Turn capital letters"
    },
    turn_lower_case_letter: {
        cn: "转小写字母",
        en: "Turn lower case letters"
    },
    turn_english_number: {
        cn: "转英文数字",
        en: "Turn English number"
    },
    turn_chinese_number: {
        cn: "转中文数字",
        en: "Turn Chinese figures"
    },
    turn_big_chinese_number: {
        cn: "转繁体中文数字",
        en: "Transfer traditional Chinese figures"
    },
    separator: {
        cn: "分隔符",
        en: "Separator"
    },
    date_format: {
        cn: "日期格式化",
        en: "DateFormatter"
    },
    formatting_style: {
        cn: "格式化样式",
        en: "Formatting styles"
    },
    rmb_formatting: {
        cn: "人民币格式化",
        en: "RMB formatting"
    },
    output_object_use_json_string: {
        cn: "以JSON字符串的形式输出对象",
        en: "Output object in the form of a JSON string"
    },
    same_vb_function: {
        cn: "参考VB同名函数,条件为真,返回v1,否则返回",
        en: "Reference VB function of the same name, the condition is true, return V1, otherwise return"
    },
    condition_judgment: {
        cn: "条件判断",
        en: "Condition judgment"
    }
};

//属性列表
exports.getApiList = function() {
    var lang = Lang.getLang(exports.lang, localStorage.lang);

    return  {
        title: $Lang.pipe,
        list: [
            //字符串
            {
                name: "begin",
                title: lang.take_few_from_begin,
                method: "method",
                args: [
                    {name: "str", type: "String", title: $Lang.string, required: 1}
                ],
                example: `<template>{"13601187438" | begin:3}}</template>`
            },
            {
                name: "end",
                title: lang.take_few_from_end,
                method: "method",
                args: [
                    {name: "str", type: "String", title: $Lang.string, required: 1}
                ],
                example: `<template>{"13601187438" | end:4}}</template>`
            },
            {
                name: "upper",
                title: lang.turn_capital_letter,
                method: "method",
                args: [
                    {name: "str", type: "String", title: $Lang.string, required: 1}
                ],
                example: `<template>{abc | upper}}</template>`
            },
            {
                name: "lower",
                title: lang.turn_lower_case_letter,
                method: "method",
                args: [
                    {name: "str", type: "String", title: $Lang.string, required: 1}
                ],
                example: `<template>{ABC | upper}}</template>`
            },

            //数字
            {
                name: "en",
                title: lang.turn_english_number,
                method: "method",
                args: [
                    {name: "num", type: "Number", title: $Lang.number, required: 1}
                ]
            },
            {
                name: "cn",
                title: lang.turn_chinese_number,
                method: "method",
                args: [
                    {name: "num", type: "Number", title: $Lang.number, required: 1}
                ]
            },
            {
                name: "big",
                title: lang.turn_big_chinese_number,
                method: "method",
                args: [
                    {name: "num", type: "Number", title: $Lang.number, required: 1}
                ]
            },
            {
                name: "sep",
                title: lang.separator,
                method: "method",
                args: [
                    {name: "num", type: "Number", title: $Lang.number, required: 1}
                ]
            },

            //日期
            {
                name: "date_format",
                title: lang.date_format,
                cat: "method",
                args: [
                    {name: "dateObj", type: "String", title: $Lang.date+$Lang.object, required: 1},
                    {name: "rule", type: "String", title: lang.formatting_style, required: 1}
                ]
            },
            {
                name: "rmb",
                title: lang.rmb_formatting,
                cat: "method",
                args: [
                    {name: "number", type: "Number", title: $Lang.rmb, required: 1}
                ]
            },

            //对象
            {
                name: "json",
                title: lang.output_object_use_json_string,
                cat: "method",
                args: [
                    {name: "jsonObj", type: "Object", title: "JSON"+$Lang.object, required: 1}
                ],
                example: `<template><%var jsonObj = {a:1,b:2,c:3}; %> { jsonObj | json}</template>`
            },

            //其他
            {
                name: "iif",
                title: $lang.condition_judgment,
                des: lang.same_vb_function,
                cat: "method",
                args: [
                    {name: "exp", type: "Boolean", title: $Lang.cond_exp, required: 1},
                    {name: "v1", type: "Value", title: $Lang.return_value+1, required: 0},
                    {name: "v2", type: "Value", title: $Lang.return_value+2, required: 0}
                ],
                example: `
                <template>
                    <p>{"cn"|iif}</p>
                    <p>{"cn"|iif:china}</p>
                    <p>{undefined|iif:japan}</p>
                    <p>{2==2|iif:a,b}</p>
                    <p>{1==2|iif:c,d}</p>
                </template>
            `
            }
        ]
    };
};
