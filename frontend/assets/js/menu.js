import { produtos } from "./products.js";
import { adicionarAoCarrinho } from "./cart.js";


const app = document.getElementById("app");

let valorTotalPedido = 0;

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

        <section>
            <h2>Mesa 08:</h2>
            <div id="itens-carrinho">
                <!-- Itens aparecerão aqui -->
            </div>
            <p>Total: R$ <span id="total-pedido">0,00</span></p>
        </section>


        <section class="busca-container">

            <input
                type="text"
                id="busca"
                placeholder="Buscar produto..."
                onkeyup="buscar()"
            >

        </section>


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

        <section class="menu" id="menu"></section>

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

produtos.forEach(produto => {

    const precoNumerico = parseFloat(produto.preco.replace('R$', '').replace(',', '.'));

    menuContainer.innerHTML += `

        <div class="card" data-categoria="${produto.categoria}">

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <h3>${produto.nome}</h3>

            <p>${produto.descricao}</p>

            <span>${produto.preco}</span>

            <!-- 3. Botão de Adicionar -->
            <button class="btn-add" data-preco="${precoNumerico}">
                Adicionar ao Pedido
            </button>

        </div>

    `;
});


// =========================
// FILTRO DE CATEGORIAS
// =========================

function filtrar(categoria){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(categoria === "todos"){

            card.style.display = "block";

        }else{

            card.style.display =
                card.dataset.categoria === categoria
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

    const cards = document.querySelectorAll(".card");

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
// LÓGICA DO PEDIDO (SOMA)
// =========================

document.addEventListener("click", (event) => {
    // 1. Verifica se clicou no botão de adicionar
    if (event.target && event.target.classList.contains("btn-add")) {
        
        // 2. Captura o preço do atributo data-preco
        const preco = parseFloat(event.target.getAttribute("data-preco"));
        
        // 3. Soma ao valor total (aquela variável que você criou no topo)
        valorTotalPedido += preco;
        
        // 4. Tenta encontrar o display do total
        const displayTotal = document.getElementById("total-pedido");
        
        if (displayTotal) {
            // 5. Atualiza o texto na tela
            displayTotal.innerText = valorTotalPedido.toLocaleString('pt-BR', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            });
        } else {
            console.error("Elemento 'total-pedido' não encontrado no HTML!");
        }
    }
});

window.add = (nome, preco) => {
    adicionarAoCarrinho(nome, preco);
};


// =========================
// EXPORTANDO FUNÇÕES
// =========================

window.filtrar = filtrar;
window.buscar = buscar;