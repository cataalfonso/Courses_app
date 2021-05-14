const CtxCourses = require('../context/ctx-courses');
const Subject = require('../models/subject');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/Subject/new.view');
const SearchView = require('../views/Subject/search.view');
const UpdateView = require('../views/Subject/update.view');

const MSG_FIND_FAILED='No se encontró el curso, ingrese los datos nuevamente'

class SubjectController{
  constructor( ){
      this.context= new CtxCourses();
  }

  get items(){
    return this.context.subjects;
  }

  get courses(){
    return this.context.courses;
  }

  selectAction(options) {
    let view = {};
    switch (options) {
      case 'Nuevo registro': view = new NewView(this); break;
      case 'Eliminar registro': view = new DeleteView(this); break;
      case 'Actualizar registro': view = new UpdateView(this); break;
      case 'Consultar': view = new SearchView(this); break;
    };
    view.index();
  }
  
  add(item) {
      if (item) {
        let newSubject = new Subject();
        newSubject= this.makeSubject(item);
        if (newSubject){
          this.context.subjects.add(newSubject);
        }else {
          throw new Error(MSG_FIND_FAILED);
        };
      }
  }

 makeSubject(item){
    let subject={};
    let id_course= this.findCoursebyName(item.course);
        if (id_course){
          subject.name= item.name;
          subject.course = id_course;
          return subject;
        } 
  }
  
  remove(id) {
      if (id) {
        this.context.subjects.remove(id);
      }
    }
  
  update(id, item) {
    let subject={};
    subject= this.makeSubject(item);
    if (subject){
      this.context.subjects.update(id, subject);
    } else {
      throw new Error(MSG_FIND_FAILED);
    };
}

  find (id){
     this.context.subjects.findById(id);
   } 

   findCoursebyName(name){
    let index= this.context.courses.findIndex(item => item.name === name);
    return this.context.courses[index].id;
   }

   list(criteria, compare) {
    return this.context.subjects.filter((element) => element[criteria] == compare);
  }

 
  }

module.exports = SubjectController;