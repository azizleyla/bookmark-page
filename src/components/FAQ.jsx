import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { questions } from "../utils/constants";
import QuestionItem from "./QuestionItem";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState("");

  return (
    <FAQContainer className="faq">
      <div className="faq__info center">
        <h1 className="center-heading">Frequently Asked Questions</h1>
        <p className="center-paragraph">
          Here are some of our FAQs. If you have any other questions you’d
          like answered please feel free to email us.
        </p>
      </div>
      <div className="faq__boxes">
        {questions.map((question) => (
          <QuestionItem key={question.id} {...question} />
        ))}
      </div>
    </FAQContainer>
  );
};

const FAQContainer = styled.section`
  padding: 1rem 2rem;
  margin-top: 14rem;
  .faq__boxes {
    max-width: 54rem;
    margin: 0 auto;
    margin-top: 5.6rem;
    text-align: center;
  }
  .faq__title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    padding: 1.9rem 2rem 1.9rem 0;
  }

  .faq__title p {
    letter-spacing: 0.8px;
    font-size: 1.9rem;
    font-weight: 400;
    font-family: "Rubik", sans-serif;
    line-height: 3.2rem;
    color: #242a45;
    cursor: pointer;
  }

  .faq__title p:hover {
    color: #fa5959;
  }

  .faq__btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    color: #5267df;
    font-size: 1.6rem;
  }

  .faq__btn .up {
    display: none;
  }

  .faq__answer {
    padding-bottom: 1.8rem;
    display: none;
    &.active {
      display: block;
    }
  }

  .faq__answer p {
    text-align: left;
    font-size: 1.5rem;
    line-height: 3.6rem;
    font-weight: 400;
    letter-spacing: 0.15px;
    color: #242a45;
    mix-blend-mode: normal;
    opacity: 0.75;
    font-family: "Rubik", sans-serif;
  }
  .faq__box:last-child .faq__title {
    border-bottom: 1px solid #ccc;
  }

  .faq .show .faq__answer {
    display: block;
  }

  .faq .show .down {
    display: none;
  }

  .faq .show .up {
    color: #fa5959;
    display: inline;
  }
`;
export default FAQ;
