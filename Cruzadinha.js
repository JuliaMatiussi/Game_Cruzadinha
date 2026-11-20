// ============================================================
// Cruzadinha de Arquitetura Computacional
// ============================================================

// ---------- DADOS DO JOGO ----------
// resposta: letras maiúsculas, sem acento e sem espaço
// linha/coluna: onde a palavra começa no tabuleiro (começa em 0)
// direcao: "H" = horizontal, "V" = vertical
const LINHAS = 14;
const COLUNAS = 16;

const PALAVRAS = [
  { resposta: "CPU", linha: 10, coluna: 2, direcao: "V",
    pista: "Componente que busca, decodifica e executa as instruções dos programas." },
  { resposta: "ULA", linha: 12, coluna: 2, direcao: "H",
    pista: "Circuito interno da CPU que faz somas, subtrações e comparações." },
  { resposta: "UC", linha: 8, coluna: 8, direcao: "H",
    pista: "Parte da CPU que dirige os demais componentes, dizendo o que cada um deve fazer." },
  { resposta: "REGISTRADORES", linha: 1, coluna: 6, direcao: "V",
    pista: "Pequenas memórias internas da CPU, as mais rápidas, que guardam dados em uso imediato." },
  { resposta: "RAM", linha: 2, coluna: 10, direcao: "H",
    pista: "Memória principal volátil, que perde tudo ao desligar, onde ficam os aplicativos em uso." },
  { resposta: "ROM", linha: 0, coluna: 10, direcao: "H",
    pista: "Memória não volátil gravada na fábrica, cujo conteúdo normalmente não pode ser alterado." },
  { resposta: "EEPROM", linha: 7, coluna: 15, direcao: "V",
    pista: "Memória não volátil regravável em que cada byte pode ser alterado separadamente." },
  { resposta: "FLASH", linha: 13, coluna: 10, direcao: "H",
    pista: "Memória não volátil regravável, apagada em blocos, usada em pen drives e SSDs." },
  { resposta: "CACHE", linha: 3, coluna: 0, direcao: "H",
    pista: "Memória pequena e veloz entre processador e RAM, que guarda dados usados com frequência." },
  { resposta: "MEMORIADEMASSA", linha: 0, coluna: 12, direcao: "V",
    pista: "Guarda arquivos e programas de forma permanente, com grande capacidade, como HD ou SSD." },
  { resposta: "DMA", linha: 9, coluna: 0, direcao: "V",
    pista: "Técnica que permite a periféricos trocarem dados com a memória sem ocupar a CPU." },
  { resposta: "ADDRESSBUS", linha: 5, coluna: 1, direcao: "H",
    pista: "Trilhas por onde a CPU informa qual posição da memória quer ler ou gravar." },
  { resposta: "DATABUS", linha: 2, coluna: 1, direcao: "V",
    pista: "Trilhas por onde trafegam os valores lidos ou gravados entre CPU, memória e periféricos." },
  { resposta: "MICROCONTROLADOR", linha: 10, coluna: 0, direcao: "H",
    pista: "Chip único com processador, memória e portas de E/S, usado em sistemas embarcados." },
  { resposta: "DUALCORE", linha: 7, coluna: 0, direcao: "H",
    pista: "Processador com dois núcleos de execução no mesmo chip." },
  { resposta: "QUADCORE", linha: 4, coluna: 9, direcao: "V",
    pista: "Processador com quatro núcleos de execução no mesmo chip." },
];

// ---------- ESTADO ----------
const casas = {};          // "linha,coluna" -> { letra, div, input, palavras: [] }
let palavraAtiva = null;   // palavra que está selecionada
let direcao = "H";         // direção atual de digitação
let chaveAtual = null;     // casa com o cursor
let jaConferiu = false;    // true depois de clicar em Conferir

// ---------- ELEMENTOS DA PÁGINA ----------
const tabuleiro = document.querySelector("#tabuleiro");
const contador = document.querySelector("#contador");
const mensagem = document.querySelector("#mensagem");
const listaH = document.querySelector("#pistasH");
const listaV = document.querySelector("#pistasV");

// ============================================================
// 1) Preparar os dados
// ============================================================
function chave(linha, coluna) {
  return linha + "," + coluna;
}

function prepararPalavras() {
  PALAVRAS.forEach(function (palavra, indice) {
    palavra.celulas = [];
    for (let i = 0; i < palavra.resposta.length; i++) {
      let linha = palavra.linha;
      let coluna = palavra.coluna;
      if (palavra.direcao === "H") {
        coluna = coluna + i;
      } else {
        linha = linha + i;
      }
      const k = chave(linha, coluna);
      if (!casas[k]) {
        casas[k] = { letra: palavra.resposta[i], palavras: [] };
      }
      casas[k].palavras.push(indice);
      palavra.celulas.push(k);
    }
  });

  // Numeração: percorre o tabuleiro em ordem de leitura
  let numero = 0;
  for (let linha = 0; linha < LINHAS; linha++) {
    for (let coluna = 0; coluna < COLUNAS; coluna++) {
      const comecam = PALAVRAS.filter(function (p) {
        return p.linha === linha && p.coluna === coluna;
      });
      if (comecam.length > 0) {
        numero++;
        comecam.forEach(function (p) {
          p.numero = numero;
        });
        casas[chave(linha, coluna)].numero = numero;
      }
    }
  }
}

