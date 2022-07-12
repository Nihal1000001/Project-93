import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Tips extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tips</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'centre',
    backgroundColor:"cyan"
  },
  text: {
    justifyContent: 'centre',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
