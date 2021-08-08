//los DTO son objetos de salida, uno por cada operacion con la bd, si son distintos

class DtoCourse{
    constructor(){
        this.name= '';
        this.duration= '';
}
}

class CmdPostCourse{
    constructor(){
        this.name= '';
        this.duration= '';
}
}

module.exports=DtoCourse;
module.exports=CmdPostCourse;