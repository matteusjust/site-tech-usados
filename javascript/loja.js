if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}//Faz a verificação se o documento do DOM  está carregando e se estiver, gere uma uma função

var totalAmount = "0,00";

function ready(){
    const removeProductButtons = document.getElementsByClassName("remove-product-button")
    /*const removeAllProductButtons = document.getElementsByClassName("remove-all-product-button")*/

    for(var i = 0; i < removeProductButtons.length; i++){
        removeProductButtons[i].addEventListener("click", removeProduct) 
    }//Adiciona um ouvidor de eventos em todos os botões de classe remove-product-button e executa uma função de apagar todos os elementos parentes dos parentes, ou seja só um ítem do carrinho

    const quantityInputs = document.getElementsByClassName("product-qtd-input")//Recebe os inputs number

    for(var i = 0; i < quantityInputs.length; i++){
        quantityInputs[i].addEventListener("change", checkIfInputIsNull)
    }//Percorre todos os inputs e ao houver mudança de numeração, é atualizado a função update total

    const addToCartButtons = document.getElementsByClassName("button-hover-background")
    for(var i = 0; i < addToCartButtons.length; i++){
        addToCartButtons[i].addEventListener("click", addProductToCart)
    }

    const purchaseButton = document.getElementsByClassName("purchase-button")[0]
    purchaseButton.addEventListener("click", makePurchase)

    function makePurchase(){
        if(totalAmount === "0,00"){
            alert("Seu carrinho está vazio")
        } else {
            alert(`
                Obrigado pela sua compra!

                Valor do pedido: R$${totalAmount}
                Volte Sempre :)
            `)
        }

        document.querySelector(".cart-table tbody").innerHTML = ""
        updateTotal()
    }

    

}

function addEventListenersToRemoveButtons() {
    const removeProductButtons = document.getElementsByClassName("remove-product-button");

    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", removeProduct);
    }
}

function addProductToCart(event){
    const button = event.target
    
    const productInfos = button.parentElement//Pegas as informações da div pai

    const productImage = productInfos.getElementsByClassName("product-image")[0].src
    
    const productTitle = productInfos.getElementsByClassName("produto")[0].innerText
    const productPrice = productInfos.getElementsByClassName("promocaoFogo")[0].innerText
    console.log(productPrice)
    //Pegando todas as informações dos ítens da loja

    const cartProducts = document.getElementsByClassName("cart-product");

    for (let i = 0; i < cartProducts.length; i++) {
        const cartProductTitle = cartProducts[i].getElementsByClassName("cart-product-title")[0].innerText;

        if (cartProductTitle === productTitle) {
            const quantityInput = cartProducts[i].getElementsByClassName("product-qtd-input")[0];
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotal();
            return;
        }
    }

    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")
    //Adiciona um ítem na tabela
    newCartProduct.innerHTML = 
    `
    <td>
        <img src="${productImage}" alt="" width="150px">
        <strong class="cart-product-title">${productTitle}</strong>
    </td>
    <td>
        <span class="cart-product-price">${productPrice}</span>
    </td>

    <td>
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button type="button" class="btn btn-outline-danger remove-product-button">Remover</button>
    </td>
    `//É adicionado a tabela junto com o ítem em si e juntamente com as informações colocadas diretamente do HTML 
    
    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCartProduct)//Adiciona o elemento TR

    addEventListenersToRemoveButtons();
    updateTotal();     
    /*const newInput = newCartProduct.querySelector(".product-qtd-input");
    newInput.addEventListener("change", checkIfInputIsNull);*/
    
    newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull);
    newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct);
}



function removeProduct(event){
    event.target.parentElement.parentElement.remove()
    updateTotal();
}

function checkIfInputIsNull(event){
    if (event.target.value == "0") {
        /*const removedInput = event.target;
        removedInput.removeEventListener("change", checkIfInputIsNull);
        removedInput.parentElement.parentElement.remove();*/
        event.target.parentElement.parentElement.remove();
    }

    updateTotal()
}

function updateTotal(){
totalAmount = 0
const cartProducts = document.getElementsByClassName("cart-product");
for (var i = 0; i < cartProducts.length; i++){
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
    const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value

    totalAmount += productPrice * productQuantity
}//Vai pegar o valor e a quantidade do carrinho e irá tratar o valor, retirando a vírgula e deixando apenas o ponto. Após isso vai multiplicar o valor pela quantidade

totalAmount = totalAmount.toFixed(2)
totalAmount = totalAmount.replace(".", ",")
document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount;//Arredonda o número para 2 casas decimais após a vírgula, substitui o . por , e adiciona o R$ ao lado do valor
}


