import "./Form.scss";

export const Form = ({ children }) => (
  <div className="tabs__row">
    <div className="bloc-tabs">
      <button className="tabs">
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
      <button className="tabs">
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
      <button className="tabs">
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
      <button className="tabs">
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
        <div className="size__row">{children}</div>
      </div>
    </div>
  </div>
);
