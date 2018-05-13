import React, { Component } from 'react';
import styled from 'styled-components';
import Charity from '../assets/charity.jpg';

const Picture = styled.div`
  background-image: url(${Charity});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 13%;
  width: 100%;
  height: 75vh;
  position: relative;
`;
const TagLine = styled.h1`
  position: absolute;
  bottom: 20px
  right: 0;
  left: 0;
  margin: 0 auto;
`;
const Banner = () => {
  return (
    <Picture>
      <TagLine>Meet the Ortegas</TagLine>
    </Picture>
  );
};

export default Banner;
