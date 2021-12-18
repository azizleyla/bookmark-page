import React from "react";
import styled from "styled-components";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import bookmarkImg from "../images/bookmark .png";
const Navbar = () => {
  return (
    <>
      <NavbarContainer className="navbar container">
        <div className="navbar__center">
          <div className="navbar__header">
            <div className="navbar__logo">
              <img src={logo1} />
              <img src={logo2} className="bookmark" />
            </div>
            <button type="button" className="navbar__hamburger">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <nav className="navbar__sidebar">
            <div className="navbar__header">
              <div className="navbar__logo">
                <img src={logo3} />
                <img src={bookmarkImg} className="bookmark" />
              </div>
              <button type="button" className="navbar__close-btn">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__link">
                <a href="#" className="navbar__item">
                  Features
                </a>
              </li>
              <li className="navbar__link">
                <a href="#" className="navbar__item">
                  Pricing
                </a>
              </li>
              <li className="navbar__link">
                <a href="#" className="navbar__item navbar__item-border">
                  Contact
                </a>
              </li>
              <li className="navbar__link">
                <a href="#" className="navbar__btn-login">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </NavbarContainer>
    </>
  );
};

const NavbarContainer = styled.nav`
  padding-top: 5.6rem;
  padding-bottom: 10.8rem;
  .navbar__logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .navbar__menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .navbar__center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .navbar__hamburger {
    display: none;
  }

  .navbar__sidebar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .navbar__link {
    margin: 0 2.4rem;
  }

  .navbar__item {
    font-size: 1.8rem;
    color: #242a45;
    line-height: 1.7rem;
    letter-spacing: 1.5px;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
  }

  .navbar__item:hover {
    color: #fa5959;
  }
  .navbar__btn-login {
    font-family: "Rubik", sans-serif;
    display: block;
    background-color: #fa5959;
    -webkit-box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.20012);
    box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.20012);
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 1.5px;
    padding: 1.2rem 3.4rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    cursor: pointer;
    &.active {
      background-color: transparent;
      color: #fa5959;
      border: 2px solid #fa5959;
    }
  }
  .navbar__close-btn {
    display: none;
  }
`;

export default Navbar;
