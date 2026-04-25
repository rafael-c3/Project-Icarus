const app = document.getElementById("app");

app.innerHTML = `
  <header>
    <h1>Icarus</h1>
    <nav>
      <a href="#home">Início</a>
      <a href="#sobre">Quem Somos</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <section id="home" class="hero">
    <h2>O melhor café da cidade</h2>
    <p>Sabor, aroma e experiência moderna.</p>
  </section>

  <section id="sobre" class="sobre">
    
    <div class="sobre-img">
        <img src="img/cafeteria.jpg" alt="Nossa Cafeteria">
    </div>

    <div class="sobre-texto">
        <h2>Quem Somos</h2>
        <p>
            No Aurora Café, acreditamos que cada xícara conta uma história.
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

  <section id="contate">
    <h2>Contato</h2>
    <p>Email: contato@auroracafe.com</p>
    <p>Telefone: (83) 99999-9999</p>
  </section>

  <footer>
    <p>© 2026 Aurora Café</p>
     <h2>Contato</h2>
    <p>Email: contato@auroracafe.com</p>
    <p>Telefone: (83) 99999-9999</p>
  </footer>
`;