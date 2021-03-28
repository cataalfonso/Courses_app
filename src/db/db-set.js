const uuid = require('uuid');
class DbSet extends Array{
    constructor(){
        super();
        this.hasChanges = false;
        this.save = null;
    }
    add(item){
        this.push({id: uuid.v4(), ...item});
        this.hasChanges = true;
        this.save();
    }
    remove(id){
        const index = this.findIndex(item => item.id === id);
        this.splice(index, 1);
        this.hasChanges = true;
        this.save();
    }
    findById(id){
        const item = this.find((_item) => _item.id === id);
        return item;
    }

}
module.exports = DbSet;