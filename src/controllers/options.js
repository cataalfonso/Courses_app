class Options {
  
  constructor(){
    this.adminOptionsPrompt = {
      type: 'rawlist',
      name: 'globalOptions',
      message: 'Indique qué desea hacer:',
      choices: [
        'Cursos',
        'Notas',
        'Parametros',
        'Pass-Reset',
        'Profesores',
        'Estudiantes',
        'Materias',
        'Usuarios', ]
    };
    
    
    this.teacherOptionsPrompt = {
      type: 'rawlist',
      name: 'globalOptions',
      message: 'Indique qué desea hacer:',
      choices: [
       'Información de cursos', 
       'Información de materias',
       'Información de notas', 
       'Actualizar su perfil',]
    };

    this.studentOptionsPrompt = {
      type: 'rawlist',
      name: 'globalOptions',
      message: 'Indique qué desea hacer:',
      choices: [
       'Información de materias',
       'Información de notas', 
       'Actualizar su perfil',]
    };


    this.localOptionsPrompt = {
      type: 'rawlist',
      name: 'localOptions',
      message: 'Indique la operación que desea realizar:',
      choices: ['Nuevo registro', 'Eliminar registro', 'Actualizar registro', 'Consultar'],
    };
   
   this.idPrompt= {
       type: 'input',
       name: 'id',
       message:'Ingrese el id del registro',
   }; 
   
   this.confirmPrompt ={
     type:'confirm',
     name: 'confirm',
     message: 'Desea realizar la operación?',
     default: false,
 };

}
}

module.exports =  Options;

