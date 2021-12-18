import React from "react";
import styled from "styled-components";
import chromeImg from "../images/chrome.svg";
import fireboxImg from "../images/firefox.png";
import operaImg from "../images/opare1.png";
const Extension = () => {
  return (
    <ExtensionContainer className="extension">
      <div className="extension__info center">
        <h1 className="center-heading">Download the extension</h1>
        <p className="center-paragraph">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="extension__boxes">
        <div className="extension__box">
          <img src={chromeImg} className="extension__img" />
          <h1 className="box-heading">Add to chrome</h1>
          <p className="box-paragraph">Minimun version 62</p>
          <a href="#" className="btn-primary btn-large">
            Add & Install Extension
          </a>
        </div>
        <div className="extension__box firefox">
          <img src={fireboxImg} className="extension__img" />
          <h1 className="box-heading">Add to chrome</h1>
          <p className="box-paragraph">Minimun version 62</p>
          <a href="#" className="btn-primary btn-large">
            Add & Install Extension
          </a>
        </div>
        <div className="extension__box opera">
          <img src={operaImg} className="extension__img" />
          <h1 className="box-heading">Add to chrome</h1>
          <p className="box-paragraph">Minimun version 62</p>
          <a href="#" className="btn-primary btn-large">
            Add & Install Extension
          </a>
        </div>
      </div>
    </ExtensionContainer>
  );
};

const ExtensionContainer = styled.section`
  .extension__boxes {
    max-width: 910px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 4.8rem;
  }

  .extension__img {
    height: 100px;
    width: 100px;
    margin: 0 auto;
  }

  .extension__box {
    padding: 4.9rem 4rem;
    margin-left: 3.4rem;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 10px 20px -5px rgba(73, 93, 207, 0.20012);
    box-shadow: 0px 10px 20px -5px rgba(73, 93, 207, 0.20012);
    border-radius: 15px;
    text-align: center;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
    -ms-flex-preferred-size: 29%;
    flex-basis: 29%;
  }

  .extension__box.firefox {
    margin-top: 2rem;
  }

  .extension__box.opera {
    margin-top: 4rem;
  }

  .extension__info {
    margin-top: 14rem;
  }

  .box-heading {
    margin-top: 3.2rem;
    font-size: 2rem;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    line-height: 2.3rem;
    left: 0.25px;
  }

  .box-paragraph {
    font-size: 1.5rem;
    line-height: 2.8rem;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    opacity: 0.5;
    color: #242a45;
    margin-top: 0.6rem;
  }
`;

export default Extension;
