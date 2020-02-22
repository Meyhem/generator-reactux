const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)
        this.log('Initializing...')
    }

    start() {
        this.log('Starting....')
        this.log(this.templatePath())
        // this.log(this.config.getAll()
    }

    async prompting() {
        this.answers = await this.prompt([{
            type: 'input',
            name: 'featureName',
            message: 'Name of feature'
        }])
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('actions.ts'),
            this.destinationPath(this.config.get('srcFolder'), this.answers.featureName, 'actions.ts')
        )
    }
}