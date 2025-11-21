import React from "react";
import "../css/index.css";
import { useParams } from "react-router-dom";
import { periodicos } from "../data/periodicos";

export default function Periodico() {
  const { id } = useParams();

  // REMOVA Number() - use id diretamente como string
  const periodico = periodicos.find((p) => p.id === id);

  if (!periodico) {
    return (
      <div className="periodico-container">
        <h2>Periódico não encontrado.</h2>
        <p>A edição solicitada não está disponível em nossa base de dados.</p>
        <a href="/" className="bio-button">
          ← Voltar para a Página Inicial
        </a>
      </div>
    );
  }

  return (
    <div className="periodico-container">
      {/* Use mesAno em vez de mes/ano separados */}
      <h1>{periodico.mesAno}</h1>
      <p className="periodico-descricao">{periodico.descricao}</p>

      <div className="pdf-viewer">
        <embed
          src={periodico.pdf}
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </div>
      
      <div className="download-alternativo">
        <a
          href={periodico.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bio-button"
        >
          📥 Baixar PDF
        </a>
        
        <a href="/" className="bio-button btn-outline">
          ← Voltar para Edições
        </a>
      </div>
    </div>
  );
}