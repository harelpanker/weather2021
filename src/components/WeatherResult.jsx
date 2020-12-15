import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import cloud from '../images/cloud.svg';
import snow from '../images/snow.svg';
import snowCloud from '../images/snowCloud.svg';
import sun from '../images/sun.svg';

const WeatherResult = ({ isLoading, weather }) => {
  const temp = Math.round(weather.main.temp);

  const img = (number) => {
    if (number >= 17) {
      return sun;
    } else if (number < 17 && number >= 5) {
      return cloud;
    } else if (number < 5 && number >= -5) {
      return snowCloud;
    } else {
      return snow;
    }
  };

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Container>
          <Date>{moment().format('dddd Do YYYY')}</Date>

          <Temp>{temp}°</Temp>
          <h2>{`${weather.name}, ${weather.sys.country}`}</h2>
          <img src={img(temp)} width='100' alt='Weather icon' />
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
const Date = styled.p`
  line-height: 100%;
  margin-top: 40px;
  align-self: flex-start;
`;
const Temp = styled.h3`
  font-size: 70px;
  margin: 0;
`;
export default WeatherResult;
