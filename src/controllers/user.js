const Ctx = require('../context/ctx-courses');

class UserController extends Ctx{
    constructor( ){
        super();
        this.logged= false;
    }
    
    loginUser (data){
        const index = this.users.findIndex( (element) => element.login === data.login);
        if (index >= 0){
            if (this.users[index].password===data.password){
                this.logged= true;
                this.type=this.users[index].type;
                return true
            } else{
                return false
            }
        } else{
            return false
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