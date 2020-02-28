const Generator = require("yeoman-generator");
const { pascalCase, snakeCase } = require("change-case");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }

  start() {
    this.log("Starting....");
  }

  writing() {
    const src = this.config.get("src") || "src";
    const root = this.config.get("root") || "."

    this.fs.copyTpl(
      this.templatePath("theme.ts.ejs"),
      this.destinationPath(src, "theme.ts")
    );

    this.fs.copyTpl(
      this.templatePath("types.d.ts.ejs"),
      this.destinationPath(src, "types.d.ts")
    );

    this.fs.copyTpl(
      this.templatePath(".eslint.json.ejs"),
      this.destinationPath(root, ".eslint.json")
    );

    this.fs.copyTpl(
      this.templatePath(".prettierrc.ejs"),
      this.destinationPath(root, ".prettierrc")
    );
  }
};
