const nome = document.querySelector("#nome")
const senha = document.querySelector("#senha")
const main = document.querySelector("main")

const logins = [
    {Name: "matteus", Password: "1234"},
    {Name: "joao", Password: "1234"},
    {Name: "artur", Password: "1234"}
]


/*
    Função login: verifica o nome e senha do usuario
    Parametros: nome e password retirados do localStorage coletados do form HTML
*/
function login(name, password){
    return logins.find(authenticator => authenticator.Name === name && authenticator.Password === password);;
}

/*
    Função substituir: puxa os dados do form HTML e armazena no localStorage, caso os dados batem com os usuarios
    predefinidos, o usuario será logado, ao contrario o localStorage será limpado e a pagina sera atualizada.
*/
function substituir(){
    let nomeUsuario = nome.value
    let senhaUsuario = senha.value

    if(login(nomeUsuario, senhaUsuario)){
        localStorage.setItem("nome", nomeUsuario);
        localStorage.setItem("senha", senhaUsuario);
        console.log(logins)

        alert("Login realizado com sucesso")
        window.location.href="index.html"
    } else {
        alert("Nome de usuario ou senha errados")
        location.reload() 
    }
    

}

