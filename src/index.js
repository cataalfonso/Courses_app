const CtxCourses = require('./context/ctx-courses');


const _ctx = new CtxCourses();
_ctx.courses.update("0dc2f8ab-bcff-4762-b275-5a194fe5afc0", {name:"valor3", duration:'57', grades:'[2,3,5]'});

//_ctx.courses.add({name:"dddd"});
//_ctx.courses.add({name:"dddd"});
//_ctx.save();

