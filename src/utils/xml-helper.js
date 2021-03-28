const fs = require('fs');
 
class XmlHelper{

    constructor(path){
        this.path = path;
    }

 extractValue(xmlNode){
 return this.cleanNode(xmlNode.split('>')[1].split('<')[0]);
 };
 
 cleanNode(node){
 return node.trim();
 };
 
 extractRow(row, rows, i){
 if(row === "<item>"){
 return {
 id: this.extractValue(rows[i+1]),
 name: this.extractValue(rows[i+2]),
 duration: this.extractValue(rows[i+3]),
 grades: this.extractValue(rows[i+4]),
 //pendiente volver esto generico, con cantidad de props variable
 }
 }
 };
 
 xmlToJSON(){
    const fileContent = fs.readFileSync(this.path,{encoding: 'utf-8'});
    const rowsFiles = fileContent.split('\r\n');
    let objRows = [];
    for(var i = 2; i < rowsFiles.length - 1; i++){
        const cols = rowsFiles[i].split('\t');
        const objRow = {};
        for(var j = 2; j < cols.length - 1; j++){
            const keyValue = cols[j].split('=');
            const propName =  keyValue[0];
            const propValue = keyValue[1].replace('"','').replace('"','');
            objRow[propName] = propValue;
        }
        objRows.push(objRow);
    }
    return objRows;
 };
 
 JSONToXml(objRows){
 const xmlRows = [];
 objRows.forEach((objRow) => {
     const props = Object.keys(objRow);
     var xmlRow = `\r\n\t<item`;
     props.forEach((prop) => {
        xmlRow +=`\t${prop}="${objRow[prop]}"`;
     });
     xmlRow += '\t/>'
     xmlRows.push(xmlRow);
 });
 const xmlDocument = `<?xml version="1.0" encoding="UTF-8"?>`+
 `\r\n<Items>`+ 
 xmlRows.join('') + 
 `\r\n</Items>`;
 fs.writeFileSync(this.path,xmlDocument,{encoding: 'utf-8'}); 
 };
}
 
module.exports= XmlHelper;