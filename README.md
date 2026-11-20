<div align="center">

# 🟡 PAC-CRUZ

### Cruzadinha de Arquitetura Computacional

**O Pac-Man está preso dentro do gabinete. Resolva a cruzadinha para soltá-lo!**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=github&logoColor=white)

### 👉 [**Jogar agora**](https://SEU-USUARIO.github.io/arqcomp-cruzadinha/) 👈

</div>

---

## 📖 Sobre o projeto

Jogo de palavras cruzadas que roda direto no navegador, feito com **HTML, CSS e JavaScript puros** (sem frameworks e sem bibliotecas). Ele foi criado como a Atividade Avaliativa III da disciplina de **Arquitetura Computacional (Sprint 3)** e treina os termos da aula de Tópicos de Arquitetura Computacional.

Para escrever uma boa pista é preciso entender o conceito. Por isso, todas as pistas foram escritas com palavras próprias, sem entregar a resposta.

## 👾 A história

O Pac-Man ficou preso dentro do gabinete do fliperama, e a saída está trancada 🔒. A trava só abre quando as **16 palavras** da cruzadinha estiverem certas:

- cada palavra certa faz o Pac-Man avançar e comer uma bolinha;
- com 16 de 16, o gabinete acende em amarelo, o cadeado abre 🔓 e o Pac-Man foge pela porta de **SAÍDA**.

## 🎮 Como jogar

1. **Leia as pistas** numeradas, separadas em *Horizontais* e *Verticais*.
2. **Clique numa casa** do tabuleiro e digite as letras. Use letras sem acento e sem espaço (por exemplo, `MEMORIADEMASSA`).
3. **Troque a direção** clicando de novo na casa selecionada ou apertando a barra de espaço.
4. **Clique em Conferir** para ver quais palavras estão certas e quais estão erradas.
5. **Clique em Reiniciar** para limpar o tabuleiro, trancar o gabinete e jogar de novo.

### ⌨️ Atalhos

| Tecla / ação | O que faz |
|---|---|
| Letras `A-Z` | Preenche a casa e avança para a próxima da palavra |
| `← ↑ → ↓` | Move o cursor pelo tabuleiro |
| `Espaço` ou clique na casa ativa | Alterna entre horizontal e vertical |
| `Backspace` | Apaga a letra (em casa vazia, volta e apaga a anterior) |
| Clique numa pista | Seleciona a palavra correspondente |

### 🎨 Cores do tabuleiro

| Cor | Significado |
|---|---|
| 🟨 Amarelo | Casa onde está o cursor |
| 🟦 Azul escuro | Palavra selecionada |
| 🟩 Verde | Palavra certa depois de Conferir |
| 🟥 Vermelho | Casa preenchida de uma palavra errada |

Depois de Conferir, cada pista também mostra o texto **✓ certa**, **✗ errada** ou **✗ incompleta**, para não depender só da cor. O contador mostra o resultado, por exemplo `15 de 16 palavras`.

## ✨ Funcionalidades

- Tabuleiro de 14×16 com **16 palavras cruzadas entre si**
- Pistas numeradas em Horizontais e Verticais
- Digitação direta nas casas, com navegação por teclado
- Botão **Conferir** com resultado por palavra
- **Contador de acertos** (`X de 16 palavras`)
- Botão **Reiniciar**
- Tema de fliperama: gabinete, fantasmas, bolinhas e um Pac-Man animado só com CSS
- Progresso visual: o Pac-Man avança conforme as palavras certas e abre a saída no final
- Layout responsivo, que funciona no celular
- Foco visível e textos de status, pensando em acessibilidade

## 🔤 Palavras e pistas

### Horizontais

| Nº | Resposta | Pista |
|----|----------|-------|
| 1 | ROM | Memória não volátil gravada na fábrica, cujo conteúdo normalmente não pode ser alterado. |
| 5 | RAM | Memória principal volátil, que perde tudo ao desligar, onde ficam os aplicativos em uso. |
| 6 | CACHE | Memória pequena e veloz entre processador e RAM, que guarda dados usados com frequência. |
| 8 | ADDRESSBUS | Trilhas por onde a CPU informa qual posição da memória quer ler ou gravar. |
| 9 | DUALCORE | Processador com dois núcleos de execução no mesmo chip. |
| 11 | UC | Parte da CPU que dirige os demais componentes, dizendo o que cada um deve fazer. |
| 13 | MICROCONTROLADOR | Chip único com processador, memória e portas de E/S, usado em sistemas embarcados. |
| 15 | ULA | Circuito interno da CPU que faz somas, subtrações e comparações. |
| 16 | FLASH | Memória não volátil regravável, apagada em blocos, usada em pen drives e SSDs. |

### Verticais

| Nº | Resposta | Pista |
|----|----------|-------|
| 2 | MEMORIADEMASSA | Guarda arquivos e programas de forma permanente, com grande capacidade, como HD ou SSD. |
| 3 | REGISTRADORES | Pequenas memórias internas da CPU, as mais rápidas, que guardam dados em uso imediato. |
| 4 | DATABUS | Trilhas por onde trafegam os valores lidos ou gravados entre CPU, memória e periféricos. |
| 7 | QUADCORE | Processador com quatro núcleos de execução no mesmo chip. |
| 10 | EEPROM | Memória não volátil regravável em que cada byte pode ser alterado separadamente. |
| 12 | DMA | Técnica que permite a periféricos trocarem dados com a memória sem ocupar a CPU. |
| 14 | CPU | Componente que busca, decodifica e executa as instruções dos programas. |

## 🗂️ Estrutura do projeto

```
arqcomp-cruzadinha/
├── index.html   # estrutura da página
├── style.css    # visual do jogo (tema fliperama)
├── script.js    # lógica: tabuleiro, digitação, Conferir e Reiniciar
└── README.md    # este arquivo
```

## 🛠️ Como funciona por dentro

- As palavras ficam num array (`PALAVRAS`) com resposta, posição inicial, direção e pista.
- O JavaScript monta o tabuleiro e a numeração a partir desses dados, percorrendo a grade em ordem de leitura.
- Casas compartilhadas por duas palavras são criadas uma única vez, e é isso que faz o cruzamento funcionar.
- O **Conferir** compara, palavra por palavra, o que foi digitado com a resposta esperada.
- O número de acertos define a posição do Pac-Man (uma variável CSS) e quantas bolinhas já foram comidas. Com todas as palavras certas, o gabinete ganha a classe `livre` e a saída abre.

## 💻 Rodando localmente

Não precisa instalar nada:

```bash
git clone https://github.com/SEU-USUARIO/arqcomp-cruzadinha.git
cd arqcomp-cruzadinha
# abra o index.html no navegador
```

## 🚀 Publicação

O site é publicado com o **GitHub Pages**: *Settings → Pages → Deploy from a branch → `main` → `/ (root)`*.

## 🌱 Versionamento

As mensagens de commit seguem o padrão `tipo: descrição curta`:

| Tipo | Uso |
|---|---|
| `feat` | nova funcionalidade |
| `fix` | correção |
| `style` | visual |
| `docs` | documentação |

---

<div align="center">

Feito para a disciplina de **Arquitetura Computacional** · SPTECH

*Pac-Man é uma marca de seus respectivos donos. Aqui o personagem é desenhado só com CSS, em homenagem e para fins educacionais.*

</div>