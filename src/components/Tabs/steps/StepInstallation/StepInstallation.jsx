import React from "react";
import "./StepInstallation.scss";
import { useContactFormState } from "../../ContactFormContext";

function StepInstallation() {
  const {
    state: { installation },
    dispatch,
  } = useContactFormState();
  return (
    <div className="installation__wrap">
      <div className="installation__row">
        <div className="installation__box">
          <label className={installation === "Nerjav" ? "checked" : ""}>
            <input
              type="radio"
              id="1"
              name="installation"
              value="Nerjav"
              checked={installation === "Nerjav"}
              onChange={(e) =>
                dispatch({
                  type: "INSTALLATION_CHANGE",
                  payload: e.target.value,
                })
              }
            />
            <div>
              <img src="./img/profile-1.jpg" />
              <h6>Ножки из нержавеющей стали</h6>
            </div>
          </label>
        </div>
        <div className="installation__box">
          <label className={installation === "Podves" ? "checked" : ""}>
            <input
              type="radio"
              id="2"
              name="installation"
              value="Podves"
              checked={installation === "Podves"}
              onChange={(e) =>
                dispatch({
                  type: "INSTALLATION_CHANGE",
                  payload: e.target.value,
                })
              }
            />
            <div>
              <img src="./img/profile-2.jpg" />
              <h6>Подвесной крепеж</h6>
            </div>
          </label>
        </div>
        <div className="installation__box">
          <label className={installation === "Acril1" ? "checked" : ""}>
            <input
              type="radio"
              id="3"
              name="installation"
              value="Acril1"
              checked={installation === "Acril1"}
              onChange={(e) =>
                dispatch({
                  type: "INSTALLATION_CHANGE",
                  payload: e.target.value,
                })
              }
            />
            <div>
              <img src="./img/profile-3.jpg" />
              <h6>Акриловые ножки (вариант 1)</h6>
            </div>
          </label>
        </div>
        <div className="installation__box">
          <label className={installation === "Acril2" ? "checked" : ""}>
            <input
              type="radio"
              id="4"
              name="installation"
              value="Acril2"
              checked={installation === "Acril2"}
              onChange={(e) =>
                dispatch({
                  type: "INSTALLATION_CHANGE",
                  payload: e.target.value,
                })
              }
            />
            <div>
              <img src="./img/profile-4.jpg" />
              <h6>Акриловые ножки (вариант 2)</h6>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default StepInstallation;
