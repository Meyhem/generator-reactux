const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }

  start() {
    this.log("Starting....");
  }

  writing() {
    const features = this.config.get("features") || "src/features";

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
  }
};
