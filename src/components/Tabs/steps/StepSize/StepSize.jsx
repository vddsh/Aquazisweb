import React from "react";
import "./StepSize.scss";

import { useContactFormState } from "../../ContactFormContext";

export default function StepSize() {
  const {
    state: { length, innerLength, width, height },
    dispatch,
  } = useContactFormState();

  return (
    <>
      <div className="size__img">
        <img src="./img/aqua-sizes.png"></img>
      </div>
      <div className="size__inputs">
        <h3>Размеры вашего аквариума</h3>

        <input
          label="length"
          name="length"
          onChange={(e) =>
            dispatch({ type: "LENGTH_CHANGE", payload: e.target.value })
          }
          type="number"
          value={length}
          placeholder="Длинна"
        />
        <div className="size__inputs-aftersize">
          <span>мм</span>
        </div>
        <input
          label="innerLength"
          name="innerLength"
          onChange={(e) =>
            dispatch({ type: "INNERLENGTH_CHANGE", payload: e.target.value })
          }
          type="number"
          value={innerLength}
          placeholder="Внутренняя длина"
        />
        <div className="size__inputs-aftersize">
          <span>мм</span>
        </div>
        <input
          label="width"
          name="width"
          onChange={(e) =>
            dispatch({ type: "WIDTH_CHANGE", payload: e.target.value })
          }
          type="number"
          value={width}
          placeholder="Ширина"
        />
        <div className="size__inputs-aftersize">
          <span>мм</span>
        </div>
        <input
          label="height"
          name="height"
          onChange={(e) =>
            dispatch({ type: "HEIGHT_CHANGE", payload: e.target.value })
          }
          type="number"
          value={height}
          placeholder="Высота"
        />
        <div className="size__inputs-aftersize">
          <span>мм</span>
        </div>
      </div>
    </>
  );
}
