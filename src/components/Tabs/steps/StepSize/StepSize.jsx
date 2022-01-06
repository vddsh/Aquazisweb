import React from "react";

import { useContactFormState } from "../../ContactFormContext";

export default function StepSize() {
  const {
    state: { length, innerLength, width, height },
    dispatch,
  } = useContactFormState();

  return (
    <>
      <h1>Enter Your Contact Information</h1>

      <input
        label="length"
        name="length"
        onChange={(e) =>
          dispatch({ type: "LENGTH_CHANGE", payload: e.target.value })
        }
        value={length}
      />

      <input
        label="innerLength"
        name="innerLength"
        onChange={(e) =>
          dispatch({ type: "INNERLENGTH_CHANGE", payload: e.target.value })
        }
        value={innerLength}
      />

      <input
        label="width"
        name="width"
        onChange={(e) =>
          dispatch({ type: "WIDTH_CHANGE", payload: e.target.value })
        }
        value={width}
      />
      <input
        label="height"
        name="height"
        onChange={(e) =>
          dispatch({ type: "HEIGHT_CHANGE", payload: e.target.value })
        }
        value={height}
      />
    </>
  );
}
