import React, { Component } from 'react';
import leftSideMenuContainer from 'containers/leftSideMenu';
import AppTemplate from './AppTemplate';
import centerContentsContainer from 'containers/centerContents';

class App extends Component {
  render() {
    return (
      <AppTemplate
        leftSideMenu={<leftSideMenuContainer />}
        centerContents={<centerContentsContainer  />}
      />
    );
  }
}

export default App;