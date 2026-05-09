let itens = [];
let total = 0;
let mesaSelecionada = "01";


// =========================
// ADICIONAR PRODUTO
// =========================

export function adicionarAoCarrinho(produto){

    itens.push(produto);

    total += produto.preco;

    salvarPedido();

    atualizarInterface();
}


// =========================
// REMOVER PRODUTO
// =========================

export function removerItem(index){

    total -= itens[index].preco;

    itens.splice(index, 1);

    salvarPedido();

    atualizarInterface();
}


// =========================
// LIMPAR PEDIDO
// =========================

export function limparPedido(){

    itens = [];
    total = 0;

    salvarPedido();

    atualizarInterface();
}


// =========================
// ALTERAR MESA
// =========================

export function alterarMesa(valor){

    mesaSelecionada = valor;

    salvarPedido();

    atualizarInterface();
}


// =========================
// SALVAR LOCALSTORAGE
// =========================

function salvarPedido(){

    localStorage.setItem(
        "pedido",
        JSON.stringify({
            itens,
            total,
            mesaSelecionada
        })
    );
}


// =========================
// CARREGAR LOCALSTORAGE
// =========================

export function carregarPedido(){

    const pedidoSalvo =
        JSON.parse(localStorage.getItem("pedido"));

    if(pedidoSalvo){

        itens = pedidoSalvo.itens || [];
        total = pedidoSalvo.total || 0;
        mesaSelecionada =
            pedidoSalvo.mesaSelecionada || "01";

        atualizarInterface();
    }
}


// =========================
// ATUALIZAR INTERFACE
// =========================

function atualizarInterface(){

    const lista =
        document.getElementById("lista-pedido");

    const totalDisplay =
        document.getElementById("total-pedido");

    const mesaDisplay =
        document.getElementById("mesa-select");

    if(!lista || !totalDisplay) return;

    lista.innerHTML = "";

    itens.forEach((item, index) => {

        lista.innerHTML += `

            <div class="pedido-item">

                <div>

                    <h4>${item.nome}</h4>

                    <span>
                        R$ ${item.preco.toFixed(2)}
                    </span>

                </div>

                <button
                    onclick="window.removerItem(${index})"
                >
                    ×
                </button>

            </div>

        `;
    });

    totalDisplay.innerText =
        total.toLocaleString(
            "pt-BR",
            {
                minimumFractionDigits: 2
            }
        );

    if(mesaDisplay){

        mesaDisplay.value = mesaSelecionada;
    }
}


// =========================
// EXPORTAR PARA HTML
// =========================

window.removerItem = removerItem;
window.alterarMesa = alterarMesa;