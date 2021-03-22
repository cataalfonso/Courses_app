const uuid = require('uuid');
class DbSet extends Array{
    constructor(){
        super();
        this.hasChanges = false;
    }
    add(item){
        this.push({id: uuid.v4(), ...item});
    }
    remove(id){
        const index = this.findIndex(item => item.id === id);
        this.splice(index, 1);
    }
    findById(id){
        
    }

}

class DbContext {
    constructor(){

    }
    save(){
        const props = Object.keys(this);
        for(var i = 0; i < props.length; i++){
            const _entityName = props[i];
            const _dbSet = this[_entityName];

            if(_dbSet.hasChanges){
                if(_dbSet.length > 0){
                    console.log(_entityName, _dbSet[0]);
                }
                
            }
        }
    }
}

class CtxCourses extends DbContext{
    

    constructor(){
        super();
        this.courses = new DbSet();
        this.grades = new DbSet();
        this.params = new DbSet();
        this.passResets = new DbSet();
        this.persons = new DbSet();
        this.students = new DbSet();
        this.students = new DbSet();
        this.users = new DbSet();
    }
}
module.exports = CtxCourses;