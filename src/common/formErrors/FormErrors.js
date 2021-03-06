import React from "react";
import "./formerrors.css";

export const FormErrors = ({ formErrors }) => (
  <div className="FormErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return <p key={i}> * {formErrors[fieldName]}</p>;
      } else {
        return "";
      }
    })}
  </div>
);
