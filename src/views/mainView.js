//Vista ppal que tiene el logueo y llama a las otras vistas
const inquirer= require('inquirer');
const LoginView= require('./user/loginview');
const AdminView= require('./admin/admin');
const UserController = require('../controllers/user');

const asklogin = new LoginView();

class MainView extends UserController{

    constructor(){
        super();
    }

    login(){
        inquirer.prompt(asklogin.questions).then((answers) => {
            if(this.loginUser(answers)){
                console.log (asklogin.loginsucess);
            }else{
                console.log (asklogin.loginfailed);    
            };
        });
    }
    
    menu (usertype){
        switch (usertype){
        case 'admin':
            console.log('hellooooo');
            break;
        case 'teacher':
            break;
        
        case 'student':
            break;    
    }}

    
}

module.exports=MainView;




