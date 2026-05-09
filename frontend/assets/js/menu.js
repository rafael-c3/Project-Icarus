import { produtos } from "./products.js";

import {
    adicionarAoCarrinho,
    carregarPedido,
    limparPedido,
    alterarMesa
} from "./cart.js";


const app = document.getElementById("app");


app.innerHTML = `

    <header>

        <div class="logo">
            <img src="../assets/img/logoheader.png" alt="Icarus Café">
        </div>

        <nav>
            <a href="../index.html">Início</a>
            <a href="menu.html" class="btn-nav">Cardápio</a>
            <a href="../index.html#sobre">Quem Somos</a>
            <a href="../index.html#contato">Contato</a>
        </nav>

    </header>


    <main class="menu-page">

        <section class="menu-hero">

            <h1>Nosso Cardápio</h1>

            <p>
                Descubra sabores únicos preparados especialmente para você.
            </p>

        </section>


        <!-- BOTÃO TOGGLE -->

        <button
            class="toggle-cart"
            onclick="toggleCart()"
        >
            🛒 Pedido
        </button>


        <!-- SIDEBAR PEDIDO -->

        <aside class="cart-sidebar fechado">

            <h2>Seu Pedido</h2>

            <select
                id="mesa-select"
                onchange="alterarMesa(this.value)"
            >

                <option value="01">Mesa 01</option>
                <option value="02">Mesa 02</option>
                <option value="03">Mesa 03</option>
                <option value="04">Mesa 04</option>
                <option value="05">Mesa 05</option>
                <option value="06">Mesa 06</option>
                <option value="07">Mesa 07</option>
                <option value="08">Mesa 08</option>
                <option value="09">Mesa 09</option>
                <option value="10">Mesa 10</option>

            </select>

            <div id="lista-pedido"></div>

            <div class="cart-total">

                Total:
                R$ <span id="total-pedido">0,00</span>

            </div>

            <button
                class="btn-limpar"
                onclick="limparPedido()"
            >
                Limpar Pedido
            </button>

        </aside>


        <!-- BUSCA -->

        <section class="busca-container">

            <input
                type="text"
                id="busca"
                placeholder="Buscar produto..."
                onkeyup="buscar()"
            >

        </section>


        <!-- FILTROS -->

        <section class="filtros">

            <button onclick="filtrar('todos')">
                Todos
            </button>

            <button onclick="filtrar('cafe')">
                Cafés
            </button>

            <button onclick="filtrar('doce')">
                Doces
            </button>

            <button onclick="filtrar('croissant')">
                Croissants
            </button>

            <button onclick="filtrar('salgado')">
                Salgados
            </button>

            <button onclick="filtrar('sanduiche')">
                Sanduíches
            </button>

            <button onclick="filtrar('bolo')">
                Bolos
            </button>

        </section>


        <!-- PRODUTOS -->

        <section id="menu"></section>

    </main>


    <footer>

        <div class="footer-logo">
            <img src="../assets/img/logoheader.png" alt="Icarus Café">
        </div>

        <div class="footer-info">
            <p>© 2026 Icarus Café - Todos os direitos reservados.</p>
            <p>Desenvolvido por Rafael Lucas & Gustavo Gonçalves</p>
        </div>

    </footer>

`;


// =========================
// RENDERIZAÇÃO DOS PRODUTOS
// =========================

const menuContainer = document.getElementById("menu");

const categorias = {
    cafe: "Cafés",
    doce: "Doces",
    croissant: "Croissants",
    salgado: "Salgados",
    sanduiche: "Sanduíches",
    bolo: "Bolos"
};


Object.entries(categorias).forEach(([key, titulo]) => {

    const produtosCategoria =
        produtos.filter(
            produto => produto.categoria === key
        );

    let cardsHTML = "";

    produtosCategoria.forEach(produto => {

        const precoNumerico =
            parseFloat(
                produto.preco
                .replace("R$", "")
                .replace(",", ".")
            );

        cardsHTML += `

            <div
                class="card"
                data-categoria="${produto.categoria}"
            >

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                <span>${produto.preco}</span>

                <button
                    class="btn-add"
                    onclick='addProduto(
                        "${produto.nome}",
                        ${precoNumerico}
                    )'
                >
                    Adicionar ao Pedido
                </button>

            </div>

        `;
    });

    menuContainer.innerHTML += `

        <section
            class="categoria-section"
            data-categoria="${key}"
        >

            <div class="categoria-header">

                <h2>${titulo}</h2>

            </div>

            <div class="categoria-grid">

                ${cardsHTML}

            </div>

        </section>

    `;
});


// =========================
// FILTRO DE CATEGORIAS
// =========================

function filtrar(categoria){

    const sections =
        document.querySelectorAll(
            ".categoria-section"
        );

    sections.forEach(section => {

        if(categoria === "todos"){

            section.style.display = "block";

        }else{

            section.style.display =
                section.dataset.categoria === categoria
                ? "block"
                : "none";
        }
    });
}


// =========================
// BUSCA DE PRODUTOS
// =========================

function buscar(){

    const input =
        document
        .getElementById("busca")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        const nome =
            card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if(nome.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }
    });
}


// =========================
// ADICIONAR PRODUTO
// =========================

function addProduto(nome, preco){

    adicionarAoCarrinho({
        nome,
        preco
    });
}


// =========================
// TOGGLE SIDEBAR
// =========================

function toggleCart(){

    const cart =
        document.querySelector(".cart-sidebar");

    cart.classList.toggle("fechado");
}


// =========================
// CARREGAR PEDIDO
// =========================

carregarPedido();


// =========================
// EXPORTANDO FUNÇÕES
// =========================

window.filtrar = filtrar;
window.buscar = buscar;
window.addProduto = addProduto;
window.limparPedido = limparPedido;
window.alterarMesa = alterarMesa;
window.toggleCart = toggleCart;