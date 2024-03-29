const CtxCourses = require('../context/ctx-courses');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/Grade/new.view');
const SearchView = require('../views/Grade/search.view');
const UpdateView = require('../views/Grade/update.view');
const Grade = require('../models/grade');

const MSG_FIND_FAILED = 'Ingrese los datos nuevamente'

class GradeController {

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
    return this.context.grades.filter(element => element.student != '' && element.student != null);
  }

  get _items() {
    return this.context._grades;
  }

  get _students() {
    return this.context._students.map(item => {
      let studentData = { ...item };
      return {
        id: studentData.id,
        Nombre: studentData.person.firstName,
        Apellido: studentData.person.lastName,
      };
    });
  }

  get subjects() {
    return this.context.subjects;
  }

  add(grade) {
    //console.log(grade);
    if (grade) {
      let newGrade = new Grade();
      for (let key in newGrade) {
        newGrade[key] = grade[key];
      }
      this.context.grades.add(newGrade);
    }
  }

  find(id) {
    this.context.grades.findById(id);
  }

  filterCoursesByStudent(studentId) {
    //console.log('recibo id de estudiante para filtrar cursos', studentId); 
    let courses = this.context._courseXstudents.filter(item => item.student.id === studentId);
    //console.log('course students filtrado', courses);
    if (courses.length > 0) {
      //console.log('encuentro cursos')
      return courses.map(item => {
        let courseList = { ...item };
        return {
          id: courseList.course.id,
          Nombre: courseList.course.name
        };
      });
    } else {
      //console.log('entro al error', courses.length);
      throw new Error(MSG_FIND_FAILED + ' no se encuentran cursos para el estudiante');
    };
  }

  filterSubjectsByCourses(courseId) {
    let subjects = this.context.subjects.filter(item => item.course === courseId);
    if (subjects.length > 0) {
      return subjects.map(item => {
        let subjectList = { ...item };
        return {
          id: subjectList.id,
          Nombre: subjectList.name
        };
      });
    } else {
      throw new Error(MSG_FIND_FAILED + ' no se encuentran materias para el curso');
    };
  }

  groupList(criteria, list) {
    let groups = [];
    list.forEach(item => {
      let itemId = item[criteria];
      if (!groups.includes(itemId)) {
        groups.push(itemId)
      }
    });
    return groups
  }


  list(criteria, compare) {
    let rawList = this.context.grades.filter((element) => element[criteria] === compare);
    let _List= this.shortenList(criteria, rawList);
    return _List;
  }

  remove(id) {
    if (id) {
      this.context.grades.remove(id);
    }
  }

  shortenList(criteria, rawList){
    return rawList.map(element => {
      let finalElement = { ...element };
      delete finalElement[criteria];
      return finalElement;
    });
  }

  update(item) {
    let oldregister = this.items.filter(element=> element.id===item.id);
    console.log(oldregister);
    let updateGrade={};
    updateGrade.student=oldregister[0].student;
    updateGrade.subject=oldregister[0].subject;
    updateGrade.course=oldregister[0].course;
    updateGrade.concept = item.concept;
    updateGrade.value = item.value;
    console.log(updateGrade);
    this.context.grades.update(item.id, updateGrade);
  }

  validateStudent(studentId) {
    //console.log('id que recibo', studentId);
    let valid = this.context.students.find(item => item.id === studentId);
    //console.log(valid);
    if (valid) {
      //console.log('el id del estudiante es valido')
      //console.log('lo que devuelve la funcion de buscar cursos', this.filterCoursesByStudent(studentId));
      return valid;
    } else {
      throw new Error(MSG_FIND_FAILED + ' el estudiante no existe');
    };
  }

  validateItem(itemId, itemList) {
    //console.log('este es el id de course a buscar', courseId);
    let valid = itemList.find(item => item.id === itemId);
    if (valid) {
      return valid;
    } else {
      throw new Error(MSG_FIND_FAILED + ' debe ingresar un id de la lista');
    };
  }

}

module.exports = GradeController;

