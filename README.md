<div align="center">

# 🟡 PAC-CRUZ

### Cruzadinha de Arquitetura Computacional

**O Pac-Man está preso dentro do gabinete. Resolva a cruzadinha para soltá-lo!**

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


<div align="center">

Feito para a disciplina de **Arquitetura Computacional** · SPTECH

*Pac-Man é uma marca de seus respectivos donos. Aqui o personagem é desenhado só com CSS, em homenagem e para fins educacionais.*

</div>