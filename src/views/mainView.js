//Vista ppal que tiene el logueo y llama a las otras vistas
const inquirer= require('inquirer');
const LoginView= require('./user/loginview');
const AdminView= require('./user/admin');
const TeacherView= require('./user/teacher');
const StudentView= require('./user/student');
const UserController = require('../controllers/user');

const asklogin = new LoginView();

class MainView extends UserController{

    constructor(){
        super();
    }

    login(callback){
        inquirer.prompt(asklogin.questions).then((answers) => {
            if(this.loginUser(answers)){
                console.log (asklogin.loginsucess);
                callback();
            }else{
                console.log (asklogin.loginfailed);    
            };
        });
    }
    
    menu (){
        switch (this.type){
        case 'Admin':
             const opt1=new AdminView();
             opt1.selectAction(); 
            break;
        case 'teacher':
            const opt2=new TeacherView();
            opt2.selectAction(); 
            break;
        
        case 'student':
            const opt3=new StudentView();
            opt3.selectAction(); 
            break;  
             
    }}

    
}

module.exports=MainView;




