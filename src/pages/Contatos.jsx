import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/index.css";

export default function Contatos() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contatos - Periódico Espírita Fraternité</title>
        <meta
          name="description"
          content="Entre em contato com a equipe do Periódico Espírita Fraternité. Informações de editorial, desenvolvimentoe e colaboradores."
        />
        <meta
          name="keywords"
          content="contato espírita, periódico fraternité, editorial espírita, desenvolvimento site espírita"
        />
        <link rel="canonical" href="https://www.periodicofraternite.com/contatos" />
      </Helmet>

      {/* Conteúdo Principal */}
      <main className="container">
        <section className="contatos-section">
          <h1 className="titulo-principal">Contatos</h1>
          <p className="contatos-subtitulo">
            Entre em contato com nossa equipe editorial e de desenvolvimento
          </p>

          {/* Grid de Contatos */}
          <div className="contatos-grid">

            {/* Editorial */}
            <div className="contato-card">
              <div className="contato-icon">✍️</div>
              <h2 className="contato-titulo">Equipe Editorial</h2>
              <div className="contato-info">
                <h3>Diretoria e Redação</h3>
                <p>
                  Responsável pela seleção de conteúdos, revisão e publicação 
                  dos materiais doutrinários.
                </p>
                <div className="contato-detalhes">
                  <p><strong>Email:</strong> editorial@periodicofraternite.com</p>
                  <p><strong>Telefone:</strong> (11) 9999-9999</p>
                  <p><strong>Horário de Atendimento:</strong> Segunda a Sexta, 9h-18h</p>
                </div>
              </div>
            </div>

            {/* Colaborações */}
            <div className="contato-card">
              <div className="contato-icon">🤝</div>
              <h2 className="contato-titulo">Submissão de Artigos</h2>
              <div className="contato-info">
                <h3>Para Colaboradores</h3>
                <p>
                  Interessados em contribuir com artigos, estudos ou mensagens 
                  para o periódico.
                </p>
                <div className="contato-detalhes">
                  <p><strong>Email:</strong> artigos@periodicofraternite.com</p>
                  <p><strong>Prazo de Submissão:</strong> 15º de cada mês</p>
                  <p><strong>Formato:</strong> PDF ou Word</p>
                </div>
              </div>
            </div>
            {/* Desenvolvimento */}
            
            <div className="contato-card">
              <div className="contato-icon">💻</div>
              <h2 className="contato-titulo">Desenvolvimento do Site</h2>
              <div className="contato-info">
                <h3>Suporte Técnico</h3>
                <p>
                  Desenvolvimento, manutenção e suporte técnico da plataforma 
                  digital do periódico.
                </p>
                <div className="contato-detalhes">
                  <p><strong>Email:</strong> dev@periodicofraternite.com</p>
                  <p><strong>Responsável:</strong> Equipe de TI Fraternité</p>
                  <p><strong>Especialidade:</strong> React, Node.js, UX/UI</p>
                </div>
              </div>
            </div>

            

            {/* Endereço */}
            <div className="contato-card">
              <div className="contato-icon">🏢</div>
              <h2 className="contato-titulo">Endereço e Localização</h2>
              <div className="contato-info">
                <h3>Sede Administrativa</h3>
                <p>
                  Centro Espírita Fraternité - Local de reuniões e 
                  atividades doutrinárias.
                </p>
                <div className="contato-detalhes">
                  <p><strong>Endereço:</strong> Rua Espírita, 123 - Centro</p>
                  <p><strong>Cidade:</strong> São Paulo - SP</p>
                  <p><strong>CEP:</strong> 01234-567</p>
                </div>
              </div>
            </div>

          </div>

          {/* Informações Adicionais */}
          <div className="informacoes-adicionais">
            <h2 className="informacoes-titulo">Informações Importantes</h2>
            
            <div className="informacoes-grid">
              <div className="info-item">
                <h3>📅 Periodicidade</h3>
                <p>Publicação mensal, sempre no primeiro final de semana de cada mês.</p>
              </div>
              
              <div className="info-item">
                <h3>🎯 Objetivo</h3>
                <p>Divulgação gratuita da Doutrina Espírita segundo os princípios de Allan Kardec.</p>
              </div>
              
              <div className="info-item">
                <h3>📖 Distribuição</h3>
                <p>Distribuição gratuita em centros espíritas e plataforma digital.</p>
              </div>
              
              <div className="info-item">
                <h3>💝 Doações</h3>
                <p>As doações são voluntárias e destinadas à manutenção do periódico.</p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato Rápido */}
          <div className="formulario-contato">
            <h2 className="formulario-titulo">Envie uma Mensagem</h2>
            <form className="contato-form">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="assunto">Assunto</label>
                <select id="assunto" name="assunto" required>
                  <option value="">Selecione o assunto</option>
                  <option value="editorial">Editorial/Conteúdo</option>
                  <option value="tecnico">Problema Técnico</option>
                  <option value="artigo">Submissão de Artigo</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="bio-button enviar-btn">
                📤 Enviar Mensagem
              </button>
            </form>
          </div>

        </section>
      </main>
    </>
  );
}