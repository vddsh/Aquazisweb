import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroPage.scss";
import Background from "../../images/hero.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import ImageSlider from "../Slider/Slider";
import { IMAGES } from "../Slider/Slider";

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
            <Link to="/constructor" className="hero__btn btn">
              Собрать светильник
            </Link>
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
            <ImageSlider images={IMAGES} slidesToShow={3} />
          </div>
          <div className="slider__info">
            <p>
              Больше работ у нас на <Link to="/forum">авквафоруме</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="app">
        <div className="container">
          <div className="app__row">
            <div className="app__box">
              <div className="app__text-row">
                <h3 className="app__head">Простейшее управление</h3>
                <p className="app__text">
                  Мы знаем, насколько важно правильно настроить спектр в вашем
                  любимом аквариуме, что бы все его обитатели чувствовали себя в
                  природной среде.
                </p>
                <p className="app__text">
                  Учитывая все ваши пожелания, мы разработали максимально
                  удобное решения которое позволяет быстро настроить нужный вам
                  спектр для аквариума.
                </p>
                <ol className="app__info">
                  <li className="app__info-text right">Любое устройство</li>
                  <li className="app__info-text left">
                    Работает без интернета
                  </li>
                  <li className="app__info-text right">Интуитивно понятный</li>
                </ol>
              </div>
            </div>
            <div className="app__box">
              <img src="./img/app.jpg" className="app__img"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="profile">
        <div className="container">
          <div className="profile__row">
            <div className="profile__box">
              <img src="./img/profile.jpg" className="profile__img"></img>
            </div>
            <div className="profile__box">
              <div className="profile__text-row">
                <h3 className="profile__head">Изящный алюминиевый профиль</h3>
                <p className="profile__text">
                  Современный, эффективный, удобный в эксплуатации профиль,
                  созданный для эффективного отвода тепла от светодиодов,
                  драйверов и контроллеров.
                </p>
                <p className="profile__text">
                  Специальные конструктивные элементы в профиле, позволяют
                  скрывать провода и кабель при монтаже.
                </p>
                <p className="profile__text">
                  Различные варианты установки светильника, позволяют
                  использовать раздвижные нержавеющие или акриловые ножки, а так
                  же подвесной тип инсталяции.
                </p>
                <p className="profile__text profile__text-grey">
                  Разработано специально для Aquazis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="install">
        <div className="container">
          <div className="install__row">
            <div className="install__head">
              <h3 className="install__head-header">
                Различные способы инсталяции
              </h3>
              <p className="install__head-text">
                Расчитываем размеры вашего освещения до миллиметра, можем
                одновременно сделать несколько вариантов инсталяции для
                дальнейшей удобной эксплуатации
              </p>
            </div>
            <div className="install__type">
              <img src="./img/install-1.jpg"></img>
              <p className="install__discr">Ножки из нержавеющей стали</p>
            </div>
            <div className="install__type padd">
              <img src="./img/install-2.jpg"></img>
              <p className="install__discr">Подвесной крепеж</p>
            </div>
            <div className="install__type">
              <img src="./img/install-3.jpg"></img>
              <p className="install__discr">Акриловые ножки (вариант 1)</p>
            </div>
            <div className="install__type padd">
              <img src="./img/install-4.jpg"></img>
              <p className="install__discr">Акриловые ножки (вариант 2)</p>
            </div>
          </div>
        </div>
      </section>
      <section className="ref">
        <div className="container">
          <div className="ref__row">
            <h3 className="ref__head">Просчет LED-освещения</h3>
            <p className="ref__text">
              Возпользуйся конструктором в который мы перенесли весь наш опыт и
              знания
            </p>
            <Link to="/constructor" className="ref__button btn">
              Собрать светильник
            </Link>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="container">
          <h3 className="footer__head">Контакты</h3>
          <div className="footer__row">
            <div>
              <i className="fas fa-mobile-alt"></i>
              <Link to="#" className="fotter__inf">
                +38 (095) 249-77-51
              </Link>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <Link to="#" className="fotter__inf">
                info@aquazis.com
              </Link>
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <Link to="#" className="fotter__inf">
                Ukraine, Kiev
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
