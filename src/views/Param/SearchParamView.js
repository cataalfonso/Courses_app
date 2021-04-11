class SearchParamView {

  constructor(){
    this.choices=[{
      type: 'rawlist',
      name: 'criteria',
      message: "Elija el criterio por el que desea buscar",
      choices: ["id", "Valor", "Descripción"]  
    }];

    this.id= [
    {
      type: 'input',
      name: 'id',
      message: "Ingrese el id del parametro",
    },    
    
  ];  

  this.value = [  
    {
      type: 'input',
      name: 'Value',
      message: "Ingrese el valor del parámetro",
    },
  ];  
  
  this.description ={
    type: 'input',
    name: 'description',
    message: "Ingrese la descripción del parámetro",  
    }
 
}

}  

module.exports= SearchParamView;
