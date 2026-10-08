let intervalo;

function mostrarInformacao(card, nome, pagina, funcao, descricao) {
  const informacao = document.getElementById("informacao");
  const cards = document.querySelectorAll(".card");

  clearInterval(intervalo);

  cards.forEach(function (item) {
    item.classList.remove("ativo");
  });

  card.classList.add("ativo");

  informacao.innerHTML = `
    <strong>${nome}</strong><br>
    <b>Página desenvolvida:</b> ${pagina}<br>
    <b>Função no projeto:</b> ${funcao}<br><br>
    <span id="texto-digitado"></span>
  `;

  const texto = document.getElementById("texto-digitado");
  let i = 0;

  intervalo = setInterval(function () {
    texto.textContent += descricao[i];
    i++;
    if (i >= descricao.length) {
      clearInterval(intervalo);
    }
  }, 8);
}

/* ===== GUILHERME ===== */
function guilherme(card) {
  mostrarInformacao(
    card,
    "Guilherme Luciano Da Silva",
    "Comércio & Quiz",
    "Criação do design e desenvolvimento das páginas",
    "Guilherme Silva foi o principal responsável pelo desenvolvimento da estilização (CSS) e da marcação (HTML) da página Comércio e Tecnologia. Ele também contribuiu, juntamente com Andreus, para a criação do design da página antes do início da implementação do código.",
  );
}

/* ===== CAUÃ ===== */
function caua(card) {
  mostrarInformacao(
    card,
    "Cauã Wlodarczyk",
    "Inicial, Rotas & Fale Conosco",
    "Desenvolvimento das Páginas e atas do dia",
    "Cauã foi o principal responsável para o desenvolvimento da estilização (CSS) e da marcação (HTML) da página Inicial e Rotas. Ele também foi o responsável pelas atas, que contém as responsabilidades e os ausentes do dia.",
  );
}

/* ===== KAIKI ===== */
function kaiki(card) {
  mostrarInformacao(
    card,
    "Kaiki De Souza Moreira",
    "Poder & Login",
    "Gerenciamento do GitHub e desenvolvimento das páginas",
    "Kaiki foi o principal responsável para o desenvolvimento da estilização (CSS) e da marcação (HTML) da página Poder e Mercadorias. Ele também foi o coordenador da equipe, auxiliando e delegando as funções.",
  );
}

/* ===== ANDREUS ===== */
function andreus(card) {
  mostrarInformacao(
    card,
    "Andreus Cesar Coelho",
    "Sobre & Fontes",
    "Criação do design e desenvolvimento das páginas",
    "Andreus foi o principal responsável para o desenvolvimento da estilização (CSS) e da marcação (HTML) da página Sobre. Ele também foi o responsável pelas pesquisas do conteúdo do nosso site",
  );
}

/* ===== ANDRADE ===== */
function andrade(card) {
  mostrarInformacao(
    card,
    "Guilherme Andrade Queiroz",
    "Mercadorias & Tecnologia",
    "Criação do design e desenvolvimento das páginas",
    "Guilherme Queiroz foi o principal responsável para o desenvolvimento da estilização (CSS) e da marcação (HTML) da página Mercadorias e Tecnologia.",
  );
}
