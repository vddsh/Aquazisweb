import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

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
            <Link to="/" className="header__logo">
              Aquazis
            </Link>
            <div
              className={showMenu ? "header__burger active" : "header__burger"}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span></span>
            </div>
            <nav className={showMenu ? "header__menu active" : "header__menu"}>
              <ul className="header__list">
                <li>
                  <Link to="/" className="header__link">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/forum" className="header__link">
                    Аква-форум
                  </Link>
                </li>
                <li>
                  <Link to="/constructor" className="header__link">
                    {" "}
                    Конструктор
                  </Link>
                </li>
                <li>
                  <Link to="#" className="header__link header__link-phone">
                    {" "}
                    +38 (095) 249-77-51
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header__phone">
              <Link to="#" className="header__phone-number">
                +38 (095) 249-77-51
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
