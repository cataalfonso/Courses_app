function Options(){

    this.optionsPrompt = {
       type: 'rawlist',
       name: 'options',
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

module.exports= Options