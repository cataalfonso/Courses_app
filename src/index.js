const CtxCourses = require('./context/ctx-courses');
const DbContext = require('./db/db-context');

const _ctx = new CtxCourses();
_ctx.courses.add({name:"dddd"});
console.log(_ctx.courses.findById("e338ab92-befb-4002-8195-63ec43b6a97b"));
//_ctx.courses.add({name:"dddd"});
//_ctx.courses.add({name:"dddd"});
//_ctx.save();

