const XmlHelper = require("../utils/xml-helper");

class DbContext {
    constructor(dbPath){
        this.save = this.save.bind(this);
        this.dbPath = dbPath;
    }
    load(){
        const props = Object.keys(this);
        for(var i = 0; i < props.length; i++){
            var propName = props[i];
            if(typeof this[propName] !== 'function' && typeof this[propName] !== 'string'){
                const _entityName = propName.substring(0, propName.length - 1);
                const path = `${this.dbPath}/${_entityName}.xml`;
                const xmlHelper = new XmlHelper(path);
                this[propName].push(...xmlHelper.xmlToJSON());
                this[propName].forEach((element) => {
                    for (let key in element){
                        let property = key+'s';
                        let childId= props.findIndex(item => item === property);
                        if (childId > -1){
                            console.log(propName, key, element[key]);
                            let child = this[property].find(item => item.id === (element[key]));
                            console.log(child);
                        }
                    }
                });    
                // buscar dentro de this.propname hacerle un for each y por cada elemento buscar una propiedad 
                //donde le concatene "s" y ese nombre tiene que existir donde props, si es verdadero, buscar el valor dentro de la prop con s (person-persons)
                //asigno el valor, y lo devuelvo. Como transformo el array, no es un for ecah sino un map
                this[propName].save = this.save;
            }
           
        }
    }
    save(){
        const props = Object.keys(this);
        for(var i = 0; i < props.length; i++){
            var propName = props[i];
            if(typeof this[propName] !== 'function' && typeof this[propName] !== 'string'){
                if(this[propName].hasChanges === true){
                    const _entityName = propName.substring(0, propName.length - 1);
                    const path = `${this.dbPath}/${_entityName}.xml`;
                    const xmlHelper = new XmlHelper(path);
                    xmlHelper.JSONToXml(this[propName]);
                }
            }
           
        }
    }
}

module.exports = DbContext;