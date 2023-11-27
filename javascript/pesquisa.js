let box = document.querySelector('.barra-box');
let lupa = document.querySelector('.lupa');
let btm = document.querySelector('.botao');
const input = document.querySelector("#barraDePesquisa");
const teste = document.querySelector("main")
const anuncios = [{titulo: "mouse logitech usado", preco:39},
{titulo: "placa mãe a320 usada praticamente nova", preco:100},
{titulo: "par memoria ram 8gb ram", preco:150},
{titulo: "hd 1tb instalado com unbuntu", preco:40},
{titulo: "memoria ram 4gb", preco:30},
{titulo: "pc gamer completo usado por 7 anos somente", preco:5000}
]

var h1
var h2
var elementosPesquisa; 

lupa.addEventListener('click', ()=>{

    box.classList.add('ativo')
    pesquisaDeAnuncios()
})

btm.addEventListener('click', ()=>{

    box.classList.remove('ativo')
})

function pesquisaDeAnuncios(){
    let pesquisa = input.value
    if(pesquisa !== ""){
        teste.innerHTML = ""
        let resultado = anuncios.filter((objeto) => objeto.titulo.match(pesquisa))

        resultado.forEach((obj) => {

        let newDiv = document.createElement("div")
        h1 = obj.titulo
        h2 = "R$" + obj.preco
        elementosPesquisa =  "<div class='artigos-container'><article class='promocoesDoDia'><img src='img/placeholder.png' class='product-image'><h2 class='produto'>"+h1+"</h2><p class='preco'>"+h2+"</p></article></div>"

        
        newDiv.innerHTML = elementosPesquisa
        teste.appendChild(newDiv)
    })

    }  
}


