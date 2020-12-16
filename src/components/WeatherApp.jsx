import React from 'react';
import Header from './Header';
import FindLocation from './FindLocation';
import styled from 'styled-components';

const WeatherApp = () => {
  return (
    <Container>
      <Header />
      <FindLocation />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;

  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;
export default WeatherApp;
