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

    nested(sourceElement, props, propName){
        const newelement={...sourceElement};
        //console.log('elemento que evaluo',newelement)
        let propertyKeys = [];
        let arrayPropertyKey = [];
        [propertyKeys, arrayPropertyKey] = this.findKeyProp(newelement, props);
        //console.log(propertyKeys);
        //console.log(arrayPropertyKey);
        
        arrayPropertyKey.forEach((arrayPropertyKey) => {
            let childs = this[arrayPropertyKey].filter(item => item[propName] === (newelement["id"]));
            newelement[arrayPropertyKey]= childs; 
          });

        for (let key in propertyKeys) {
            const propertyKey=propertyKeys[key];
            const keyId = propertyKey.keyId;
            const property = propertyKey.property;
            //console.log('keyid', keyId);
            //console.log('property', property);
            //console.log('newelement', newelement);
            let child = this[property].find(item => item.id === (newelement[keyId]));
            //console.log('el valor del child', child);
            if (!child){
                //console.log('aqui')
                return newelement;
            } else {
              newelement[keyId]= {...this.nested(child, props)};
            };
            };
        return newelement    
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
                                
                this['_'+propName]=this[propName].map(element=>{
                    return this.nested(element, props, propName); 
                }); 

                //console.log('mi nuevo array', propName, JSON.stringify(this['_'+propName]));
                //console.log('mi viejo array', propName, this[propName]);
                this[propName].save = this.save;
            
        };
    };
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