const Options = require('../../controllers/options');
const inquirer= require('inquirer');

const menu= new Options();

class AdminView{

selectaction(){    
    inquirer.prompt(menu.globalOptionsPrompt).then((answers)=>{
        console.log('Elegiste la opción: ' + answers.globalOptions);
        switch (answers.globalOptions) {
        case 'Información de cursos':
            const _ctrl= new CtrlCourses();
            _ctrl.list();
            break;
        case 'Información de materias':
           
            break;
        case 'Información de notas':
            
            break;
        case 'Actualizar su perfil':
            
            break;
        }
    });
}

}

module.exports= AdminView;
