const XmlHelper = require("../utils/xml-helper");

class DbContext {
    constructor(dbPath){
        this.save = this.save.bind(this);
        this.dbPath = dbPath;
    }
    
    findKeyProp(element, props){
        const propertyKeys = [];
        const arrayPropertyKey = [];
        for (let prop in element){
            let property = prop+'s';
            const childId = props.findIndex(item => item === property);
            const arrayPropKeyIndex = props.findIndex(item => item === prop);
            if (childId > -1){
               propertyKeys.push({
                   keyId: prop,
                   property
               });
            }
            if(arrayPropKeyIndex > -1){
                arrayPropertyKey.push(prop);
            }
        }
        return [propertyKeys, arrayPropertyKey];
    }
    load(){
        const props = Object.keys(this).filter((key) => key[0] !== '_');
        for(var i = 0; i < props.length; i++){
            var propName = props[i];
            if(typeof this[propName] !== 'function' && typeof this[propName] !== 'string'){
                const _entityName = propName.substring(0, propName.length - 1);
                const path = `${this.dbPath}/${_entityName}.xml`;
                const xmlHelper = new XmlHelper(path);
                this[propName].push(...xmlHelper.xmlToJSON());
                let propertyKeys = [];
                let arrayPropertyKey = [];
                this['_'+propName] = this[propName].map((element, index) => {
                    if(index === 0){
                        [propertyKeys, arrayPropertyKey] = this.findKeyProp(element, props);
                    }
                    let newelement= {...element};
                    propertyKeys.forEach((propertyKey) => {
                        const keyId = propertyKey.keyId;
                        const property = propertyKey.property;
                        let child = this[property].find(item => item.id === (element[keyId]));
                        newelement[keyId]= child;
                    });
                    arrayPropertyKey.forEach((arrayPropertyKey) => {
                        let childs = this[arrayPropertyKey].filter(item => item[propName] === (element["id"]));
                        newelement[arrayPropertyKey]= childs;
                    });
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
        this.load();
    }
}

module.exports = DbContext;