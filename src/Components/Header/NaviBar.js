import React from 'react';
import {
  Text,
  StyleSheet,
  Image
} from 'react-native'

export const Header = {
  LeftButton: (route, navigator, index, navState) =>
  { return (<Text>Cancel</Text>); },
  RightButton: (route, navigator, index, navState) =>
  { return (<Text>Done</Text>); },
  Title: (route, navigator, index, navState) =>
  { return (<Text>Food Review</Text>); },
}

export const HeaderStyle = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    borderColor: 'grey',
    borderBottomWidth: 0.5
  }
})