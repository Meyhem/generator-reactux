const Generator = require("yeoman-generator");
const {
  pascalCase,
  constantCase,
  camelCase,
  paramCase
} = require("change-case");

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
    const features = this.config.get("features") || "src/features";

    const options = {
      featureFolderName: paramCase(this.options.featureName),
      featureName: camelCase(this.options.featureName),
      constantCase,
      pascalCase
    };

    this.fs.copyTpl(
      this.templatePath("actions.ts.ejs"),
      this.destinationPath(features, options.featureFolderName, "actions.ts"),
      options
    );

    this.fs.copyTpl(
      this.templatePath("index.ts.ejs"),
      this.destinationPath(features, options.featureFolderName, "index.ts"),
      options
    );

    this.fs.copyTpl(
      this.templatePath("reducer.ts.ejs"),
      this.destinationPath(features, options.featureFolderName, "reducer.ts"),
      options
    );

    this.fs.copyTpl(
      this.templatePath("saga.ts.ejs"),
      this.destinationPath(features, options.featureFolderName, "saga.ts"),
      options
    );

    this.fs.copyTpl(
      this.templatePath("selectors.ts.ejs"),
      this.destinationPath(features, options.featureFolderName, "selectors.ts"),
      options
    );

    this.fs.copyTpl(
      this.templatePath("reducer.spec.ts.ejs"),
      this.destinationPath(
        features,
        options.featureFolderName,
        "__test__",
        "reducer.spec.ts"
      ),
      options
    );
  }
};
