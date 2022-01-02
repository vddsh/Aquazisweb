import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Tabs.scss";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleButton = () => {
    setToggleState(toggleState + 1);
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
              Размеры
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Категория
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Инсталяция
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Параметры
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input {...register("length")} placeholder="Длина" />
                      <div className="size__inputs-aftersize">
                        <span>мм</span>
                      </div>
                      <input
                        {...register("innerLength")}
                        placeholder="Внутреняя длина"
                      />
                      <div className="size__inputs-aftersize">
                        {" "}
                        <span>мм</span>
                      </div>
                      <input {...register("width")} placeholder="Ширина" />
                      <div className="size__inputs-aftersize">
                        {" "}
                        <span>мм</span>
                      </div>
                      <input {...register("heigth")} placeholder="Высота" />
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
                    </form>
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
