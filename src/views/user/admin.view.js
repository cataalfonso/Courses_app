const Options = require('../../controllers/options');
const inquirer = require('inquirer');
const UserController = require("../../controllers/user.controller");

const menu = new Options();

class AdminView {
    constructor(){
        console.log(this.controller);
        console.log(UserController);
        this.controller = new UserController();
    }
    selectAction() {
        inquirer.prompt(menu.adminOptionsPrompt).then((answers) => {
            console.log('Elegiste la opción: ' + answers.globalOptions);
            this.controller.selectAction(answers.globalOptions);
        });

    }
}

module.exports = AdminView;

