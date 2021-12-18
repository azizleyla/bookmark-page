import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeroImg from "../images/hero.png";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero container">
        <div className="hero__info">
          <h1 className="hero__heading">A Simple Bookmark Manager</h1>
          <p className="hero__paragraph">
            A clean and simple interface to organize your favourite
            websites. Open a new browser tab and see your sites load
            instantly. Try it for free.
          </p>
          <Link to="" className="hero__btn primary">
            Get it on Chrome
          </Link>
          <Link to="" className="hero__btn secondary">
            Get it on FireFox
          </Link>
        </div>
        <div className="hero__img">
          <img src={HeroImg} />
        </div>
      </div>
    </HeroContainer>
  );
};

export const HeroContainer = styled.header`
  position: relative;
 
  .hero {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .hero__info {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .hero__img {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 6.5rem;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
    -webkit-filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
  }

  .hero__heading {
    font-size: 4.8rem;
    font-weight: 500;
    line-height: 5.2rem;
    line-height: -0.15px;
    font-family: "Rubik", sans-serif;
    margin-bottom: 2.4rem;
    color: #242a45;
  }

  .hero__paragraph {
    font-family: "Rubik", sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.8rem;
    color: #242a45;
    mix-blend-mode: normal;
    margin-bottom: 3.2rem;
    opacity: 0.5;
  }

  .hero__btn {
    padding: 1rem 2rem;
    font-size: 1.4rem;
    line-height: 2.8rem;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    color: #fff;
    -webkit-box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.20012);
    box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.20012);
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  .hero__btn.primary {
    background-color: #5267df;
  }

  .hero__btn.secondary {
    color: #242a45;
    background: #f7f7f7;
    margin-left: 1.6rem;
  }
`;

export default Hero;
