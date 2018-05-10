import React, { Component } from 'react';
import styled from 'styled-components';
import Ortega from '../assets/ortegas.JPG';

const Picture = styled.div`
  background-image: url(${Ortega});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 13%;
  width: 100%;
  height: 75vh;
  position: relative;
`;
const TagLine = styled.h1`
  position: absolute;
`;
const Banner = () => {
  return (
    <Picture>
      <TagLine>Meet the Ortegas</TagLine>
    </Picture>
  );
};

export default Banner;
