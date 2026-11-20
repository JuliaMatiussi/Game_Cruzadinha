# Game_Cruzadinha

# 🧩 Cruzadinha de Arquitetura Computacional

**Descubra 16 termos de hardware lendo apenas as pistas.**

### 👉 [**Jogar agora**](https://SEU-USUARIO.github.io/arqcomp-cruzadinha/) 👈



## 📖 Sobre o projeto

Jogo de palavras cruzadas que roda direto no navegador, feito com **HTML, CSS e JavaScript puros** (sem frameworks e sem bibliotecas). Ele foi criado como a Atividade Avaliativa III da disciplina de **Arquitetura Computacional (Sprint 3)** e treina os termos da aula de Tópicos de Arquitetura Computacional.

Para escrever uma boa pista é preciso entender o conceito. Por isso, todas as pistas foram escritas com palavras próprias, sem entregar a resposta.

## 🎮 Como jogar

1. **Leia as pistas** numeradas, separadas em *Horizontais* e *Verticais*.
2. **Clique numa casa** do tabuleiro e digite as letras. Use letras sem acento e sem espaço (por exemplo, `MEMORIADEMASSA`).
3. **Troque a direção** clicando de novo na casa selecionada ou apertando a barra de espaço.
4. **Clique em Conferir** para ver quais palavras estão certas e quais estão erradas.
5. **Clique em Reiniciar** para limpar o tabuleiro e jogar de novo.

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
| 🟦 Azul claro | Palavra selecionada |
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
├── style.css    # visual do jogo
├── script.js    # lógica: tabuleiro, digitação, Conferir e Reiniciar
└── README.md    # este arquivo
```

## 🛠️ Como funciona por dentro

- As palavras ficam num array (`PALAVRAS`) com resposta, posição inicial, direção e pista.
- O JavaScript monta o tabuleiro e a numeração a partir desses dados, percorrendo a grade em ordem de leitura.
- Casas compartilhadas por duas palavras são criadas uma única vez, e é isso que faz o cruzamento funcionar.
- O **Conferir** compara, palavra por palavra, o que foi digitado com a resposta esperada.

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


Feito para a disciplina de **Arquitetura Computacional** · SPTECH
