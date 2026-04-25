function filtrar(categoria) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (categoria === 'todos') {
      card.style.display = 'block';
    } else {
      card.style.display =
        card.dataset.categoria === categoria ? 'block' : 'none';
    }
  });
}

function buscar() {
  const input = document.getElementById("busca").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const nome = card.querySelector("h3").innerText.toLowerCase();

    if (nome.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}