// ============================================================
// 2) Desenhar tabuleiro e pistas
// ============================================================
function desenharTabuleiro() {
  tabuleiro.style.gridTemplateColumns = "repeat(" + COLUNAS + ", var(--casa))";

  for (let linha = 0; linha < LINHAS; linha++) {
    for (let coluna = 0; coluna < COLUNAS; coluna++) {
      const k = chave(linha, coluna);
      const casa = casas[k];

      if (!casa) {
        const vazia = document.createElement("div");
        vazia.className = "vazia";
        tabuleiro.appendChild(vazia);
        continue;
      }

      const div = document.createElement("div");
      div.className = "casa";

      if (casa.numero) {
        const n = document.createElement("span");
        n.className = "casa-numero";
        n.textContent = casa.numero;
        div.appendChild(n);
      }

      const input = document.createElement("input");
      input.className = "casa-letra";
      input.type = "text";
      input.maxLength = 1;
      input.autocomplete = "off";
      input.autocapitalize = "characters";
      input.spellcheck = false;
      input.setAttribute("aria-label", "Linha " + (linha + 1) + ", coluna " + (coluna + 1));
      div.appendChild(input);

      casa.div = div;
      casa.input = input;
      tabuleiro.appendChild(div);

      ligarEventos(k);
    }
  }
}

function desenharPistas() {
  const ordenadas = PALAVRAS.slice().sort(function (a, b) {
    return a.numero - b.numero;
  });

  ordenadas.forEach(function (palavra) {
    const li = document.createElement("li");
    li.className = "pista";

    const num = document.createElement("span");
    num.className = "pista-numero";
    num.textContent = palavra.numero + ".";

    const texto = document.createElement("span");
    texto.className = "pista-texto";
    texto.textContent = palavra.pista;

    const status = document.createElement("span");
    status.className = "pista-status";

    li.appendChild(num);
    li.appendChild(texto);
    li.appendChild(status);

    li.addEventListener("click", function () {
      direcao = palavra.direcao;
      casas[palavra.celulas[0]].input.focus();
    });

    palavra.li = li;
    palavra.status = status;

    if (palavra.direcao === "H") {
      listaH.appendChild(li);
    } else {
      listaV.appendChild(li);
    }
  });
}

// ============================================================
// 3) Eventos das casas (digitar, setas, apagar, clicar)
// ============================================================
function ligarEventos(k) {
  const casa = casas[k];
  const input = casa.input;
  let jaEstavaAtiva = false;

  // Quando a casa recebe o cursor, seleciona a palavra
  input.addEventListener("focus", function () {
    chaveAtual = k;
    escolherPalavra(k);
    input.select();
  });

  // Clicar de novo na mesma casa troca a direção
  input.addEventListener("mousedown", function () {
    jaEstavaAtiva = document.activeElement === input;
  });
  input.addEventListener("click", function () {
    if (jaEstavaAtiva) {
      alternarDirecao(k);
    }
    input.select();
  });

  // Digitou uma letra
  input.addEventListener("input", function () {
    // tira acentos e qualquer coisa que não seja letra
    const limpo = input.value.normalize("NFD").replace(/[^A-Za-z]/g, "");
    input.value = limpo.slice(-1).toUpperCase();

    apagarMarcas();

    if (input.value !== "") {
      irParaProxima(k);
    }
  });

  // Teclas especiais
  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      direcao = "H";
      moverPara(k, 0, 1);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      direcao = "H";
      moverPara(k, 0, -1);
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      direcao = "V";
      moverPara(k, 1, 0);
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      direcao = "V";
      moverPara(k, -1, 0);
      e.preventDefault();
    } else if (e.key === "Backspace" && input.value === "") {
      irParaAnterior(k);
      e.preventDefault();
    } else if (e.key === " ") {
      alternarDirecao(k);
      e.preventDefault();
    }
  });
}

function moverPara(k, dLinha, dColuna) {
  const partes = k.split(",");
  const destino = casas[chave(Number(partes[0]) + dLinha, Number(partes[1]) + dColuna)];
  if (destino) {
    destino.input.focus();
  }
}

function irParaProxima(k) {
  if (!palavraAtiva) return;
  const posicao = palavraAtiva.celulas.indexOf(k);
  const proxima = palavraAtiva.celulas[posicao + 1];
  if (proxima) {
    casas[proxima].input.focus();
  }
}

