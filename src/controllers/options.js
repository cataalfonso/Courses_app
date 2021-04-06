class Options {
  
  constructor(){
    this.globalOptionsPrompt = {
      type: 'rawlist',
      name: 'globalOptions',
      message: 'Indique qué desea hacer:',
      choices: ['Información de cursos',  'Información  de materias','Información de notas', 'Actualizar su perfil',]
    };
    this.localoptionsPrompt = {
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

