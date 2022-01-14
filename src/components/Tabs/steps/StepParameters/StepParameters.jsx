import React from "react";
import "./StepParameters.scss";
import { FormField } from "../ui/FormFields/ForlFields";

import { useContactFormState } from "../../ContactFormContext";

function StepParameters() {
  const {
    state: { profileColor, profileType, parameters },
    dispatch,
  } = useContactFormState();

  const availableCategories = ["Mnogocanal"];

  const handleChange = (parameter) => {
    const isSelected = parameters.includes(parameter);
    let payload = parameters;

    if (isSelected) {
      payload = parameters.filter((c) => c !== parameter);
    } else {
      payload = [...parameters, parameter];
    }

    dispatch({
      type: "PARAMETERS_CHANGE",
      payload,
    });
  };

  return (
    <div className="parameters_wrap">
      <h3 className="parameteres__head">Дополнительные параметры</h3>
      <div className="parameters__row">
        <div className="parameters__diod">
          <h6>Подключение светодиодов</h6>
          {availableCategories.map((parameter) => (
            <FormField key={parameter} label={parameter} name={parameter}>
              <input
                type="checkbox"
                name={parameter}
                id={parameter}
                value={parameter}
                onChange={() => handleChange(parameter)}
                checked={parameters.includes(parameter)}
              />
            </FormField>
          ))}
          <p>
            Многоканальное подключение светодиодов Возможность управлять каждым
            типом(цветом) светодиода отдельно, гибкая настройка спектра, расвет,
            закат, лунная подсвтека
          </p>
        </div>
        <div className="parameters__profile">
          <h6>Профиль</h6>
          <select
            onChange={(e) =>
              dispatch({
                type: "PROFILETYPE_CHANGE",
                payload: e.target.value,
              })
            }
          >
            <option value="bioled">Bioled</option>
            <option value="b52-2">B52-2</option>
          </select>
        </div>
        <div className="parameters__options">
          <h6>Цвет профиля</h6>
          <div className="profile__color-box">
            <input
              type="radio"
              id="1"
              name="profileColor"
              value="grey"
              checked={profileColor === "grey"}
              onChange={(e) =>
                dispatch({
                  type: "PROFILE_COLOR",
                  payload: e.target.value,
                })
              }
            ></input>
            <label className="profile__grey"></label>
          </div>
          <div className="profile__color-box">
            <input
              type="radio"
              id="1"
              name="profileColor"
              value="black"
              checked={profileColor === "black"}
              onChange={(e) =>
                dispatch({
                  type: "PROFILE_COLOR",
                  payload: e.target.value,
                })
              }
            ></input>
            <label className="profile__black"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepParameters;
