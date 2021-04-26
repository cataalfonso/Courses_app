const CtxCourses = require('../context/ctx-courses');
const Course = require('../models/course');
const Subject = require('../models/subject');

class SubjectController{
  constructor( ){
      this.context= CtxCourses();
  }
  
  add(subject) {
      if (subject) {
        let newCourse =  new Course();
        for (let key in newCourse){
          newCourse[key]= subject[key]
        }
        newCourse = this.context.courses.add(newCourse);
        let newSubject = new Subject();
        newSubject.name= subject.name;
        newSubject.course = newcourse;
        this.context.subjects.add(newsubject);
      }
  }
  
  remove(id) {
      if (id) {
        this.context.subjects.remove(id);
      }
    }
  
  update(id, item) {
      this.context.subjects.update(id, item);
    }

  find (id){
     this.context.subjects.findById(id);
   } 

 
  }

module.exports = SubjectController;