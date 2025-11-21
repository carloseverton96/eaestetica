import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/index.css";

// COMPONENTES
import Carousel from "../components/Carousel";

// BANCO DE DADOS LOCAL
import inicioData from "../data/inicioData";

export default function Inicio() {
  const { edicaoAtual, edicoesAnteriores, carrossel } = inicioData;

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Periódico Espírita Fraternité - Edição Mensal</title>
        <meta
          name="description"
          content="Leia o Periódico Espírita Fraternité — edição mensal dedicada ao estudo, reflexão e difusão da Doutrina Espírita."
        />
        <meta
          name="keywords"
          content="espiritismo, doutrina espírita, periódico, kardecismo, estudo espírita"
        />
        <link rel="canonical" href="https://www.periodicofraternite.com" />
      </Helmet>

      {/* Conteúdo Principal */}
      <main className="container">

        {/* =================== SEÇÃO DO PERIÓDICO =================== */}
        <section id="periodico" className="periodico-mensal-section">
          <h1 className="titulo-principal">{edicaoAtual.titulo}</h1>
          <p className="periodico-sub">{edicaoAtual.subTitulo}</p>

          <div className="periodico-grid-2col">

            {/* CAPA */}
            <div className="periodico-col foto-col">
              <img
                src={edicaoAtual.capa}
                alt={`Capa da edição de ${edicaoAtual.mesAno}`}
                className="periodico-img"
              />
            </div>

            {/* INFORMAÇÕES */}
            <div className="periodico-col dados-col">
              <h2 className="periodico-edicao">{edicaoAtual.mesAno}</h2>

              <p className="periodico-descricao">
                {edicaoAtual.descricao}
              </p>

              <a
                className="bio-button"
                href={edicaoAtual.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                📘 Ler / Baixar Edição Mensal
              </a>

              {/* Link para leitura sem download */}
              <a
                className="bio-button leitura-online"
                href={`/periodico/${edicaoAtual.id}`}
              >
                👓 Ler Online no Navegador
              </a>
            </div>
          </div>
        </section>

        

        {/* =============== EDIÇÕES ANTERIORES =============== */}
        <section className="anteriores-section">
          <h2 className="anteriores-titulo">Edições Anteriores</h2>

          <div className="anteriores-grid">
            {edicoesAnteriores.map((item) => (
              <div key={item.id} className="anteriores-card">
                <p className="anteriores-mes">{item.mesAno}</p>

                <div className="anteriores-buttons">
                  <a
                    className="anteriores-link"
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📘 Baixar PDF
                  </a>

                  <a
                    className="anteriores-link leitura-online2"
                    href={`/periodico/${item.id}`}
                  >
                    👓 Ler Online
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
