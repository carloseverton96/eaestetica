// src/data/periodicos.js
import capaAtual from "../../public/capa-atual.jpeg";
import capaFev from "../../public/fevereiro.jpeg";
import capaJan from "../../public/janeiro.jpeg";
import capaMar from "../../public/marco.jpeg";

export const periodicos = [
  {
    id: "2025-03",
    mesAno: "Março de 2025",
    titulo: "Periódico Espírita Fraternité",
    descricao: "Nesta edição apresentamos temas fundamentais para o entendimento da Doutrina Espírita, trazendo reflexões atuais, estudos aprofundados, mensagens edificantes e conteúdos selecionados para seu crescimento moral e espiritual.",
    pdf: "/pdfs/periodico-marco-2025.pdf",
    capa: capaAtual
  },
  {
    id: "2025-02", 
    mesAno: "Novembro de 2025",
    titulo: "Periódico Espírita Fraternité",
    descricao: "Edição de Fevereiro de 2025 com artigos selecionados sobre a doutrina espírita.",
    pdf: "/pdfs/periodico-novembro-2025.pdf",
    capa: capaFev
  },
  {
    id: "2025-01",
    mesAno: "Dezembro de 2025", 
    titulo: "Periódico Espírita Fraternité",
    descricao: "Edição de Janeiro de 2025 com artigos selecionados sobre a doutrina espírita.",
    pdf: "/pdfs/periodico-dezembro-2025.pdf",
    capa: capaJan
  },
  {
    id: "2024-12",
    mesAno: "Janeiro de 2026",
    titulo: "Periódico Espírita Fraternité", 
    descricao: "Edição de Dezembro de 2024 com artigos selecionados sobre a doutrina espírita.",
    pdf: "/pdfs/periodico-janeiro-2026.pdf",
    capa: capaMar
  }
];