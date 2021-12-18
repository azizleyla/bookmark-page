import React from "react";
import styled from "styled-components";
import footerLogo from "../images/footerlogo.png";

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <div className="container">
        <div className="footer__items">
          <div className="footer__logo">
            <img src={footerLogo} />
          </div>
          <ul className="footer__menu">
            <li className="footer__menu__item">
              <a href="#" className="footer__menu__link">
                Features
              </a>
            </li>
            <li className="footer__menu__item">
              <a href="#" className="footer__menu__link">
                Pricing
              </a>
            </li>
            <li className="footer__menu__item">
              <a href="#" className="footer__menu__link">
                Contact
              </a>
            </li>
            <li className="footer__menu__item">
              <a href="#" className="footer__menu__link">
                Login
              </a>
            </li>
          </ul>
          <ul className="footer__social-media">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #242a45;
  padding: 3.6rem 0;
  .footer__items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .footer__menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .footer__menu__item {
    margin-left: 4.5rem;
  }

  .footer__menu__link {
    text-transform: uppercase;
    color: #fff;
    font-size: 1.3rem;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    line-height: 1.7rem;
    transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -ms-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    letter-spacing: 1.5px;
  }

  .footer__menu__link:hover {
    color: #fa5959;
  }

  .footer__social-media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: auto;
  }

  .footer__social-media a {
    color: #fff;
    font-size: 1.9rem;
    margin-left: 3rem;
  }

  .footer__social-media a:hover {
    color: #fa5959;
  }
`;
export default Footer;
