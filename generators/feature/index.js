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

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "featureName",
        message: "Name of feature",
        validate: required
      }
    ]);
  }

  writing() {
    const featureFolder = this.config.get("featureFolder") || "src/features";

    this.fs.copyTpl(
      this.templatePath("actions.ts"),
      this.destinationPath(
        featureFolder,
        this.answers.featureName,
        "actions.ts"
      ),
      {
        ...this.answers,
        constantCase
      }
    );

    this.fs.copyTpl(
      this.templatePath("index.ts"),
      this.destinationPath(featureFolder, this.answers.featureName, "index.ts"),
      { ...this.answers }
    );

    this.fs.copyTpl(
      this.templatePath("reducer.ts"),
      this.destinationPath(
        featureFolder,
        this.answers.featureName,
        "reducer.ts"
      ),
      {
        ...this.answers,
        pascalCase
      }
    );

    this.fs.copyTpl(
      this.templatePath("saga.ts"),
      this.destinationPath(featureFolder, this.answers.featureName, "saga.ts"),
      { ...this.answers }
    );

    this.fs.copyTpl(
      this.templatePath("selectors.ts"),
      this.destinationPath(
        featureFolder,
        this.answers.featureName,
        "selectors.ts"
      ),
      { ...this.answers }
    );
  }
};
