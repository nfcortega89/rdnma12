import React, { Component } from 'react';
import styled from 'styled-components';
import TopMenu from './topMenu';
import Banner from './banner';

const Application = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;
class App extends Component {
  render() {
    return (
      <Application>
        <TopMenu />
        <Banner />
      </Application>
    );
  }
}

export default App;
