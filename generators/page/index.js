const Generator = require("yeoman-generator");
const { snakeCase, pascalCase } = require("change-case");

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
    const pagesFolder = this.config.get("pagesFolder") || "src/pages";
    const pageName = this.options.pageName;

    this.fs.copyTpl(
      this.templatePath("page.tsx.ejs"),
      this.destinationPath(
        pagesFolder,
        snakeCase(pageName),
        `${snakeCase(pageName)}.tsx`
      ),
      {
        pageName,
        pascalCase
      }
    );

    this.fs.copyTpl(
      this.templatePath("index.ts.ejs"),
      this.destinationPath(
        pagesFolder,
        pageName,
        `index.ts`
      ),
      {
        pageName,
        pascalCase
      }
    );
  }
};
