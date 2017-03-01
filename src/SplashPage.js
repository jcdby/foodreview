import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  Images
} from 'react-native'

const SplashPage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Food Reveiw</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 25,
    
  }

})

export default SplashPage;