const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A água é composta por dois átomos de hidrogênio e um de oxigênio.",
    alternativas: ["Verdadeiro", "Falso"],
  },
  {
    enunciado: "O Brasil fica na América do Norte.",
    alternativas: [" Verdadeiro", "Falso"],
  },
   {
    enunciado: "A água do mar é salgada por causa do sal dissolvido nela.",
    alternativas: ["Verdadeiro", "Falso"],
  },
   {
    enunciado: "O som viaja mais rápido no ar do que na água.",
    alternativas: ["Verdadeiro", "Falso"],
  },
   {
    enunciado: "As plantas produzem oxigênio através do processo de fotossíntese.",
    alternativas: ["Verdadeiro", "Falso"],
  },
];
