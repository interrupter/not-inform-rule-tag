const InformRuleTag = require("./src/index.js");
module.exports = {
    name: "not-inform-rule-tag",
    paths: {
        controllers: __dirname + "/src/controllers",
    },
    getClass() {
        return InformRuleTag;
    },
};
