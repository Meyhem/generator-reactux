const Generator = require("yeoman-generator");
const { pascalCase, constantCase } = require("change-case");

const required = x => !!x;

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }

  start() {
    this.log("Starting....");
  }

  writing() {
    const featureFolder = this.config.get("featureFolder") || "src/features";

    this.fs.copyTpl(
      this.templatePath("store.ts.ejs"),
      this.destinationPath(featureFolder, "store.ts")
    );

    this.fs.copyTpl(
      this.templatePath("types.ts.ejs"),
      this.destinationPath(featureFolder, "types.ts")
    );

    this.fs.copyTpl(
      this.templatePath("rootReducer.ts.ejs"),
      this.destinationPath(featureFolder, "rootReducer.ts")
    );

    this.fs.copyTpl(
      this.templatePath("rootSaga.ts.ejs"),
      this.destinationPath(featureFolder, "rootSaga.ts")
    );
  }
};
