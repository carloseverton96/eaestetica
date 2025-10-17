import React from "react";
import { Helmet } from "react-helmet-async";
import "../index.css";
import "../Servicos.css";

export default function Servicos() {
  return (
    <>
      {/* SEO / Cabeçalho */}
      <Helmet>
        <title>EA Estética - Nossos Serviços</title>
        <meta
          name="description"
          content="Conheça nossos serviços corporais e faciais personalizados para realçar sua beleza e bem-estar."
        />
        <meta
          name="keywords"
          content="estética corporal, estética facial, limpeza de pele, drenagem linfática, rejuvenescimento, bem-estar"
        />
        <link rel="canonical" href="https://www.site.com/servicos" />
      </Helmet>

      <main className="container">
        <section id="servicos" className="servicos-section">
          <h2 className="servicos-titulo">Nossos Serviços</h2>
          <p className="servicos-intro">
            Oferecemos uma linha completa de tratamentos estéticos faciais e corporais, realizados com
            técnicas avançadas e profissionais qualificados para realçar sua beleza natural e promover bem-estar.
          </p>

          <div className="servicos-grid">
            <div className="servico-card">
              <h3>💆‍♀️ Tratamentos Faciais</h3>
              <ul>
                <li>Limpeza de pele profunda</li>
                <li>Revitalização e hidratação facial</li>
                <li>Peeling químico e mecânico</li>
                <li>Microagulhamento</li>
                <li>Tratamento para acne e manchas</li>
                <li>Rejuvenescimento facial</li>
              </ul>
            </div>

            <div className="servico-card">
              <h3>💪 Tratamentos Corporais</h3>
              <ul>
                <li>Drenagem linfática manual</li>
                <li>Massagem modeladora</li>
                <li>Tratamento para celulite e flacidez</li>
                <li>Redução de medidas</li>
                <li>Banho de lua e esfoliação corporal</li>
                <li>Terapias relaxantes e bem-estar</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
