
class DeleteParamView {

  constructor(){
      this.questions = [
    {
      type: 'input',
      name: 'id',
      message: "Ingrese el id del parámetro que desea eliminar",
    },
  ];  
}

}  

module.exports= DeleteParamView;
