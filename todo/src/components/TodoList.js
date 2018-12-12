//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const TodoList = ({ todos, toggleTodo }) => {
    return (
        <View style={{ padding: 20 }}>
            {todos.map(todo => {
                <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                    <Text style={{
                        fontSize: 24,
                        textDecorationLine:
                            todo.completed ? 'line-through' : 'none'
                    }}>{todo.text}</Text>
                </TouchableOpacity>
            })}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TodoList;
