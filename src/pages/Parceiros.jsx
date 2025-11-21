import React from "react";
import "../css/index.css";
import iago from "../../public/iago.jpeg";

import { motion } from "framer-motion";
import { BookUser } from "lucide-react";

export default function Biografias() {
  return (
    <div className="bio-container">
      
        <motion.div
          className="bio-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={iago}
            alt="Carlos Everton Mangueira"
            className="bio-image"
          />
          <div className="bio-text">
            <h2>Iago Moises</h2>
            <p className="bio-subtitle">Cabeleireiro, maquiador e penteadista</p>

            <p>
              Atua com excelência no setor de beleza e cuidados pessoais. Reconhecido por seu olhar técnico e criativo, transforma a imagem de seus clientes com cortes personalizados, penteados sofisticados e maquiagens de alto padrão.</p>
              <p>Atende no Salão Cícera Ramos, no Cariri, oferecendo uma experiência completa, que une estilo, confiança e cuidado.</p>
              <p>Seu trabalho reflete dedicação, sensibilidade estética e compromisso com a autoestima e bem-estar de quem o procura.</p>
              <h6>Telefone / WhatsApp <a href="https://wa.me/5588988456547" target="_blank">(88) 9 8845-6547</a></h6>
              

              
            

            

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

        {/* <motion.div
          className="bio-card reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/public/edna.jpg"
            alt="Edna Silva"
            className="bio-image"
          />
          <div className="bio-text">
            <h2>Edna Alves</h2>
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
              Ver trajetória completa
            </motion.a>
          </div>
        </motion.div> */}
      


    </div>
  );
}
