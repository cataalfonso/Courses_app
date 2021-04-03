const CtrlCourses = require('./controllers/course');
const CtrlUsers= require('./controllers/user');
var inquirer= require('inquirer');
var Options = require('./controllers/options');

var menu= new Options()

inquirer.prompt(menu.globalOptionsPrompt).then((answers)=>{
    console.log('Elegiste la opción: ' + answers.globalOptions);
    switch (answers.globalOptions) {
    case 'Información de cursos':
         const _ctrl= new CtrlCourses();
         _ctrl.list();
        break;
    case 'Información de materias':
         // los llamo todos igual??
        break;
    case 'Información de notas':
        
        break;
    case 'Actualizar su perfil':
        
        break;
    }
});


//_ctx.courses.update("0dc2f8ab-bcff-4762-b275-5a194fe5afc0", {name:"valor3", duration:'57', grades:'[2,3,5]'});
//_ctx.save();


//const _ctrl= new CtrlUsers(); // el login no va en las acciones, entonces debe ir antes del menu....
//_ctrl.remove('9e55ae87-6e27-4884-9ff0-cae3d2329f8b');
/*_ctrl.update("274b8b49-7782-4a6d-89ea-888d46e0307a",
{
    name:'quinto2',
    duration: '10',
    grades: [1,2,3,4,5],
});*/


// a donde llevo este inquirer? 
//inquirer.prompt(_ctrl._model.questions).then((answers) => {
  //  _ctrl.add (answers);
  //  _ctrl.loginUser(answers);
//})




