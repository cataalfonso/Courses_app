const Course = require("./course");
const Student = require("./student");
const Subject = require("./subject");

class Grade {

    constructor(){
    this.student= '';
    this.subject= '';
    this.course= '';
    this.concept= '';
    this.value= 0;
}
}

module.exports = Grade;