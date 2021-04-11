class UpdateView {

  constructor(){
      this.questions = [
    {
      type: 'input',
      name: 'id',
      message: "Ingrese el id del parametro",
    },    
    {
      type: 'input',
      name: 'Value',
      message: "Ingrese el valor del parámetro",
    },
    {
      type: 'input',
      name: 'description',
      message: "Ingrese la descripción del parámetro",
    },    
  ];  
}

}  

module.exports= UpdateView;
