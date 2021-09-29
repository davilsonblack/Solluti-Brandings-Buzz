let newName = document.getElementById('contato-name');
let newMail = document.getElementById('contato-email');
let newAssunto = document.getElementById('contato-assunto');
let newMsg = document.getElementById('contato-mensagem');
var ativarMenu = false;

alert('Teste - Solluti Tecnologias')

borderOn(newName);
borderOff(newName);

borderOn(newMail);
borderOff(newMail);

borderOn(newAssunto);
borderOff(newAssunto);

borderOn(newMsg);
borderOff(newMsg);

function borderOn(entrada){
    return entrada.addEventListener('focus', ()=>{
        entrada.style.borderColor = '#8E8FA1',
        entrada.style.color = '#8E8FA1'
    })
}

function borderOff(entrada){
    return entrada.addEventListener('blur', ()=>{
        entrada.style.borderColor = "#EBEBEB"
    })
}

function clicar(){
    ativarMenu = !ativarMenu;
    var menu = document.getElementById('menu-nav');

    if(ativarMenu){ // Se Verdadeiro ativa o menu de navegação
        menu.style.display = 'block';
    }else{ // Se for falso
        menu.style.display = 'none';
    }
}