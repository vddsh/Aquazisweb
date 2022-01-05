import React, { useState } from "react";

//Import Steps//
import { useContactFormState } from "./ContactFormContext";

const useFormProgress = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return [currentStep, goNext, goBack];
};

function ContactForm() {
  const { dispatch, state } = useContactFormState();
  const steps = [
    <StepSize />,
    <StepCategories />,
    <StepInstallation />,
    <StepParameters />,
  ];

  const [currentStep, goNext, goBack] = useFormProgress();
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;
}

const handleSubmit = () => {
  dispatch({ type: "SUBMIT" });

  // setTimeout(() => {
  //   dispatch({});
  // });

  if (state.isSubmitLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (state.isSubmissionReceived) {
    return (
      <div className="App">
        <h1>Грузится ссылка по фечу</h1>
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <Container>
      {steps[currentStep]}

      <NavButtonContainer>
        {!isFirst && <button onClick={() => goBack()}>Go Back</button>}

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            if (isLast) {
              handleSubmit();
            } else {
              goNext();
            }
          }}
        >
          {isLast ? "Submit" : "Next"}
        </button>
      </NavButtonContainer>
    </Container>
  );
};
export default ContactForm;
