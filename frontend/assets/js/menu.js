import { produtos } from "./products.js";

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

    menuContainer.innerHTML += `

        <div class="card" data-categoria="${produto.categoria}">

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <h3>${produto.nome}</h3>

            <p>${produto.descricao}</p>

            <span>${produto.preco}</span>

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
// EXPORTANDO FUNÇÕES
// =========================

window.filtrar = filtrar;
window.buscar = buscar;