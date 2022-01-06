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
      <div class="tab">
        <button class="tablinks" onClick={() => toggleTab(1)}>
          Пресноводный
        </button>
        <button class="tablinks" onClick={() => toggleTab(2)}>
          Морской
        </button>
      </div>

      <div className={active === 1 ? "tabcontent active" : "tabcontent"}></div>

      <div className={active === 2 ? "tabcontent active" : "tabcontent"}>
        <p>На данный момент в разработке</p>
      </div>
    </div>
  );
}
