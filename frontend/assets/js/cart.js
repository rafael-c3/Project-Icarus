// assets/js/cart.js
let itens = [];
let total = 0;

export function adicionarAoCarrinho(nome, preco) {
    itens.push({ nome, preco });
    total += preco;
    atualizarInterface();
    alert(valorTotalPedido)
}

function atualizarInterface() {
    const totalDisplay = document.getElementById("total-pedido");
    if (totalDisplay) {
        totalDisplay.innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    }
}