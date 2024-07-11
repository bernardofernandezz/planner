//object
const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-08 10:00"),
  finalizada: true,
};

// lista, array, vetor []
const atividades = [
  atividade,
  {
    nome: "Academia em grupo",
    data: new Date("2024-07-09 12:00"),
    finalizada: false,
  },
  {
    nome: "Gamming session",
    data: new Date("2024-07-09 16:00"),
    finalizada: true,
  },
];

// arrow function
const criarItemDeAtividade = (atividade) => {
  return `<div>
        <input type="checkbox" />
        <span>Academia em grupo</span>
        <time>Sábado, 18 de abril às 08:00h</time>
      </div>`;
};

const section = document.querySelector("section");
section.innerHTML = criarItemDeAtividade();
