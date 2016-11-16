/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    condition_judgment: {
        cn: "条件判断",
        en: "Condition judgment"
    },
    same_vb_function: {
        cn: "参考VB同名函数,条件为真,返回v1,否则返回",
        en: "Reference VB function of the same name, the condition is true, return V1, otherwise return"
    },
    cond_exp: {
        cn: "条件表达式",
        en: "Conditional expression"
    },
    return_value:{
        cn: "返回值",
        en: "Return value"
    }
};


exports.getApi = function(lang) {
    return {
        name: "iif",
        title: lang.condition_judgment,
        des: lang.same_vb_function,
        cat: "method",
        sub_cat: "other",
        args: [
            {name: "exp", type: "Boolean", title: lang.cond_exp, required: 1},
            {name: "v1", type: "Value", title: lang.return_value+1, required: 0},
            {name: "v2", type: "Value", title: lang.return_value+2, required: 0}
        ],
        example: `
        <template>
            <p>{"cn"|iif}</p>
            <p>{"cn"|iif:china}</p>
            <p>{undefined|iif:japan}</p>
            <p>{2==2|iif:a,b}</p>
            <p>{1==2|iif:c,d}</p>
        </template>`
    };
};