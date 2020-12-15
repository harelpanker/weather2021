import React, { useState, useEffect } from 'react';
import WeatherResult from './WeatherResult';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import styled from 'styled-components';

const base = 'https://api.openweathermap.org/data/2.5/weather';
const api = '0add6a9d656a951fa74e7210e0364525';

const FindLocation = () => {
  const [query, setQuery] = useState('');
  // const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // const handelUnits = () => setUnits(!units);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      try {
        const response = await axios.get(
          `${base}?q=${query}&appid=${api}&units=metric`
        );
        setIsLoading(false);
        setWeather(response.data);
      } catch (error) {
        console.error('Oops!', error);
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  return (
    <Card>
      <Formik
        initialValues={{ location: '' }}
        onSubmit={(val, { resetForm }) => {
          setQuery(val.location);
          resetForm({ val: '' });
        }}>
        <StyledForm noValidate autoComplete='off'>
          <Input
            type='text'
            name='location'
            required
            placeholder='Name a City'
          />
        </StyledForm>
      </Formik>

      {typeof weather.main != 'undefined' && (
        <WeatherResult isLoading={isLoading} weather={weather} />
      )}
    </Card>
  );
};
const StyledForm = styled(Form)`
  width: 90%;
`;
const Input = styled(Field)`
  width: 100%;
  border-radius: 0;
  border: none;
  border-bottom: 2px solid #151515;
  background-color: transparent;
  font-size: 20px;
  font-weight: 700;
  min-height: 35px;
  :focus {
    outline: none;
    border-bottom: 2px solid #0061bb;
  }
`;
const Card = styled.main`
  padding: 30px 15px;
  width: 450px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ghostwhite;
  color: #151515;
  border-radius: 7px;
`;

export default FindLocation;
