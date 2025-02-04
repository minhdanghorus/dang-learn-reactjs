import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  /* background-color: ${(props) => props.theme.primary}; */
  min-height: 100vh;
  .logo{
    margin: 0 auto 20px;
  }
  .heading{
    text-align: center;
    color: ${(props) => props.theme.primary};
  }
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
