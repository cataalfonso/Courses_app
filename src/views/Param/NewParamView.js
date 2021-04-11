class NewParamView {

  constructor(){
      this.addquestions = [
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

module.exports= NewParamView;
