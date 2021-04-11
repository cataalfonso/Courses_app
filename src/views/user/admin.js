const Options = require('../../controllers/options');
const inquirer= require('inquirer');
const NewCourseView = require('../Course/NewCourseView');
const CourseController = require('../../controllers/course');
const DeleteCourseView = require('../Course/DeleteCourseView');
const UpdateCourseView = require('../Course/UpdateCourseView');
const SearchCourseView = require('../Course/SearchCourseView');
const ParamController = require('../../controllers/param');
const NewParamView = require('../Param/NewParamView');
const DeleteParamView = require('../Param/DeleteParamView');
const UpdateParamView = require('../Param/UpdateParamView');
const SearchParamView = require('../Param/SearchParamView');

const menu= new Options();

class AdminView{

selectAction(){    
    inquirer.prompt(menu.adminOptionsPrompt).then((answers)=>{
        console.log('Elegiste la opción: ' + answers.globalOptions);
        switch (answers.globalOptions) {
        case 'Cursos':
           this.course();                                    
          break;    
        case 'Notas':
           this.grade();
            break;
        case 'Parametros':
           this.params();
            break;
        case 'Pass-Reset':
            this.passReset();
            break;
        case 'Profesores':
            this.person();
            break;
        case 'Estudiantes':
            this.studen();
            break;
        case 'Materias':  
            this.subject();         
            break;   
        case 'Usuarios':
            this.user();
            break;             
        }
    });

}

course(){
    const course= new CourseController; 
    inquirer.prompt(menu.localOptionsPrompt).then((answers)=>{
        console.log('Elegiste la opción: ' + answers.localOptions);
        switch (answers.localOptions){
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
}); 
}

grade(){

}

params(){
    const param= new ParamController;
    inquirer.prompt(menu.localOptionsPrompt).then((answers)=>{
        console.log('Elegiste la opción: ' + answers.localOptions);
        switch (answers.localOptions){
        case 'Nuevo registro':
            const paramOperation= new NewParamView;
            inquirer.prompt(paramOperation.addquestions).then((answers)=>{
                param.add(answers);
            });
            break;
        case 'Eliminar registro':
            param.listall();
            const paramOperation2= new DeleteParamView;
            inquirer.prompt(paramOperation2.questions).then((answers)=>{
                param.remove(answers.id);
            });
            break;   
        case 'Actualizar registro':
            param.listall();
            const paramOperation3= new UpdateParamView;
            inquirer.prompt(paramOperation3.questions).then((answers)=>{
                param.update(answers.id, answers);
            });
            break;       
        case 'Consultar':
            const paramOperation4= new SearchParamView;
            inquirer.prompt(paramOperation4.choices).then((answers)=>{
                    switch (answers.criteria) {
                      case 'id':
                        inquirer.prompt(paramOperation4.id).then((answers)=>{ 
                            param.list('id', answers.id);
                          });
                          break;
                      case 'Valor':
                        inquirer.prompt(paramOperation4.value).then((answers)=>{ 
                            param.list('value', answers.value);
                          });
                          break;
                      case 'Descripción':
                        inquirer.prompt(paramOperation4.description).then((answers)=>{ 
                            param.list('description', answers.description);
                          });
                          break;
                      }     
            });
            break;
        }        
}); 
}

passReset(){

}

person(){

}

student(){

}

subject(){

}

user(){

}

}

module.exports= AdminView;

