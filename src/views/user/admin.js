const Options = require('../../controllers/options');
const inquirer= require('inquirer');
const NewCourseView = require('../Course/NewCourseView');
const CourseController = require('../../controllers/course');
const DeleteCourseView = require('../Course/DeleteCourseView');
const UpdateCourseView = require('../Course/UpdateCourseView');
const SearchCourseView = require('../Course/SearchCourseView');

const menu= new Options();

class AdminView{

selectAction(){    
    inquirer.prompt(menu.adminOptionsPrompt).then((answers)=>{
        console.log('Elegiste la opción: ' + answers.globalOptions);
        switch (answers.globalOptions) {
        case 'Cursos':
            const course= new CourseController; 
           inquirer.prompt(menu.localOptionsPrompt).then((answers)=>{
                    console.log('Elegiste la opción: ' + answers.localOptions);
                    switch (answers.localOptions) {
                    case 'Nuevo registro':
                        const courseOperation= new NewCourseView;
                        inquirer.prompt(courseOperation.addquestions).then((answers)=>{
                            course.add(answers);
                        });
                        break;
                    case 'Eliminar registro':
                        course.listall();
                        const courseOperation2= new DeleteCourseView;
                        inquirer.prompt(courseOperation2.questions).then((answers)=>{
                            course.remove(answers.id);
                        });
                        break;   
                    case 'Actualizar registro':
                        course.listall();
                        const courseOperation3= new UpdateCourseView;
                        inquirer.prompt(courseOperation3.questions).then((answers)=>{
                            course.update(answers.id, answers);
                        });
                        break;       
                    case 'Consultar':
                        const courseOperation4= new SearchCourseView;
                        inquirer.prompt(courseOperation4.choices).then((answers)=>{
                                switch (answers.criteria) {
                                  case 'id':
                                    inquirer.prompt(courseOperation4.id).then((answers)=>{ 
                                        course.list('id', answers.id);
                                      });
                                      break;
                                  case 'name':
                                    inquirer.prompt(courseOperation4.name).then((answers)=>{ 
                                        course.list('name', answers.name);
                                      });
                                      break;
                                  case 'duration':
                                    inquirer.prompt(courseOperation4.duration).then((answers)=>{ 
                                        course.list('duration', answers.duration);
                                      });
                                      break;
                                  }     
                              });
                        
                        break;       
                    }
                    
            })                                
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
