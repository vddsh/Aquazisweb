import React from "react";
import { useState } from "react";
import "./StepCategories.scss";

import { useContactFormState } from "../../ContactFormContext";

export default function StepCategories() {
  const [active, setActive] = useState(1);
  const toggleTab = (index) => {
    setActive(index);
  };

  const {
    state: { categories },
    dispatch,
  } = useContactFormState();

  return (
    <div className="categories__row">
      <div className="tab">
        <button className="tablinks" onClick={() => toggleTab(1)}>
          Пресноводный
        </button>
        <button className="tablinks" onClick={() => toggleTab(2)}>
          Морской
        </button>
      </div>

      <div className={active === 1 ? "tabcontent active" : "tabcontent"}>
        <div className="tab__row">
          <div className="tab__box">
            <label className={categories === "travnik" ? "checked" : ""}>
              <input
                type="radio"
                id="1"
                name="catogories"
                value="travnik"
                checked={categories === "travnik"}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORIES_CHANGE",
                    payload: e.target.value,
                  })
                }
              />
              <div classname="categories__border">
                <img src="./img/1.jpg" />
                <h6>Травник</h6>
              </div>
            </label>
          </div>
          <div className="tab__box">
            <label className={categories === "travnik2" ? "checked" : ""}>
              <input
                type="radio"
                id="2"
                name="catogories"
                value="travnik2"
                checked={categories === "travnik2"}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORIES_CHANGE",
                    payload: e.target.value,
                  })
                }
              />
              <div classname="categories__border">
                <img src="./img/2.jpg" />
                <h6>Форсированный травник (СО2, УДО)</h6>
              </div>
            </label>
          </div>
          <div className="tab__box">
            <label className={categories === "Cuhlidnik" ? "checked" : ""}>
              <input
                type="radio"
                id="3"
                name="catogories"
                value="Cuhlidnik"
                checked={categories === "Cuhlidnik"}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORIES_CHANGE",
                    payload: e.target.value,
                  })
                }
              />
              <div classname="categories__border">
                <img src="./img/3.jpg" />
                <h6>Цихлидник (Америка)</h6>
              </div>
            </label>
          </div>
          <div className="tab__box">
            <label className={categories === "Cuhlidnik2" ? "checked" : ""}>
              <input
                type="radio"
                id="4"
                name="catogories"
                value="Cuhlidnik2"
                checked={categories === "Cuhlidnik2"}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORIES_CHANGE",
                    payload: e.target.value,
                  })
                }
              />
              <div classname="categories__border chosen">
                <img src="./img/4.jpg" />
                <h6>Цихлидник (Африка)</h6>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className={active === 2 ? "tabcontent active" : "tabcontent"}>
        <p>На данный момент в разработке</p>
      </div>
    </div>
  );
}
