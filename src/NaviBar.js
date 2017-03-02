import React from 'react';
import {
  Text
} from 'react-native'

const NaviBar = {
  LeftButton: (route, navigator, index, navState) =>
  { return (<Text>Cancel</Text>); },
  RightButton: (route, navigator, index, navState) =>
  { return (<Text>Done</Text>); },
  Title: (route, navigator, index, navState) =>
  { return (<Text>Awesome Nav Bar</Text>); },
}

export default NaviBar;