class  User{

    constructor(){
        this.id= 0;
        this.login= '';
        this.password= '';
        this.type= '';
        this.questions = [
            {
                type: 'input',
                name: 'login',
                message: "Ingrese el nombre de usuario",
            },
            {
                type: 'password',
                name: 'password',
                message: "Ingrese contraseña",
            },
            {
                type: 'list',
                name: 'type',
                message: "seleccione tipo de usuario",
                choices: ["Admin", "teacher", "student"]

            },
            
        ];  
    }
}
module.exports = User;