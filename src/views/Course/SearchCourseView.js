
class SearchCourseView {

  constructor(){
    this.choices=[{
      type: 'rawlist',
      name: 'criteria',
      message: "Elija el criterio por el que desea buscar",
      choices: ["id", "name", "duration"]   //intento hacerlo dinamico, pero no lo toma Object.keys(this._model)
    }];

    this.id= [
    {
      type: 'input',
      name: 'id',
      message: "Ingrese el id del  curso",
    },    
    
  ];  

  this.name = [  
    {
      type: 'input',
      name: 'name',
      message: "Ingrese el nombre del  curso",
    },
  ];  
  
  this.duration = [
      {
        type: 'input',
        name: 'duration',
        message: "Ingrese la duración del curso en meses",
      },  
    ];    
 
}

}  

module.exports= SearchCourseView;
