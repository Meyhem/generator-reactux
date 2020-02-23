const Generator = require("yeoman-generator");
const { pascalCase, constantCase } = require("change-case");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("featureName", { required: true });
    this.log("Initializing...");
  }

  start() {
    this.log("Starting....");
  }

  writing() {
    const featureFolder = this.config.get("featureFolder") || "src/features";

    const options = {
      featureName: this.options.featureName
    };

    this.fs.copyTpl(
      this.templatePath("actions.ts.ejs"),
      this.destinationPath(featureFolder, options.featureName, "actions.ts"),
      {
        ...options,
        constantCase
      }
    );

    this.fs.copyTpl(
      this.templatePath("index.ts.ejs"),
      this.destinationPath(featureFolder, options.featureName, "index.ts"),
      { ...options }
    );

    this.fs.copyTpl(
      this.templatePath("reducer.ts.ejs"),
      this.destinationPath(featureFolder, options.featureName, "reducer.ts"),
      {
        ...options,
        pascalCase
      }
    );

    this.fs.copyTpl(
      this.templatePath("saga.ts.ejs"),
      this.destinationPath(featureFolder, options.featureName, "saga.ts"),
      { ...options }
    );

    this.fs.copyTpl(
      this.templatePath("selectors.ts.ejs"),
      this.destinationPath(featureFolder, options.featureName, "selectors.ts"),
      { ...options }
    );
  }
};
