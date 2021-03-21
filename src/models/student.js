const Person = require("./person")

function Student(){

} 
Student.prototype={
    id: 0,
    personaID: new Person(),
    contactoEmergencia:'',
    telefonoEmergencia:''
}
module.exports= Student;