import React, { useState, useEffect } from "react";
import "./Header.scss";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  {
    showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__body">
            <a href="" className="header__logo">
              Aquazis
            </a>
            <div
              className={showMenu ? "header__burger active" : "header__burger"}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span></span>
            </div>
            <nav className={showMenu ? "header__menu active" : "header__menu"}>
              <ul className="header__list">
                <li>
                  <a href="" className="header__link">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="" className="header__link">
                    Аква-форум
                  </a>
                </li>
                <li>
                  <a href="" className="header__link">
                    {" "}
                    Конструктор
                  </a>
                </li>
                <li>
                  <a href="" className="header__link header__link-phone">
                    {" "}
                    +38 (095) 249-77-51
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__phone">
              <a href="" className="header__phone-number">
                +38 (095) 249-77-51
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
