

class LoginView{

    constructor(){
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
    ];  
    
    this.loginsucess='Ingreso exitoso';
    this.loginfailed='clave o usuario incorrectos';
}

}

module.exports= LoginView;