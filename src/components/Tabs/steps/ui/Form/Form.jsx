import "./Form.scss";

export const Form = (props) => {
  console.log(props);
  return (
    <div className="tabs__row">
      <div className="bloc-tabs">
        <button
          className={props.currentStep == 0 ? "tabs active-tabs" : "tabs"}
          onClick={() => props.onChange(0)}
        >
          <div className="tabs__row-box">
            <div className="tabs__button-row">
              <div className="tabs__img-bg tabs__img-bg-active ">
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
          className={props.currentStep == 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => props.onChange(1)}
        >
          <div className="tabs__row-box">
            <div className="tabs__button-row">
              <div className="tabs__img-bg tabs__img-bg-active ">
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
          className={props.currentStep == 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => props.onChange(2)}
        >
          <div className="tabs__row-box">
            <div className="tabs__button-row">
              <div className="tabs__img-bg tabs__img-bg-active ">
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
          className={props.currentStep == 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => props.onChange(3)}
        >
          <div className="tabs__row-box">
            <div className="tabs__button-row">
              <div className="tabs__img-bg tabs__img-bg-active ">
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
        <div className="content  active-content">
          <div className="size__row">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
