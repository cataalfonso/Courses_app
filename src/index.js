//const CtxCourses = require('./context/ctx-courses');
const CtrlCourses= require('./controllers/course');
var inquirer= require('inquirer');


//const _ctx = new CtxCourses();
//_ctx.courses.update("0dc2f8ab-bcff-4762-b275-5a194fe5afc0", {name:"valor3", duration:'57', grades:'[2,3,5]'});
//_ctx.save();

const _ctrl= new CtrlCourses();
/*_ctrl.remove('274b8b49-7782-4a6d-89ea-888d46e0307a');
_ctrl.update("274b8b49-7782-4a6d-89ea-888d46e0307a",
{
    name:'quinto2',
    duration: '10',
    grades: [1,2,3,4,5],
});
inquirer.prompt(_ctrl._model.questions).then(answers) => {
    _ctrl.add ({
        name: answers.name,
        durartion: answers.duration,
    });
}*/

inquirer.prompt(_ctrl._model.questions).then((answers) => {
    _ctrl.add ({
        name: answers.name,
        duration: answers.duration,
    });
})   
