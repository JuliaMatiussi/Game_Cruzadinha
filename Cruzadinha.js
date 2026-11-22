// ============================================================
// PAC-CRUZ · Cruzadinha de Arquitetura Computacional
// ============================================================

// ---------- DADOS DO JOGO ----------
// resposta: letras maiúsculas, sem acento e sem espaço
// nome: como o termo aparece na lista do professor
// extenso: significado da sigla (só para os cards)
// linha/coluna: onde a palavra começa no tabuleiro (começa em 0)
// direcao: "H" = horizontal, "V" = vertical
// pista: aparece na lista de pistas
// definicao: explicação que aparece no verso do card
// curiosidade: aparece em "Você sabia?" quando a pessoa acerta
const LINHAS = 14;
const COLUNAS = 16;

const PALAVRAS = [
  { resposta: "CPU", nome: "CPU", extenso: "Unidade Central de Processamento",
    linha: 10, coluna: 2, direcao: "V",
    pista: "Componente que busca, decodifica e executa as instruções dos programas.",
    definicao: "É o processador do computador. Busca as instruções na memória, decodifica e executa. É formada por ULA, UC e registradores.",
    curiosidade: "Um processador atual trabalha a vários gigahertz, ou seja, bilhões de ciclos por segundo." },

  { resposta: "ULA", nome: "ULA", extenso: "Unidade Lógica e Aritmética",
    linha: 12, coluna: 2, direcao: "H",
    pista: "Circuito interno da CPU que faz somas, subtrações e comparações.",
    definicao: "Parte da CPU que realiza as operações aritméticas (somar, subtrair) e as operações lógicas (E, OU, NÃO).",
    curiosidade: "As operações lógicas da ULA (E, OU, NÃO) são a base das decisões que um programa toma." },

  { resposta: "UC", nome: "UC (Unidade de Controle)", extenso: "Unidade de Controle",
    linha: 8, coluna: 8, direcao: "H",
    pista: "Parte da CPU que dirige os demais componentes, dizendo o que cada um deve fazer.",
    definicao: "Parte da CPU que coordena tudo: interpreta cada instrução e envia sinais de controle aos outros componentes.",
    curiosidade: "A UC não faz contas. Ela decodifica a instrução e manda a ULA, os registradores e a memória trabalharem." },

  { resposta: "REGISTRADORES", nome: "registradores", extenso: "",
    linha: 1, coluna: 6, direcao: "V",
    pista: "Pequenas memórias internas da CPU, as mais rápidas, que guardam dados em uso imediato.",
    definicao: "Pequenas memórias dentro da CPU, as mais rápidas do sistema. Guardam os dados e endereços que estão sendo usados agora.",
    curiosidade: "São a memória mais rápida do computador, mas existem poucos, e cada um guarda apenas alguns bytes." },

  { resposta: "RAM", nome: "RAM", extenso: "Random Access Memory (memória de acesso aleatório)",
    linha: 2, coluna: 10, direcao: "H",
    pista: "Memória principal volátil, que perde tudo ao desligar, onde ficam os aplicativos em uso.",
    definicao: "Memória principal de leitura e escrita. É volátil: perde o conteúdo sem energia. Guarda os programas e dados em execução.",
    curiosidade: "Por ser volátil, tudo o que está só na RAM se perde ao desligar. Por isso é preciso salvar os arquivos." },

  { resposta: "ROM", nome: "ROM", extenso: "Read Only Memory (memória somente de leitura)",
    linha: 0, coluna: 10, direcao: "H",
    pista: "Memória não volátil gravada na fábrica, cujo conteúdo normalmente não pode ser alterado.",
    definicao: "Memória não volátil gravada na fabricação, em geral só para leitura. Guarda programas básicos, como o de inicialização.",
    curiosidade: "É na ROM que costuma ficar o programa mais básico que roda quando o equipamento é ligado." },

  { resposta: "EEPROM", nome: "EEPROM", extenso: "Electrically Erasable Programmable ROM",
    linha: 7, coluna: 15, direcao: "V",
    pista: "Memória não volátil regravável em que cada byte pode ser alterado separadamente.",
    definicao: "Um tipo de ROM que pode ser apagada e regravada eletricamente, byte a byte, sem tirar o chip do circuito.",
    curiosidade: "Como dá para alterar um byte por vez, ela é boa para guardar pequenas configurações." },

  { resposta: "FLASH", nome: "Flash", extenso: "",
    linha: 13, coluna: 10, direcao: "H",
    pista: "Memória não volátil regravável, apagada em blocos, usada em pen drives e SSDs.",
    definicao: "Memória não volátil derivada da EEPROM, apagada e regravada em blocos, o que a torna rápida e barata.",
    curiosidade: "A memória Flash está em pen drives, cartões de memória e SSDs." },

  { resposta: "CACHE", nome: "cache", extenso: "",
    linha: 3, coluna: 0, direcao: "H",
    pista: "Memória pequena e veloz entre processador e RAM, que guarda dados usados com frequência.",
    definicao: "Memória pequena e muito rápida entre a CPU e a RAM. Guarda cópias do que é mais usado para diminuir a espera.",
    curiosidade: "A cache existe porque a RAM é bem mais lenta que a CPU. Ela guarda os dados mais usados bem perto do processador." },

  { resposta: "MEMORIADEMASSA", nome: "memória de massa (armazenamento)", extenso: "",
    linha: 0, coluna: 12, direcao: "V",
    pista: "Guarda arquivos e programas de forma permanente, com grande capacidade, como HD ou SSD.",
    definicao: "Armazenamento permanente e de grande capacidade, como HD, SSD e pen drive. Mantém os dados mesmo sem energia.",
    curiosidade: "Ao contrário da RAM, ela mantém os dados sem energia, mas é bem mais lenta." },

  { resposta: "DMA", nome: "DMA", extenso: "Direct Memory Access (acesso direto à memória)",
    linha: 9, coluna: 0, direcao: "V",
    pista: "Técnica que permite a periféricos trocarem dados com a memória sem ocupar a CPU.",
    definicao: "Técnica em que um controlador move dados entre periféricos e memória sem passar pela CPU, que fica livre para outras tarefas.",
    curiosidade: "Com DMA, a CPU só inicia a transferência. Enquanto os dados se movem, ela pode executar outras tarefas." },

  { resposta: "ADDRESSBUS", nome: "address bus (barramento de endereço)", extenso: "",
    linha: 5, coluna: 1, direcao: "H",
    pista: "Trilhas por onde a CPU informa qual posição da memória quer ler ou gravar.",
    definicao: "Conjunto de linhas, em geral de mão única, por onde a CPU envia o endereço da posição de memória ou do dispositivo que quer acessar.",
    curiosidade: "A largura desse barramento limita a memória que a CPU consegue endereçar. Com 32 bits são cerca de 4 GB." },

  { resposta: "DATABUS", nome: "data bus (barramento de dados)", extenso: "",
    linha: 2, coluna: 1, direcao: "V",
    pista: "Trilhas por onde trafegam os valores lidos ou gravados entre CPU, memória e periféricos.",
    definicao: "Conjunto de linhas, de duas vias, por onde os dados trafegam entre a CPU, a memória e os dispositivos.",
    curiosidade: "Quanto mais larga a via, mais bits viajam de uma vez. Um barramento de 64 bits leva 8 bytes por transferência." },

  { resposta: "MICROCONTROLADOR", nome: "microcontrolador", extenso: "",
    linha: 10, coluna: 0, direcao: "H",
    pista: "Chip único com processador, memória e portas de E/S, usado em sistemas embarcados.",
    definicao: "Um computador completo em um único chip, com CPU, memória e portas de entrada e saída. É usado em sistemas embarcados.",
    curiosidade: "Eletrodomésticos, brinquedos, carros e placas como o Arduino usam microcontroladores." },

  { resposta: "DUALCORE", nome: "dual core", extenso: "",
    linha: 7, coluna: 0, direcao: "H",
    pista: "Processador com dois núcleos de execução no mesmo chip.",
    definicao: "Processador com dois núcleos (cores) no mesmo chip, cada um capaz de executar instruções.",
    curiosidade: "Com dois núcleos, duas tarefas podem rodar ao mesmo tempo de verdade, uma em cada núcleo." },

  { resposta: "QUADCORE", nome: "quad core", extenso: "",
    linha: 4, coluna: 9, direcao: "V",
    pista: "Processador com quatro núcleos de execução no mesmo chip.",
    definicao: "Processador com quatro núcleos no mesmo chip, que podem executar tarefas em paralelo.",
    curiosidade: "Quatro núcleos só ajudam de verdade se o programa for feito para dividir o trabalho entre eles." },
];

