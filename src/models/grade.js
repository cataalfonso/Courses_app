const Course = require("./course");
const Student = require("./student");
const Subject = require("./subject");

class Grade {

    constructor(){
    this.id= 0;
    this.student= new Student();
    this.subject= new Subject();
    //this.course=new Course();
    this.concept= '';
    this.value= 0;
}
}

module.exports = Grade;