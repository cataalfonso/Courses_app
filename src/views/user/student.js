const Options = require('../../controllers/options');
const inquirer= require('inquirer');

const menu= new Options();

class StudentView{

selectAction(){    
    inquirer.prompt(menu.studentOptionsPrompt).then((answers)=>{
        console.log('Elegiste la opción: ' + answers.globalOptions);
        switch (answers.globalOptions) {
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

module.exports= StudentView;
