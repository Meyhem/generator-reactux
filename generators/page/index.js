const Generator = require("yeoman-generator");
const { paramCase, pascalCase } = require("change-case");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("pageName", { required: true });
    this.log("Initializing...");
  }

  start() {
    this.log("Starting....");
  }

  writing() {
    const pages = this.config.get("pages") || "src/pages";
    const pageName = this.options.pageName;

    const options = {
      pageName,
      pascalCase,
      paramCase
    };

    this.fs.copyTpl(
      this.templatePath("page.tsx.ejs"),
      this.destinationPath(
        pages,
        paramCase(pageName),
        `${paramCase(pageName)}.tsx`
      ),
      options
    );

    this.fs.copyTpl(
      this.templatePath("index.ts.ejs"),
      this.destinationPath(pages, paramCase(pageName), `index.ts`),
      options
    );
  }
};
