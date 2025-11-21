// src/data/inicioData.js
import { periodicos } from './periodicos';

// A edição atual é a primeira da lista
const edicaoAtual = periodicos[0];

// Edições anteriores são as demais
const edicoesAnteriores = periodicos.slice(1);

const inicioData = {
  edicaoAtual,
  
  carrossel: [
    {
      id: 1,
      titulo: "Allan Kardec — O Codificador",
      texto: "Conheça aspectos essenciais da vida e da obra de Kardec.",
      imagem: "/carrossel/kardec.jpg",
      link: "/artigos/kardec",
    },
    {
      id: 2,
      titulo: "Estudo do Livro dos Espíritos", 
      texto: "Uma jornada de aprendizado contínuo e esclarecedor.",
      imagem: "/carrossel/livro-espiritos.jpg",
      link: "/estudos/livro-dos-espiritos",
    },
    {
      id: 3,
      titulo: "Mensagens de Luz",
      texto: "Seleção de mensagens edificantes para harmonia interior.",
      imagem: "/carrossel/mensagens.jpg", 
      link: "/mensagens",
    },
  ],

  edicoesAnteriores,
};

export default inicioData;