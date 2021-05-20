const CtxCourses = require('../context/ctx-courses');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/Grade/new.view');
const SearchView = require('../views/Grade/search.view');
const UpdateView = require('../views/Grade/update.view');


class GradeController{

  constructor() {
    this.context = new CtxCourses();
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


  get items() {
    return this.context.grades;
  }

  get _items() {
    return this.context._grades;
  }

  filterCoursesByStudent(studentId) {
    return this.context.courseXstudents.filter(item => item.id_student === studentId);
  }

  get students(){
    return this.context.courseXstudents;
  }

  get subjects(){
    return this.context.subjects;
  }
    
    add(grade) {
        if (grade) {
          this.context.grades.add(grade);
        }
    }
    
    remove(id) {
        if (id) {
          this.grades.context.remove(id);
        }
      }
    
    update(id, item) {
        this.grades.context.update(id, item);
      }

    find (id){
       this.context.grades.findById(id);
     } 
   
    }

module.exports = GradeController;

