import React, { useState } from "react";
import "./personajes.css";
import { Briefcase } from 'iconsax-react';
import { User } from 'iconsax-react';
import { Heart } from 'iconsax-react';

function Personajes({ personajes = [] }) {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const [cardBackVisible, setCardBackVisible] = useState(false);

  function toggleCard(index) {
    setActiveCardIndex(index);
    setCardBackVisible(true);
  }

  function toggleCardBack() {
    setCardBackVisible(!cardBackVisible);
  }

  function isCardActive(index) {
    return activeCardIndex === index;
  }

  return (
    <div className="box">
      {personajes.map((item, index) => (
        <div key={item._id} className="card">
          <div
            className={"card__front" + (isCardActive(index) ? " translate-X" : "")}
            onClick={() => toggleCard(index)}
          >
            <img src={item.Imagen} className="card__personaje" alt="" />
            <div className="card__front--descripcion">
              <div className="card__front--nombre">
                <h2>{item.Nombre}</h2>
              </div>
              <div className="card__front--txt">
                <div className="ocupacion">
                <Briefcase
                      size="32"
                      color="#424f46"
                      variant="Bold"
                      className="ocupacion__img" 
                      />
                  <p className="txt">{item.Ocupacion}</p>
                </div>
                <div className="ocupacion">

                  <Heart size="32" color="#424f46" variant="Bold"  className="ocupacion__img" />
                  <p className="txt">{item.Estado}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={"card__back" + (cardBackVisible && isCardActive(index) ? " visible" : "")}
            onClick={() => {
              toggleCardBack();
              setActiveCardIndex(-1);
            }}
          >
            <div className="card__back--box">
              <div className="card__back--descripcion">
                <img src={item.Imagen} className="card__back--img" alt="" />
                <h2 id="card__back--nombre">{item.Nombre}</h2>
                <div className="card__back--txt">
                  <div className="ocupacion">
                  <Briefcase
                      size="32"
                      color="#424f46"
                      variant="Bold"
                      className="ocupacion__img" 
                      />
                    <p className="txt">{item.Ocupacion}</p>
                  </div>
                  <div className="estado">
                    <div className="ocupacion">
                    <Heart size="32" color="#424f46" variant="Bold"   className="ocupacion__img" />
                      <p className="txt">{item.Estado}</p>
                    </div>
                    <div className="ocupacion">
                    <User size="32" color="#424f46" variant="Bold" className="ocupacion__img"/>
                      <p className="txt">{item.Genero}</p>
                    </div>
                  </div>
                  <div className="ocupacion historia">
                    <p>{item.Historia}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Personajes };