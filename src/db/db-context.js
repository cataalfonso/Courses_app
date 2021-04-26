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
                this['_'+propName] = this[propName].map((element) => {
                    let newelement= {...element};
                    for (let key in element){
                        let property = key+'s';
                        let childId= props.findIndex(item => item === property);
                        if (childId > -1){
                            let child = this[property].find(item => item.id === (element[key]));
                            newelement[key]= child;
                        }
                    }
                    return newelement;
                });  

                // buscar dentro de this.propname hacerle un map y por cada elemento buscar una propiedad 
                //donde le concatene "s" y ese nombre tiene que existir donde props, si es verdadero, buscar el valor dentro de la prop con s (person-persons)
                //asigno el valor, y lo devuelvo.
                this[propName].save = this.save;
            }
        }
    }

    save(){
        const props = Object.keys(this);
        for(var i = 0; i < props.length; i++){
            var propName = props[i];
        if(typeof this[propName] !== 'function' && typeof this[propName] !== 'string' && propName[0] !== '_'){ 
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