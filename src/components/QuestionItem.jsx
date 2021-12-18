import React, { useState } from "react";

const QuestionItem = ({ id, answer, question }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="faq_box" onClick={() => setShowInfo(!showInfo)}>
      <div className="faq__title">
        <p>{question}</p>
        <button type="button" class="faq__btn">
          {showInfo ? (
            <span class="down">
              <i className="fas fa-chevron-down"></i>
            </span>
          ) : (
            <span className="up">
              <i className="fas fa-chevron-up"></i>
            </span>
          )}
        </button>
      </div>
      <div className="faq__answer">{showInfo && <p>{answer}</p>}</div>
    </div>
  );
};

export default QuestionItem;
