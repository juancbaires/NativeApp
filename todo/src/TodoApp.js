//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/visibleTodos'
// create a component
class TodoApp extends Component {

    state = {
        todos: [],
        visibilityFilter: 'SHOW_ALL_TODOS'
    }
    render() {
        return (
            <View style={styles.container}>
                <AddTodo />
                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default TodoApp;
