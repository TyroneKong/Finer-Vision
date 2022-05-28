import React from "react";
import "./Step3.scss";
import Button from "@mui/material/Button";

export const Step3 = ({
  showStep3,
  step3show,
  handleComment,
  comment,
  commentRef,
}) => {
  return (
    <div>
      <label>
        <p className="form__finalComments-title" onClick={showStep3}>
          Step 3: Final Comments
        </p>
        <label className={step3show ? "form__finalComments-textarea" : "hide"}>
          <label className="form__finalComments">
            Comments
            <div className="form__finalComments-textarea-container">
              <textarea
                onChange={handleComment}
                value={comment}
                ref={commentRef}
                className="form__finalComments-textarea"
              ></textarea>
            </div>
            <div className="button__step3">
              <Button
                type="submit"
                className="step3Button"
                style={{ fontSize: "10px", backgroundColor: "purple" }}
                variant="contained"
              >
                {"Next >"}
              </Button>
            </div>
          </label>
        </label>
      </label>
    </div>
  );
};
