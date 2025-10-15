import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">EA ESTÉTICA</div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/biografias">Biografias</Link></li>
        <li><Link to="/contato">Contatos</Link></li>
      </ul>
    </nav>
  );
}
