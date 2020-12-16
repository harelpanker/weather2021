import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <header>
      <Title>Weather App</Title>
    </header>
  );
};

const Title = styled.h1`
  font-size: 85px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 75px;
    line-height: 110%;
  }
`;

export default Header;
