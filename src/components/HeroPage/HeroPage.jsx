import React from "react";
import "./HeroPage.scss";
import Background from "../../images/hero.jpg";

function HeroPage() {
  return (
    <div className="wrapper">
      <section
        className="hero"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container">
          <div className="hero__row">
            <h1 className="hero__head">
              Изготовление <span>LED-освещения для</span> аквариумов любой
              сложности
            </h1>
            <p className="hero__text">
              Воспользуйтесь конструктором для просчета эффективного
              светодиодного освещения под Ваш аквариум.
            </p>
            <a className="hero__btn btn">Собрать светильник</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
