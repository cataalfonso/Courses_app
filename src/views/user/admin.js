const Options = require('../../controllers/options');
const inquirer= require('inquirer');

const menu= new Options();

class AdminView{

selectAction(){    
    inquirer.prompt(menu.adminOptionsPrompt).then((answers)=>{
        console.log('Elegiste la opción: ' + answers.globalOptions);
        switch (answers.globalOptions) {
        case 'Cursos':
           
                break;    
        case 'Notas':
           
            break;
        case 'Parametros':
            
            break;
        case 'Pass-Reset':
            
            break;
        case 'Profesores':
           
            break;
        case 'Estudiantes':
           
            break;
        case 'Materias':           
            break;   
        case 'Usuarios':
           
            break;             
        }
    });
}

}

module.exports= AdminView;
