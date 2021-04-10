
class DeleteCourseView {

  constructor(){
      this.questions = [
    {
      type: 'input',
      name: 'id',
      message: "Ingrese el id del curso que desea eliminar",
    },
  ];  
}

}  

module.exports= DeleteCourseView;
