const Options = require('../../controllers/options');
const inquirer = require('inquirer');

const menu = new Options();

class AdminView {
    constructor(_controller){
        this.controller = _controller
    }
    selectAction() {
        inquirer.prompt(menu.adminOptionsPrompt).then((answers) => {
            console.log('Elegiste la opción: ' + answers.globalOptions);
            this.controller.selectAction(answers.globalOptions);
        });

    }
}

module.exports = AdminView;