// ---------- ESTADO ----------
const casas = {};          // "linha,coluna" -> { letra, div, input, palavras: [] }
let palavraAtiva = null;   // palavra que está selecionada
let direcao = "H";         // direção atual de digitação
let chaveAtual = null;     // casa com o cursor
const bolinhas = [];       // uma bolinha para cada palavra

const MENSAGEM_INICIAL = "READY! O Pac-Man está preso no gabinete. Resolva a cruzadinha para soltá-lo.";
const CURIOSIDADE_INICIAL = "Acerte uma palavra para descobrir uma curiosidade sobre ela.";

// ---------- ELEMENTOS DA PÁGINA ----------
const tabuleiro = document.querySelector("#tabuleiro");
const contador = document.querySelector("#contador");
const mensagem = document.querySelector("#mensagem");
const listaH = document.querySelector("#pistasH");
const listaV = document.querySelector("#pistasV");
const gabinete = document.querySelector("#gabinete");
const pistaPac = document.querySelector("#pistaPac");
const pacman = document.querySelector("#pacman");
const cadeado = document.querySelector("#cadeado");
const vocesabia = document.querySelector("#voceSabia");
const vocesabiaTitulo = document.querySelector("#voceSabiaTitulo");
const vocesabiaTexto = document.querySelector("#voceSabiaTexto");
const dialogCards = document.querySelector("#dialogCards");
const gradeCards = document.querySelector("#gradeCards");

