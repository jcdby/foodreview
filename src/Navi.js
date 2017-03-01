import React from 'react';
import {
  Navigator,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Home from './Home'

const Navi = ({route, natigator}) => {
  return (
    <Navigator
      initialRoute={{name: Home}}
      renderScene={(route, navigator) =>{
        let Component = route.name;
        return (
          <Component route={route} navigator={navigator}></Component>
        )

      }}

    />


  )
}

export default Navi;