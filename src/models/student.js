const Person = require("./person")

class Student{

    constructor(){
        this.id= 0;
        this.personID= new Person();
        this.emergencyContactName='';
        this.emergencyContactTel='';
}
}
module.exports= Student;