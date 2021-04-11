class Options {
  
  constructor(){
    
    
    
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



}
}

module.exports =  Options;

