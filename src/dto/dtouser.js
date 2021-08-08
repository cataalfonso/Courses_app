//los DTO son objetos de salida, uno por cada operacion con la bd, si son distintos

class DtoUser{
    constructor(){
        this.login= '';
        this.password= '';
}
}

class CmdPostUser{
    constructor(){
        this.login= '';
        this.password= '';
        this.type='';
}
}

module.exports=DtoUser;
module.exports=CmdPostUser;