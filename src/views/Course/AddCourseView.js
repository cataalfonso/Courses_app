//poner en las vistas lo que tenga que preguntar para ingresar los datos

class AddCourseView {

  constructor(){
      this.addquestions = [
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

module.exports= CourseView;
