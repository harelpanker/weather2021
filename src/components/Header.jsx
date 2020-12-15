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
`;

export default Header;
