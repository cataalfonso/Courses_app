const Person = require("./person")

class Student{

    constructor(){
        this.person= new Person();
        this.emergencyContactName='';
        this.emergencyContactTel='';
        this.grades=[]
}
}
module.exports= Student;