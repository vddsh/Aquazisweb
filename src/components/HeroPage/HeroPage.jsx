import React, { useEffect } from "react";
import "./HeroPage.scss";
import Background from "../../images/hero.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import SimpleSlider from "../Slider/Slider";

function HeroPage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <div className="wrapper">
      <section
        className="hero"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container">
          <div className="hero__row" data-aos="fade_left">
            <h1 className="hero__head">
              Изготовление <span>LED-освещения для</span> аквариумов любой
              сложности
            </h1>
            <p className="hero__text">
              Воспользуйтесь конструктором для просчета эффективного
              светодиодного освещения под Ваш аквариум.
            </p>
            <a href="#" className="hero__btn btn">
              Собрать светильник
            </a>
          </div>
        </div>
      </section>
      <section className="benefits" data-aos="fade_up" data-aos-once="true">
        <div className="container">
          <div className="benefits__row">
            <div className="benefits__row-info">
              <i className="far fa-image"></i>
              <h3 className="benefits__head">Изящный Дизайн</h3>
              <p className="benefits__text">
                Тонкий алюминиевый профиль в черном или серебристом аноде с
                защитным акриловым стеклом
              </p>
            </div>
            <div className="benefits__row-info centered">
              <i className="far fas fa-mobile-alt"></i>
              <h3 className="benefits__head">Удобное Управление</h3>
              <p className="benefits__text">
                Простое управление полноспектральным светом с любого устройства
                поддерживающего WiFi
              </p>
            </div>
            <div className="benefits__row-info">
              <i className="far fas fa-shield-alt"></i>
              <h3 className="benefits__head">Высокое Качество</h3>
              <p className="benefits__text">
                Разработка и эволюция новых комплектующих, основана на нашем
                многолетнем опыте в радиоэлектронике и аквариумистике
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about__row">
            <div className="about__box">
              <img src="./img/about.jpg" className="about__img"></img>
            </div>
            <div className="about__box">
              <div className="about__text-row">
                <h3 className="about__head">Aquazis - это</h3>
                <p className="about__text">
                  Многолетний опыт полученный в процессе изготовления освещения
                  на заказ, с учетом персональных требований каждого клиента.
                </p>
                <p className="about__text">
                  В результате, мы предоставляем аквариумисту
                  высококачественное, долговечное, эффективное,
                  полноспектральное освещение, с интуитивно понятным
                  управлением.
                </p>
                <p className="about__text about__text-italic">
                  "Любой красивый аквариум начинается с правильно подобранного
                  света."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slider">
        <div className="container">
          <div className="slider__head">
            <h3>Наши работы</h3>
          </div>
          <div className="slider__component">
            <SimpleSlider />
          </div>
          <div className="slider__info">
            <p>
              Больше работ у нас на <a href="#">авквафоруме</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