// ============================================================
// 1) Preparar os dados
// ============================================================
function chave(linha, coluna) {
  return linha + "," + coluna;
}

function prepararPalavras() {
  PALAVRAS.forEach(function (palavra, indice) {
    palavra.celulas = [];
    palavra.estado = "";   // "", "certa", "errada" ou "incompleta"
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
// 2) Desenhar tabuleiro, pistas, bolinhas e cards
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

function criarBolinhas() {
  for (let i = 0; i < PALAVRAS.length; i++) {
    const b = document.createElement("span");
    b.className = "bolinha";
    pistaPac.appendChild(b);
    bolinhas.push(b);
  }
}

// Cards de estudo: um card para cada termo da lista (mesma ordem do professor)
function criarCards() {
  PALAVRAS.forEach(function (palavra, i) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-pressed", "false");

    const interno = document.createElement("div");
    interno.className = "card-interno";

    // frente: só o termo
    const frente = document.createElement("div");
    frente.className = "card-face card-frente";

    const numero = document.createElement("span");
    numero.className = "card-numero";
    numero.textContent = "#" + (i + 1);

    const termo = document.createElement("span");
    termo.className = "card-termo";
    termo.textContent = palavra.nome;

    const dica = document.createElement("span");
    dica.className = "card-dica";
    dica.textContent = "clique para virar";

    frente.appendChild(numero);
    frente.appendChild(termo);
    frente.appendChild(dica);

    // verso: o que o termo significa
    const verso = document.createElement("div");
    verso.className = "card-face card-verso";
    verso.setAttribute("aria-hidden", "true");

    const tituloVerso = document.createElement("span");
    tituloVerso.className = "card-titulo-verso";
    tituloVerso.textContent = palavra.nome;
    verso.appendChild(tituloVerso);

    if (palavra.extenso !== "") {
      const extenso = document.createElement("span");
      extenso.className = "card-extenso";
      extenso.textContent = palavra.extenso;
      verso.appendChild(extenso);
    }

    const definicao = document.createElement("span");
    definicao.className = "card-definicao";
    definicao.textContent = palavra.definicao;
    verso.appendChild(definicao);

    interno.appendChild(frente);
    interno.appendChild(verso);
    card.appendChild(interno);

    card.addEventListener("click", function () {
      const virado = !card.classList.contains("virado");
      card.classList.toggle("virado", virado);
      card.setAttribute("aria-pressed", virado ? "true" : "false");
      frente.setAttribute("aria-hidden", virado ? "true" : "false");
      verso.setAttribute("aria-hidden", virado ? "false" : "true");
    });

    palavra.card = card;
    gradeCards.appendChild(card);
  });
}

function abrirCards() {
  // marca os cards das palavras que a pessoa já acertou
  PALAVRAS.forEach(function (p) {
    p.card.classList.toggle("resolvida", p.estado === "certa");
  });
  if (typeof dialogCards.showModal === "function") {
    dialogCards.showModal();
  } else {
    dialogCards.setAttribute("open", "");
  }
}

function fecharCards() {
  if (typeof dialogCards.close === "function") {
    dialogCards.close();
  } else {
    dialogCards.removeAttribute("open");
  }
}

function desvirarCards() {
  PALAVRAS.forEach(function (p) {
    if (p.card.classList.contains("virado")) {
      p.card.click();
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

    // confere na hora as palavras que passam por esta casa
    verificarCasa(k);

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
    verificarCasa(anterior);
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
// 5) Verificação (na hora e pelo botão Conferir)
// ============================================================

// Compara o que foi digitado em uma palavra com a resposta.
// Devolve "" (ainda faltam letras), "certa" ou "errada".
function estadoDaPalavra(palavra) {
  let digitado = "";
  palavra.celulas.forEach(function (k) {
    digitado = digitado + casas[k].input.value;
  });

  if (digitado.length < palavra.resposta.length) {
    return "";
  }
  return digitado === palavra.resposta ? "certa" : "errada";
}

// Atualiza o estado de uma palavra e mostra a curiosidade se ela acabou de ficar certa
function verificarPalavra(palavra) {
  const anterior = palavra.estado;
  palavra.estado = estadoDaPalavra(palavra);

  if (palavra.estado === "certa" && anterior !== "certa") {
    mostrarCuriosidade(palavra);
  }
}

// Confere na hora as palavras que passam por uma casa
function verificarCasa(k) {
  casas[k].palavras.forEach(function (indice) {
    verificarPalavra(PALAVRAS[indice]);
  });
  redesenharMarcas();
  atualizarPlacar(false);
}

function contarAcertos() {
  return PALAVRAS.filter(function (p) {
    return p.estado === "certa";
  }).length;
}

// Pinta casas e pistas de acordo com o estado de cada palavra
function redesenharMarcas() {
  Object.keys(casas).forEach(function (k) {
    casas[k].div.classList.remove("certa", "errada");
  });

  PALAVRAS.forEach(function (p) {
    p.li.classList.remove("certa", "errada");
    p.status.textContent = "";

    if (p.estado === "certa") {
      p.li.classList.add("certa");
      p.status.textContent = "✓ certa";
      p.celulas.forEach(function (k) {
        casas[k].div.classList.add("certa");
      });
    } else if (p.estado === "errada") {
      p.li.classList.add("errada");
      p.status.textContent = "✗ errada";
    } else if (p.estado === "incompleta") {
      p.li.classList.add("errada");
      p.status.textContent = "✗ incompleta";
    }
  });

  // casas preenchidas de palavras erradas ficam vermelhas
  // (a não ser que também façam parte de uma palavra certa)
  PALAVRAS.forEach(function (p) {
    if (p.estado !== "errada" && p.estado !== "incompleta") return;
    p.celulas.forEach(function (k) {
      const casa = casas[k];
      if (casa.input.value !== "" && !casa.div.classList.contains("certa")) {
        casa.div.classList.add("errada");
      }
    });
  });
}

// Contador, Pac-Man e mensagem
function atualizarPlacar(aposConferir) {
  const total = PALAVRAS.length;
  const acertos = contarAcertos();

  contador.textContent = acertos + " de " + total + " palavras";
  atualizarProgresso(acertos);

  if (acertos === total) {
    mensagem.textContent = "O Pac-Man escapou! Você destravou o gabinete.";
  } else if (acertos === 0) {
    mensagem.textContent = aposConferir
      ? "O gabinete continua trancado. Resolva a cruzadinha para soltar o Pac-Man."
      : MENSAGEM_INICIAL;
  } else {
    const faltam = total - acertos;
    mensagem.textContent = "O Pac-Man comeu " + acertos + " bolinhas. Faltam " + faltam + " palavras para destravar o gabinete.";
  }
}

function mostrarCuriosidade(palavra) {
  vocesabiaTitulo.textContent = "Você sabia? · " + palavra.nome;
  vocesabiaTexto.textContent = palavra.curiosidade;

  vocesabia.classList.add("nova");
  setTimeout(function () {
    vocesabia.classList.remove("nova");
  }, 900);
}

// Botão Conferir: mostra o resultado de todas as palavras
function conferir() {
  PALAVRAS.forEach(function (p) {
    verificarPalavra(p);
    if (p.estado === "") {
      p.estado = "incompleta";
    }
  });

  redesenharMarcas();
  atualizarPlacar(true);
}

// ============================================================
// 6) Pac-Man: posição, bolinhas e saída
// ============================================================
function atualizarProgresso(acertos) {
  const total = PALAVRAS.length;

  // o Pac-Man anda até a posição do progresso
  pacman.style.setProperty("--prog", acertos / total);

  // as bolinhas por onde ele passou somem, uma depois da outra
  bolinhas.forEach(function (b, i) {
    if (i < acertos) {
      b.style.transitionDelay = ((i + 1) / acertos) * 1.1 + "s";
      b.classList.add("comida");
    } else {
      b.style.transitionDelay = "0s";
      b.classList.remove("comida");
    }
  });

  // todas certas: o gabinete abre
  const livre = acertos === total;
  gabinete.classList.toggle("livre", livre);
  cadeado.textContent = livre ? "🔓" : "🔒";
}

// ============================================================
// 7) Reiniciar
// ============================================================
function reiniciar() {
  Object.keys(casas).forEach(function (k) {
    casas[k].input.value = "";
    casas[k].div.classList.remove("ativa", "atual");
  });
  PALAVRAS.forEach(function (p) {
    p.estado = "";
    p.li.classList.remove("destacada");
  });

  if (document.activeElement) {
    document.activeElement.blur();
  }

  palavraAtiva = null;
  chaveAtual = null;
  direcao = "H";

  vocesabiaTitulo.textContent = "Você sabia?";
  vocesabiaTexto.textContent = CURIOSIDADE_INICIAL;

  redesenharMarcas();
  atualizarPlacar(false);
}

// ============================================================
// 8) Começar
// ============================================================
prepararPalavras();
desenharTabuleiro();
desenharPistas();
criarBolinhas();
criarCards();
atualizarPlacar(false);
vocesabiaTexto.textContent = CURIOSIDADE_INICIAL;

document.querySelector("#btnConferir").addEventListener("click", conferir);
document.querySelector("#btnReiniciar").addEventListener("click", reiniciar);
document.querySelector("#btnCards").addEventListener("click", abrirCards);
document.querySelector("#btnFecharCards").addEventListener("click", fecharCards);
document.querySelector("#btnDesvirar").addEventListener("click", desvirarCards);

// Clicar fora do quadro (no fundo escuro) também fecha os cards
dialogCards.addEventListener("click", function (e) {
  if (e.target === dialogCards) {
    fecharCards();
  }
});