import React, { Component } from 'react';
import NavigationService from './NavigationService';
import ReactRoute from './ReactRoute';

export class AppNavigator extends Component {
  render() {
    return (
      <ReactRoute
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppNavigator;