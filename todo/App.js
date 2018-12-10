import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { blue } from 'ansi-colors';
import TodoApp from './src/TodoApp';
export default class App extends React.Component {
  state = {
    food: "pizza"
  }
  render() {
    return (
      <TodoApp />
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
