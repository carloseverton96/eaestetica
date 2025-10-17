import React from "react";
import "../Biografias.css";
import "../index.css";
import "../Servicos.css";
import "../contatos.css";
import { motion } from "framer-motion";

export default function Biografias() {
  return (
    <div className="bio-container">
      <section className="bio-section">
        <motion.div
          className="bio-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/everton.jpg"
            alt="Carlos Everton Mangueira"
            className="bio-image"
          />
          <div className="bio-text">
            <h2>Carlos Éverton Alves Mangueira</h2>
            <p className="bio-subtitle">Biomédico | Coordenador de Vigilância Sanitária</p>

            <p>
              Biomédico formado pelo Centro Universitário Dr. Leão Sampaio, com
              especializações em Citologia Clínica e Vigilância Sanitária pela
              Escola de Saúde Pública do Ceará. Atua na gestão pública, pesquisa
              científica e docência, com vasta experiência em microbiologia,
              segurança sanitária e políticas públicas de saúde.
            </p>

            <p>
              Seu percurso acadêmico e profissional reflete dedicação à
              ciência, ética e qualidade. Autor e coautor de artigos publicados
              em revistas científicas e colaborador em projetos de capacitação
              em boas práticas e vigilância sanitária.
            </p>

            <motion.a
              href="#everton-detalhes"
              className="bio-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver trajetória completa
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="bio-card reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/edna.jpg"
            alt="Edna Silva"
            className="bio-image"
          />
          <div className="bio-text">
            <h2>Edna Silva</h2>
            <p className="bio-subtitle">Esteticista & Cosmetóloga</p>

            <p>
              Especialista em estética avançada e terapias faciais e corporais,
              Edna combina ciência e arte em cada atendimento. Sua missão é
              promover o equilíbrio entre bem-estar, autoestima e saúde da pele.
            </p>

            <p>
              Com formação sólida e constante atualização, desenvolveu métodos
              exclusivos de rejuvenescimento e protocolos personalizados,
              conquistando resultados notáveis e fidelização de clientes.
            </p>

            <motion.a
              href="#edna-detalhes"
              className="bio-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Conheça sua filosofia
            </motion.a>
          </div>
        </motion.div>
      </section>

      <section className="bio-extra" id="everton-detalhes">
        <h3>Trajetória Acadêmica e Científica</h3>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <li>🧬 Graduação em Biomedicina – UNILEÃO (2018)</li>
          <li>🔬 Especialização em Citologia Clínica – UNILEÃO (2020)</li>
          <li>🏛️ Especialização em Vigilância Sanitária – ESP/CE (2023)</li>
          <li>📚 Produção científica com ênfase em microbiologia e fitoterapia</li>
          <li>💼 Coordenador de Vigilância Sanitária de Juazeiro do Norte</li>
        </motion.ul>
      </section>

      <section className="bio-extra" id="edna-detalhes">
        <h3>Abordagem Estética e Filosofia de Trabalho</h3>
        <motion.div
          className="bio-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <p>
            “A beleza real nasce do equilíbrio entre corpo, mente e pele.
            Trabalhar com estética é restaurar a confiança e revelar o que há de
            melhor em cada pessoa.”
          </p>
          <span>— Edna Silva</span>
        </motion.div>
      </section>
    </div>
  );
}
