const DbContext = require('../db/db-context');
const DbSet = require('../db/db-set');
const dbConfig = require('../config/db.config.json');


class CtxCourses extends DbContext{
    constructor(){
        const dbPath = dbConfig.dbPath;
        super(dbPath);
        this.courses = new DbSet();
        this.grades = new DbSet();
        this.params = new DbSet();
        this.passResets = new DbSet();
        this.persons = new DbSet();
        this.students = new DbSet();
        this.subjects = new DbSet();
        this.users = new DbSet();
        this.load();
    }
}
module.exports = CtxCourses;