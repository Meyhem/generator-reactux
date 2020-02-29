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
    const root = this.config.get("root") || ".";
    const src = this.config.get("src") || "src";
    const features = this.config.get("features") || "src/features";

    this.fs.copyTpl(
      this.templatePath("theme.ts.ejs"),
      this.destinationPath(src, "theme.ts")
    );

    this.fs.copyTpl(
      this.templatePath("root.tsx.ejs"),
      this.destinationPath(src, "root.tsx")
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

    this.fs.copyTpl(
      this.templatePath(".editorconfig.ejs"),
      this.destinationPath(root, ".editorconfig")
    );

    this.fs.copyTpl(
      this.templatePath("store.ts.ejs"),
      this.destinationPath(features, "store.ts")
    );

    this.fs.copyTpl(
      this.templatePath("types.ts.ejs"),
      this.destinationPath(features, "types.ts")
    );

    this.fs.copyTpl(
      this.templatePath("rootReducer.ts.ejs"),
      this.destinationPath(features, "rootReducer.ts")
    );

    this.fs.copyTpl(
      this.templatePath("rootSaga.ts.ejs"),
      this.destinationPath(features, "rootSaga.ts")
    );

    this.fs.copyTpl(
      this.templatePath("language.ts.ejs"),
      this.destinationPath(src, "language.ts")
    );

    this.fs.copyTpl(
      this.templatePath("i18n.main.ts.ejs"),
      this.destinationPath(src, "i18n", "en", "main.ts")
    );

    this.fs.copyTpl(
      this.templatePath("i18n.mainindex.ts.ejs"),
      this.destinationPath(src, "i18n", "en", "index.ts")
    );

    this.fs.copyTpl(
      this.templatePath("i18n.index.ts.ejs"),
      this.destinationPath(src, "i18n", "index.ts")
    );
  }
};
