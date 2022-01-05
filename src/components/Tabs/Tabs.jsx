import React, { useState } from "react";
import "./Tabs.scss";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [length, setLength] = useState();
  const [innerlength, setInnerLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  console.log(toggleState);

  const checkValue = (event) => {
    if (event.target.value <= 300) event.target.value = 300;
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleButton = () => {
    if (
      toggleState == 1 &&
      length.length !== 0 &&
      innerlength.length !== 0 &&
      width.length !== 0 &&
      height.length !== 0
    ) {
      setToggleState(toggleState + 1);
    } else {
    }
  };

  return (
    <div className="constructor__page">
      <div className="container">
        <div className="tabs__row">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <div className="tabs__row-box">
                <div className="tabs__button-row">
                  <div
                    className={
                      toggleState === 1
                        ? "tabs__img-bg tabs__img-bg-active "
                        : "tabs__img-bg"
                    }
                  >
                    <i class="fas fa-ruler"></i>
                  </div>
                </div>
                <div className="tabs__button-row">
                  <div className="tabs__button-head">Размеры</div>
                  <div className="tabs__button-text">Шаг 1</div>
                </div>
              </div>
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <div className="tabs__row-box">
                <div className="tabs__button-row">
                  <div
                    className={
                      toggleState === 2
                        ? "tabs__img-bg tabs__img-bg-active "
                        : "tabs__img-bg"
                    }
                  >
                    <i class="fas fa-image"></i>
                  </div>
                </div>
                <div className="tabs__button-row">
                  <div className="tabs__button-head">Категория</div>
                  <div className="tabs__button-text">Шаг 2</div>
                </div>
              </div>
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <div className="tabs__row-box">
                <div className="tabs__button-row">
                  <div
                    className={
                      toggleState === 3
                        ? "tabs__img-bg tabs__img-bg-active "
                        : "tabs__img-bg"
                    }
                  >
                    <i class="fas fa-lightbulb"></i>
                  </div>
                </div>
                <div className="tabs__button-row">
                  <div className="tabs__button-head">Инсталяция</div>
                  <div className="tabs__button-text">Шаг 3</div>
                </div>
              </div>
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              <div className="tabs__row-box">
                <div className="tabs__button-row">
                  <div
                    className={
                      toggleState === 4
                        ? "tabs__img-bg tabs__img-bg-active "
                        : "tabs__img-bg"
                    }
                  >
                    <i class="fas fa-cog"></i>
                  </div>
                </div>
                <div className="tabs__button-row">
                  <div className="tabs__button-head">Параметры</div>
                  <div className="tabs__button-text">Шаг 1</div>
                </div>
              </div>
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="container">
                <div className="size__row">
                  <div className="size__img">
                    <img src="./img/aqua-sizes.png"></img>
                  </div>
                  <div className="size__inputs">
                    <h3>Размеры вашего аквариума</h3>

                    <input
                      placeholder="Длина"
                      name="length"
                      type="number"
                      onBlur={checkValue}
                      onChange={(event) => setLength(event.target.value)}
                    />
                    <div className="size__inputs-aftersize">
                      <span>мм</span>
                    </div>
                    <input
                      placeholder="Внутреняя длина"
                      name="innerLength"
                      type="number"
                      onBlur={checkValue}
                      onChange={(event) => setInnerLength(event.target.value)}
                    />
                    <div className="size__inputs-aftersize">
                      {" "}
                      <span>мм</span>
                    </div>
                    <input
                      placeholder="Ширина"
                      name="width"
                      type="number"
                      onBlur={checkValue}
                      onChange={(event) => setWidth(event.target.value)}
                    />
                    <div className="size__inputs-aftersize">
                      {" "}
                      <span>мм</span>
                    </div>
                    <input
                      placeholder="Высота"
                      name="height"
                      type="number"
                      onBlur={checkValue}
                      onChange={(event) => setHeight(event.target.value)}
                    />
                    <div className="size__inputs-aftersize">
                      {" "}
                      <span>мм</span>
                    </div>
                    <div className="size__btn-row">
                      <button
                        type="submit"
                        className="size__btn"
                        onClick={toggleButton}
                      >
                        Дальше
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
