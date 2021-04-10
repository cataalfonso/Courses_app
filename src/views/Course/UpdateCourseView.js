
class UpdateCourseView {

  constructor(){
      this.questions = [
    {
      type: 'input',
      name: 'id',
      message: "Ingrese el id del  curso",
    },    
    {
      type: 'input',
      name: 'name',
      message: "Ingrese el nombre del  curso",
    },
    {
      type: 'input',
      name: 'duration',
      message: "Ingrese la duración del curso en meses",
    },  
  ];  
}

}  

module.exports= UpdateCourseView;
