import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <section className="contact">
        <div className="contact__info center">
          <h5 className="center-heading center-heading-contact">
            35,000+ ALREADY JOINED
          </h5>
          <h2 className="center-paragraph center-paragraph-contact">
            Stay up-to-date with what we’re doing.
          </h2>
          <form className="form">
            <input
              type="email"
              placeholder="@examplegmail.com"
              className="form__control"
            />
            <input
              type="submit"
              value="Contact Us"
              className="form__submit"
            />
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contact {
    padding: 5.8rem 0;
    background-color: #5267df;
    color: #fff;
    margin-top: 14rem;
  }

  .contact .center-heading-contact {
    color: #fff;
    letter-spacing: 5px;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    line-height: 4rem;
    font-size: 1.3rem;
    padding-top: 5.8rem;
  }
  .contact__info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .contact .center-paragraph-contact {
    color: #fff;
    line-height: 4rem;
    font-size: 3rem;
    font-weight: 500;
    font-family: "Rubik", sans-serif;
    letter-spacing: -0.1px;
    opacity: 1;
  }

  .contact .form {
    margin-top: 3.6rem;
  }

  .contact .form__control {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: none;
    line-height: 2.8rem;
    border: 2px solid #fa5959;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
    -ms-border-radius: 0.5rem;
    -o-border-radius: 0.5rem;
  }

  .contact .form__submit {
    display: inline-block;
    padding: 1rem 2.4rem;
    border: 2px solid #fa5959;
    -webkit-box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.20012);
    box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.20012);
    border-radius: 5px;
    margin-left: 1.6rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    color: #fa5959;
    font-size: 1.4rem;
    letter-spacing: 0.25px;
    line-height: 2.8rem;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
  }
`;

export default Contact;
