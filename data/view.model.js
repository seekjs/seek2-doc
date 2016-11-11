/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    model_des: {
        cn: "当设置model时, 模板的this指向model, 不然指向view本身",
        en: "When setting model, the template of the this points to model, or point to the view itself"
    },
    all_type: {
        cn: "任意类型",
        en: "Arbitrary type"
    }
};

exports.getApi = (lang) => {
    return {
        name: "model",
        title: $Lang.model,
        des: lang.model_des,
        type: lang.all_type,
        cat: "property",
        sub_cat: "basic",
        example: `
        <template>
            <div>
                <p>姓名: {this.name}</p>
                <p>性别: {this.sex}</p>
            </div>
        </template>
        <script>
        exports.model = {name:"小明", sex:"男"};
        <\/script>`
    };
};