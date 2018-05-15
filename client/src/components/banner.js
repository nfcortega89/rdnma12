import React, { Component } from 'react';
import styled from 'styled-components';
import Charity from '../assets/charity.jpg';

const Picture = styled.div`
  background-image: url(/static/media/charity.6dc0a27a.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 10%;
  width: 100%;
  height: 105vh;
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
  return <Picture />;
};

export default Banner;
