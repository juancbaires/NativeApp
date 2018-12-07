import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { blue } from 'ansi-colors';
export default class App extends React.Component {
  state = {
    food: "pizza"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!Im Juan and my favorite food is {this.state.food}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
  }
});
