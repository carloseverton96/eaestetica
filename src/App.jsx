import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";

import BackToTop from "./components/BackToTop";
import Periodico from "./pages/Periodico";
import Contatos from "./pages/Contatos";


export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/periodico/:id" element={<Periodico />} />
          <Route path="*" element={<Contatos />} />
          
        </Routes>
        <BackToTop/>
      </main>
    </>
  );
}
