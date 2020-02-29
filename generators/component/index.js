const Generator = require("yeoman-generator");
const { pascalCase, paramCase } = require("change-case");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("componentName", { required: true });
    this.log("Initializing...");
  }

  start() {
    this.log("Starting....");
  }

  writing() {
    const components = this.config.get("components") || "src/components";

    const options = {
      componentName: this.options.componentName,
      pascalCase,
      paramCase
    };

    this.fs.copyTpl(
      this.templatePath("component.tsx.ejs"),
      this.destinationPath(
        components,
        paramCase(options.componentName),
        `${paramCase(options.componentName)}.tsx`
      ),
      options
    );

    this.fs.copyTpl(
      this.templatePath("index.ts.ejs"),
      this.destinationPath(components, paramCase(options.componentName), `index.tsx`),
      options
    );
  }
};
