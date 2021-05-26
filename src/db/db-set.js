const uuid = require('uuid');
class DbSet extends Array{
    constructor(){
        super();
        this.hasChanges = false;
        this.save = null;
    }
    add(item, _propName){
        console.log(item.constructor.name);
        let _item ={id: uuid.v4(), ...item}; 
        if (_propName){
            _propName.push(_item);
        };
        Object.keys(_item).forEach((element) => {
           if (typeof _item[element]==='object'){
               _item[element]=_item[element].id 
           };
        });
        this.push(_item);
        this.hasChanges = true;
        this.save();
        return _item
    }
    remove(id){
        const index = this.findIndex(item => item.id === id);
        if (index >=0){
            this.splice(index, 1);
            this.hasChanges = true;
            this.save()
        };
    }
    findById(id){
        const item = this.find((_item) => _item.id === id);
        return item;
    }

    update(id, object){
        const index = this.findIndex(item => item.id === id);
        if (index >=0){
            const item = this.find((_item) => _item.id === id);
            this.newValue={
                id: item.id,
                ...object};
            this.splice(index, 1, this.newValue);
            this.hasChanges = true;
            this.save();
        };    
    }


}

module.exports = DbSet;