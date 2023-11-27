
let novoBotão = '<button type="button" onclick="unLog()">DESLOGAR</button>'


/*
    Função que verfica se o usuario esta logado e substitui o botão de login.
*/
   
function condicaoLogin(){
    if(localStorage.getItem("nome") !== null){
        let botãoLogin = document.querySelector("#login")
        botãoLogin.innerHTML = "";
        botãoLogin.innerHTML = novoBotão;
    } 
}

/*
    Função unLog: Ao clicar o botão de deslogar o localStorage será limpo e dara um reload na pagina. 
*/
function unLog(){
    window.localStorage.clear();
    location.reload();   
}

condicaoLogin();