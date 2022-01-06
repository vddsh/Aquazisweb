import React, { useState } from "react";

//Import Steps//
import { useContactFormState } from "./ContactFormContext";
import StepSize from "./steps/StepSize/StepSize";
import StepCategories from "./steps/StepCategories/StepCategories";
import StepParameters from "./steps/StepParameters/StepParameters";
import StepInstallation from "./steps/StepInstallation/StepInstallation";
import "./ContactForm.scss";
import { Page } from "./steps/ui/Page/Page";
import { Form } from "./steps/ui/Form/Form";

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

const ContactForm = () => {
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

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT" });

    // setTimeout(() => {
    //   dispatch({});
    // });
  };

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
    <Page>
      <Form>
        {" "}
        {steps[currentStep]}
        {!isFirst && <button onClick={() => goBack()}>Назад</button>}
        <div className="submit__btn-row">
          <button
            className="submit__btn"
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
            {isLast ? "Submit" : "Дальше"}
          </button>
        </div>
      </Form>
    </Page>
  );
};
export default ContactForm;
