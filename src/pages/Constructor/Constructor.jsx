import React from "react";
import ContactForm from "../../components/Tabs/ContactForm";
import { ContactFormProvider } from "../../components/Tabs/ContactFormContext";

function Constructor() {
  return (
    <ContactFormProvider>
      <ContactForm />
    </ContactFormProvider>
  );
}

export default Constructor;
