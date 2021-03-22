const CtxCourses = require('./context/ctx-courses');


const _ctx = new CtxCourses();
_ctx.courses.add({name:"dddd"});
_ctx.courses.add({name:"dddd"});
_ctx.courses.add({name:"dddd"});
_ctx.courses.hasChanges = true;
_ctx.students.hasChanges = true;
//_ctx.save();

console.log(_ctx.courses);

