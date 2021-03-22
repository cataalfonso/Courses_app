const Grade = require("./grade");

function Course(){

}
Course.prototype={
    id: 0,
    nombre: '',
    duracion: '',
    grades: []
}

module.exports = Course;