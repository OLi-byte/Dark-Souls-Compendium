import React from "react";
import "./Content.css";

const Content = ({ valueShowText }) => {
  return (
    <div className="page_content">
      {valueShowText === true ? (
        <div className="introduction_wrapper">
          <p>
            Planejo fazer um Compendium de dark souls 1, mas vou continuar apenas
            se achar uma API que esteja funcionando corretamente com a maior
            parte das informações dos itens do jogo. Infelizmente não achei uma APi com
            sprites até o momento.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
