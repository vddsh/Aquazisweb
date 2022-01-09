import React from "react";
import "./StepParameters.scss";

function StepParameters() {
  return (
    <div className="parameters_wrap">
      <h3 className="parameteres__head">Дополнительные параметры</h3>
      <div className="parameters__row">
        <div className="parameters__diod">
          <h6>Подключение светодиодов</h6>
          <input type="checkbox"></input>
          <p>
            Многоканальное подключение светодиодов Возможность управлять каждым
            типом(цветом) светодиода отдельно, гибкая настройка спектра, расвет,
            закат, лунная подсвтека
          </p>
        </div>
        <div className="parameters__profile">
          <h6>Профиль</h6>
          <select>
            <option value="bioled">Bioled</option>
            <hr />
            <option value="b52-2">B52-2</option>
          </select>
        </div>
        <div className="parameters__options">
          <h6>Цвет профиля</h6>
          <div className="profile__color-box">
            <input type="radio"></input>
            <label className="profile__grey"></label>
          </div>
          <div className="profile__color-box">
            <input type="radio"></input>
            <label className="profile__black"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepParameters;
