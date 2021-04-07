//dejar aca solo el llamado de la primera vista que es el login

const MainView = require("./views/mainView");

const start= new MainView;

function main(){
    start.login(() => {
        showmenu();
    });
}

function showmenu(){
    start.menu();
}    

main();






