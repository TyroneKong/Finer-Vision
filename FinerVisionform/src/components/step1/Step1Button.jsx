import React from "react";
import Button from "@mui/material/Button";

export const Step1Button = ({ step1Validation }) => {
  return (
    <div>
      <Button
        className="step1Button"
        onClick={step1Validation}
        style={{ fontSize: "10px" }}
        variant="contained"
      >
        {"Next >"}
      </Button>
    </div>
  );
};
