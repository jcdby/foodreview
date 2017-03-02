import React from 'react';
import {
  Navigator,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Home from './Home';
import * as NaviBar from './Components/Header/NaviBar';

const Navi = ({ route, natigator }) => {
  return (
    <Navigator
      initialRoute={{ name: Home }}
      renderScene={(route, navigator) => {
        let Component = route.name;
        return (
          <Component route={route} navigator={navigator}></Component>
        )
      }}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={NaviBar.Header}
          style={NaviBar.HeaderStyle.header}
        />
      }
    />
  )
}

export default Navi;