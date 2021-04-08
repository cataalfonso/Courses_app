//poner en las vistas lo que tenga que preguntar para ingresar los datos
// un controlador para varias vistas, y la vista debe ser muy sencilla. El controlador dice cual vista se muestra.
//las acciones y logica de negocio van en el controlador
class NewCourseView {

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

module.exports= NewCourseView;
