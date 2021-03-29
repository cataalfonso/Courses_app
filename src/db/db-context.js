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