const User = require("./user")

function Person(){

}
Person.prototype={
    id: 0,
    nombre: '',
    apellido:'',
    usuario: new User(),
    telefono: '',
    direccion: '',
    fechaNacimiento: new Date()
}

module.exports= Person;