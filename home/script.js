const app = document.getElementById("app");

app.innerHTML = `
  <header>
    <div class="logo">
        <img src="img/logoheader.png" alt="Aurora Café">
    </div>

    <nav>
      <a href="#home">Início</a>
      <a href="#sobre">Quem Somos</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

 <section id="home" class="hero">
    <div class="overlay"></div>

    <div class="hero-content">
        <h2>Bem-vindo ao</h2>
        <h2>Icarus Café</h2
        <p>Sabores únicos, aroma marcante e experiências inesquecíveis.</p>
        <a href="Project Icarus/menu/menu.html" class="btn">Conheça Mais</a>
    </div>
</section>

  <section id="sobre" class="sobre">
    
    <div class="sobre-img">
        <img src="img/quemsomos.png" alt="Nossa Cafeteria">
    </div>

    <div class="sobre-texto">
        <h2>Quem Somos</h2>
        <p>
            No Icarus Café, acreditamos que cada xícara conta uma história.
            Unimos grãos selecionados, ambiente acolhedor e atendimento
            especial para proporcionar momentos únicos aos nossos clientes.
        </p>

        <p>
            Mais do que café, entregamos experiências inesquecíveis em um
            espaço moderno e sofisticado.
        </p>
        <a href="#contato" class="btn-sobre">Fale Conosco</a>
    </div>

</section>

 <section id="contato" class="contato">

    <div class="contato-info">
        <h2>Entre em Contato</h2>
        <p>
            Ficaremos felizes em atender você. Preencha os dados e nossa equipe retornará em breve.
        </p>
    </div>

    <form class="form-contato">
        <input type="text" placeholder="Seu Nome" required>
        <input type="email" placeholder="Seu Email" required>
        <input type="tel" placeholder="Seu Celular" required>

        <button type="submit">Entrar em Contato</button>
    </form>

</section>

  <footer>

    <div class="footer-logo">
        <img src="img/logoheader.png" alt="Icarus Café">
    </div>

    <div class="footer-info">
        <p>© 2026 Icarus Café - Todos os direitos reservados.</p>
        <p>Desenvolvido por Rafael Lucas & Gustavo Gonçalves</p>
    </div>

</footer>
`;