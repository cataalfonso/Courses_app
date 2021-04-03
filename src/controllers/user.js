const CtxUsers = require('../context/ctx-courses');
const usersModel= require('../models/user');

class UserController extends CtxUsers{
    constructor( ){
        super();
        this._model= new usersModel();
        this.logged= false;
    }
    
    loginUser (data){
        const index = this.users.findIndex( (element) => element.login === data.login);
        if (index >= 0){
            if (this.users[index].password===data.password){
                console.log('Ingreso exitoso');
                this.logged= true
            } else{
                console.log('Usuario o contraseña incorrectos');
            }
        } else{
            console.log ('El usuario no existe');
        }    
    }

    add(user) {
        if (user) {
          this.users.add(user);
        }
    }
    
    remove(id) {
        if (id) {
          this.users.remove(id);
        }
      }
    
    update(id, item) {
        this.users.update(id, item);
      }

    find (id){
       this.users.findById(id);
     } 

   
    }

module.exports = UserController;