const CourseController = require("../../controllers/course.controller");

class CourseView{

    constructor(){
        this.controller = new CourseController();
    }
    selectAction(){
        inquirer.prompt(menu.localOptionsPrompt).then((answers) => {
            console.log('Elegiste la opción: ' + answers.localOptions);
            this.controller.selectAction(answers.localOptions);
        });
    }
}
module.exports = CourseView;