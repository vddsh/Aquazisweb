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
      <div className="content">
        <div className="container">
          <div className="content__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              corrupti sed facere quia mollitia, minima fugiat facilis dolore
              repudiandae in eveniet fugit autem recusandae amet earum nisi
              neque voluptas harum. Sunt quos quia debitis sint, incidunt
              asperiores ab deserunt nihil, tempora omnis consequatur, magni
              pariatur minus quis. Distinctio accusamus, repudiandae neque non
              ipsa, ducimus fugit amet odio eveniet a nobis. Provident assumenda
              obcaecati unde non animi odio illo aperiam laudantium, consectetur
              cumque sequi eaque ratione perspiciatis necessitatibus, quasi
              quaerat debitis expedita ex autem laboriosam. Officia impedit
              provident suscipit illum nesciunt. Praesentium, aut! Architecto
              voluptatem quod quaerat quos deleniti saepe repudiandae ea
              ducimus, pariatur laudantium sed impedit debitis nostrum similique
              tenetur accusamus maxime placeat nihil. Asperiores repellat velit
              omnis rem tenetur? Voluptatem corporis qui vero deleniti quasi
              aspernatur aut minus, quisquam illo quod alias possimus similique
              omnis nemo beatae consequatur ea quaerat fuga, hic assumenda.
              Culpa iste harum maxime at iusto? Aut quisquam debitis nobis dolor
              perferendis, rem dolores earum tempore accusamus repudiandae nemo
              eos. Iusto magni doloribus sint, ullam quos eaque, rerum ea,
              distinctio quaerat dolor itaque exercitationem veniam cum. Fugiat,
              nesciunt maxime soluta ratione inventore doloribus obcaecati
              dignissimos assumenda magnam vero, sapiente quas ut possimus
              aperiam. Adipisci aliquid tenetur quod cumque odit voluptate sit
              minus assumenda, qui, excepturi animi! Commodi consequuntur labore
              quia nihil perferendis eveniet eius pariatur in architecto! In
              provident culpa, fuga ullam harum aut vel placeat officia libero
              autem, dolorem a tempore. Impedit quis culpa excepturi? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti sed
              facere quia mollitia, minima fugiat facilis dolore repudiandae in
              eveniet fugit autem recusandae amet earum nisi neque voluptas
              harum. Sunt quos quia debitis sint, incidunt asperiores ab
              deserunt nihil, tempora omnis consequatur, magni pariatur minus
              quis. Distinctio accusamus, repudiandae neque non ipsa, ducimus
              fugit amet odio eveniet a nobis. Provident assumenda obcaecati
              unde non animi odio illo aperiam laudantium, consectetur cumque
              sequi eaque ratione perspiciatis necessitatibus, quasi quaerat
              debitis expedita ex autem laboriosam. Officia impedit provident
              suscipit illum nesciunt. Praesentium, aut! Architecto voluptatem
              quod quaerat quos deleniti saepe repudiandae ea ducimus, pariatur
              laudantium sed impedit debitis nostrum similique tenetur accusamus
              maxime placeat nihil. Asperiores repellat velit omnis rem tenetur?
              Voluptatem corporis qui vero deleniti quasi aspernatur aut minus,
              quisquam illo quod alias possimus similique omnis nemo beatae
              consequatur ea quaerat fuga, hic assumenda. Culpa iste harum
              maxime at iusto? Aut quisquam debitis nobis dolor perferendis, rem
              dolores earum tempore accusamus repudiandae nemo eos. Iusto magni
              doloribus sint, ullam quos eaque, rerum ea, distinctio quaerat
              dolor itaque exercitationem veniam cum. Fugiat, nesciunt maxime
              soluta ratione inventore doloribus obcaecati dignissimos assumenda
              magnam vero, sapiente quas ut possimus aperiam. Adipisci aliquid
              tenetur quod cumque odit voluptate sit minus assumenda, qui,
              excepturi animi! Commodi consequuntur labore quia nihil
              perferendis eveniet eius pariatur in architecto! In provident
              culpa, fuga ullam harum aut vel placeat officia libero autem,
              dolorem a tempore. Impedit quis culpa excepturi? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ea corrupti sed facere quia
              mollitia, minima fugiat facilis dolore repudiandae in eveniet
              fugit autem recusandae amet earum nisi neque voluptas harum. Sunt
              quos quia debitis sint, incidunt asperiores ab deserunt nihil,
              tempora omnis consequatur, magni pariatur minus quis. Distinctio
              accusamus, repudiandae neque non ipsa, ducimus fugit amet odio
              eveniet a nobis. Provident assumenda obcaecati unde non animi odio
              illo aperiam laudantium, consectetur cumque sequi eaque ratione
              perspiciatis necessitatibus, quasi quaerat debitis expedita ex
              autem laboriosam. Officia impedit provident suscipit illum
              nesciunt. Praesentium, aut! Architecto voluptatem quod quaerat
              quos deleniti saepe repudiandae ea ducimus, pariatur laudantium
              sed impedit debitis nostrum similique tenetur accusamus maxime
              placeat nihil. Asperiores repellat velit omnis rem tenetur?
              Voluptatem corporis qui vero deleniti quasi aspernatur aut minus,
              quisquam illo quod alias possimus similique omnis nemo beatae
              consequatur ea quaerat fuga, hic assumenda. Culpa iste harum
              maxime at iusto? Aut quisquam debitis nobis dolor perferendis, rem
              dolores earum tempore accusamus repudiandae nemo eos. Iusto magni
              doloribus sint, ullam quos eaque, rerum ea, distinctio quaerat
              dolor itaque exercitationem veniam cum. Fugiat, nesciunt maxime
              soluta ratione inventore doloribus obcaecati dignissimos assumenda
              magnam vero, sapiente quas ut possimus aperiam. Adipisci aliquid
              tenetur quod cumque odit voluptate sit minus assumenda, qui,
              excepturi animi! Commodi consequuntur labore quia nihil
              perferendis eveniet eius pariatur in architecto! In provident
              culpa, fuga ullam harum aut vel placeat officia libero autem,
              dolorem a tempore. Impedit quis culpa excepturi? dolorem a
              tempore. Impedit quis culpa excepturi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ea corrupti sed facere quia
              mollitia, minima fugiat facilis dolore repudiandae in eveniet
              fugit autem recusandae amet earum nisi neque voluptas harum. Sunt
              quos quia debitis sint, incidunt asperiores ab deserunt nihil,
              tempora omnis consequatur, magni pariatur minus quis. Distinctio
              accusamus, repudiandae neque non ipsa, ducimus fugit amet odio
              eveniet a nobis. Provident assumenda obcaecati unde non animi odio
              illo aperiam laudantium, consectetur cumque sequi eaque ratione
              perspiciatis necessitatibus, quasi quaerat debitis expedita ex
              autem laboriosam. Officia impedit provident suscipit illum
              nesciunt. Praesentium, aut! Architecto voluptatem quod quaerat
              quos deleniti saepe repudiandae ea ducimus, pariatur laudantium
              sed impedit debitis nostrum similique tenetur accusamus maxime
              placeat nihil. Asperiores repellat velit omnis rem tenetur?
              Voluptatem corporis qui vero deleniti quasi aspernatur aut minus,
              quisquam illo quod alias possimus similique omnis nemo beatae
              consequatur ea quaerat fuga, hic assumenda. Culpa iste harum
              maxime at iusto? Aut quisquam debitis nobis dolor perferendis, rem
              dolores earum tempore accusamus repudiandae nemo eos. Iusto magni
              doloribus sint, ullam quos eaque, rerum ea, distinctio quaerat
              dolor itaque exercitationem veniam cum. Fugiat, nesciunt maxime
              soluta ratione inventore doloribus obcaecati dignissimos assumenda
              magnam vero, sapiente quas ut possimus aperiam. Adipisci aliquid
              tenetur quod cumque odit voluptate sit minus assumenda, qui,
              excepturi animi! Commodi consequuntur labore quia nihil
              perferendis eveniet eius pariatur in architecto! In provident
              culpa, fuga ullam harum aut vel placeat officia libero autem,
              dolorem a tempore. Impedit quis culpa excepturi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