function irParaAnterior(k) {
  if (!palavraAtiva) return;
  const posicao = palavraAtiva.celulas.indexOf(k);
  const anterior = palavraAtiva.celulas[posicao - 1];
  if (anterior) {
    casas[anterior].input.value = "";
    apagarMarcas();
    casas[anterior].input.focus();
  }
}

// ============================================================
// 4) Palavra ativa e destaque
// ============================================================
function palavraDaCasa(k, dir) {
  const indices = casas[k].palavras;
  for (let i = 0; i < indices.length; i++) {
    if (PALAVRAS[indices[i]].direcao === dir) {
      return PALAVRAS[indices[i]];
    }
  }
  return null;
}

function escolherPalavra(k) {
  let palavra = palavraDaCasa(k, direcao);
  if (!palavra) {
    // a casa só tem palavra na outra direção
    direcao = direcao === "H" ? "V" : "H";
    palavra = palavraDaCasa(k, direcao);
  }
  palavraAtiva = palavra;
  destacar();
}

function alternarDirecao(k) {
  const outra = direcao === "H" ? "V" : "H";
  if (palavraDaCasa(k, outra)) {
    direcao = outra;
    escolherPalavra(k);
  }
}

function destacar() {
  Object.keys(casas).forEach(function (k) {
    casas[k].div.classList.remove("ativa", "atual");
  });
  PALAVRAS.forEach(function (p) {
    p.li.classList.remove("destacada");
  });

  if (!palavraAtiva) return;

  palavraAtiva.celulas.forEach(function (k) {
    casas[k].div.classList.add("ativa");
  });
  casas[chaveAtual].div.classList.add("atual");
  palavraAtiva.li.classList.add("destacada");
}

// ============================================================
// 5) Conferir
// ============================================================
function apagarMarcas() {
  if (!jaConferiu) return;
  jaConferiu = false;

  Object.keys(casas).forEach(function (k) {
    casas[k].div.classList.remove("certa", "errada");
  });
  PALAVRAS.forEach(function (p) {
    p.li.classList.remove("certa", "errada");
    p.status.textContent = "";
  });
  contador.textContent = "– de " + PALAVRAS.length + " palavras";
  mensagem.textContent = "";
}

function conferir() {
  let acertos = 0;

  // limpa o que havia antes
  jaConferiu = true;
  apagarMarcas();
  jaConferiu = true;

  // primeiro as palavras certas (para pintar de verde)
  PALAVRAS.forEach(function (palavra) {
    let digitado = "";
    let vazias = 0;
    palavra.celulas.forEach(function (k) {
      const letra = casas[k].input.value;
      digitado = digitado + letra;
      if (letra === "") vazias++;
    });

    if (digitado === palavra.resposta) {
      acertos++;
      palavra.li.classList.add("certa");
      palavra.status.textContent = "✓ certa";
      palavra.celulas.forEach(function (k) {
        casas[k].div.classList.add("certa");
      });
    } else {
      palavra.li.classList.add("errada");
      palavra.status.textContent = vazias > 0 ? "✗ incompleta" : "✗ errada";
      palavra.errada = true;
    }
  });

  // depois pinta de vermelho as casas preenchidas das palavras erradas
  PALAVRAS.forEach(function (palavra) {
    if (!palavra.errada) return;
    palavra.celulas.forEach(function (k) {
      const casa = casas[k];
      if (casa.input.value !== "" && !casa.div.classList.contains("certa")) {
        casa.div.classList.add("errada");
      }
    });
    palavra.errada = false;
  });

  contador.textContent = acertos + " de " + PALAVRAS.length + " palavras";

  if (acertos === PALAVRAS.length) {
    mensagem.textContent = "Parabéns! Você completou a cruzadinha.";
  } else {
    mensagem.textContent = "";
  }
}

// ============================================================
// 6) Reiniciar
// ============================================================
function reiniciar() {
  Object.keys(casas).forEach(function (k) {
    casas[k].input.value = "";
    casas[k].div.classList.remove("certa", "errada", "ativa", "atual");
  });
  PALAVRAS.forEach(function (p) {
    p.li.classList.remove("certa", "errada", "destacada");
    p.status.textContent = "";
  });

  if (document.activeElement) {
    document.activeElement.blur();
  }

  jaConferiu = false;
  palavraAtiva = null;
  chaveAtual = null;
  direcao = "H";
  contador.textContent = "0 de " + PALAVRAS.length + " palavras";
  mensagem.textContent = "";
}

// ============================================================
// 7) Começar
// ============================================================
prepararPalavras();
desenharTabuleiro();
desenharPistas();
contador.textContent = "0 de " + PALAVRAS.length + " palavras";

document.querySelector("#btnConferir").addEventListener("click", conferir);
document.querySelector("#btnReiniciar").addEventListener("click", reiniciar);