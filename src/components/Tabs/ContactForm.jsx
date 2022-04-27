import React, { useState, useEffect } from "react";

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

  return [currentStep, goNext, goBack, setCurrentStep];
};

const ContactForm = () => {
  const [validationButton, setValidationButton] = useState(false);
  const { dispatch, state } = useContactFormState();

  /* validation */
  const {
    state: {
      length,
      innerLength,
      width,
      height,
      categories,
      installation,
      profileColor,
    },
  } = useContactFormState();
  /* validation */

  const steps = [
    <StepSize />,
    <StepCategories />,
    <StepInstallation />,
    <StepParameters />,
  ];

  const [currentStep, goNext, goBack, setCurrentStep] = useFormProgress();
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  /* validation */
  useEffect(() => {
    if (0 < currentStep < 3 && length && innerLength && width && height) {
      setValidationButton(true);
    } else {
      setValidationButton(false);
    }
  }, [length, innerLength, width, height]);
  /* validation */

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT" });

    setTimeout(() => {
      dispatch({ type: "SUBMISSION_RECEIVED" });
    }, 1500);
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
        <h1>ссылка по фечу</h1>
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <Page>
      <Form
        onChange={(value) => setCurrentStep(value)}
        currentStep={currentStep}
      >
        <div className="contactform__items">{steps[currentStep]}</div>
        <div className="contactform__btns">
          <div className="submit__btn-row">
            {!isFirst && (
              <button className="submit__btn-back" onClick={() => goBack()}>
                Назад
              </button>
            )}
            <button
              disabled={!validationButton}
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
              {isLast ? "Просчитать" : "Дальше"}
            </button>
          </div>
        </div>
      </Form>
    </Page>
  );
};
export default ContactForm;
