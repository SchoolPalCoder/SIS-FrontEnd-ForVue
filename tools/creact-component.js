const mkdirp = require("mkdirp");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const utils = require("./utils");

var indexJS = component => {
  return `
<template>

</template>

<script>
export default {
  name: "Student",
  data() {
    return {

    };
  },
  created: function() {

  }
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>

`;
};

let needLanguage = process.argv.find(arg => {
  console.warn(chalk.green(arg));
  return arg.toLowerCase() == "lang" || arg.toLowerCase() == "l";
});

var component = {
  name: process.argv[2].toLowerCase(),
  needLanguage: needLanguage ? true : false,
  get camelCaseName() {
    return utils.camelDashCaseTocamelCase(this.name);
  },
  noExample: noExample ? true : false
};

let dir = path.resolve(__dirname, "../fe/components");

mkdirp(path.join(dir, component.name), err => {
  if (err) {
    console.warn(chalk.red(err));
  } else {
    utils.writeFileOrWarn(path.join(dir, component.name, "index.html"), "");
    utils.writeFileOrWarn(
      path.join(dir, component.name, "index.js"),
      indexJS(component)
    );
    utils.writeFileOrWarn(path.join(dir, component.name, "index.css"), "");
  }
});
