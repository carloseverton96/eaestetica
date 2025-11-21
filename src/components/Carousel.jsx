import React, { useState, useEffect } from "react";
import "../css/index.css";

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  // Troca automática a cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={items[index].imagem} alt={items[index].titulo} />
        <div className="carousel-text">
          <h2>{items[index].titulo}</h2>
          <p>{items[index].descricao}</p>
        </div>
      </div>

      <button className="carousel-btn left" onClick={prevSlide}>❮</button>
      <button className="carousel-btn right" onClick={nextSlide}>❯</button>
    </div>
  );
}
