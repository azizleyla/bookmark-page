import React, { useState } from "react";
import styled from "styled-components";
import featuresImg from "../images/features.svg";
import { features } from "../utils/constants";

const Features = () => {
  const [activeBtn, setActiveBtn] = useState("Simple Bookmarking");
  const [currentFeatureItem, setCurrentFeatureItem] = useState(
    features[0],
  );
  const handleClick = (type) => {
    setActiveBtn(type);
    const currentFeature = features.filter((item) => item.type === type);
    setCurrentFeatureItem(currentFeature[0]);
  };

  return (
    <FeaturesContainer className="features container">
      <div className="features__info center">
        <h1 className="features__heading center-heading">Features</h1>
        <p className="features__paragraph center-paragraph">
          Our aim is to make it quick and easy for you to access your
          favourite websites. Your bookmarks sync between your devices so
          you can access them on the go.
        </p>
      </div>
      <div className="features__items">
        <div className="btn-container">
          {features.map((feature) => (
            <button
              type="button"
              onClick={() => handleClick(feature.type)}
              className={feature.type === activeBtn ? "btn active" : "btn"}
            >
              {feature.type}
            </button>
          ))}
        </div>
        <div className="features__contents">
          <div
            className="content content--bookmarking active"
            id="bookmarking"
          >
            <div className="content__row">
              <img src={currentFeatureItem.img} />
              <div className="right-info">
                <h1>{currentFeatureItem.title}</h1>
                <p>{currentFeatureItem.description}</p>
                <a href="#" className="btn-info btn-primary">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.div`
  .btn-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 7.2rem;
  }

  .btn {
    outline: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: block;
    font-size: 1.6rem;
    padding: 2rem 1rem;
    line-height: 1.7rem;
    letter-spacing: 0.53px;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin: 0 4.5rem;
    &.active {
      border-bottom: 2px solid #fa5959;
    }
  }
  .content__row {
    margin-top: 7.2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .content .right-info {
    margin-left: 12rem;
  }

  .content .right-info h1 {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 5.2rem;
    letter-spacing: -0.1px;
    margin-bottom: 1.6rem;
    color: #242a45;
  }

  .content .right-info p {
    font-family: "Rubik", sans-serif;
    color: #242a45;
    opacity: 0.5;
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2.8rem;
  }
`;

export default Features;
