//import libraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
// create a component
class AddTodo extends Component {
    state = {
        text: ''
    }
    addTodo = () => {
        this.props.dispatch({ type: 'ADD_TODO', text })
        this.setState({ text: '' })
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    placeholder="Eg. Create New TODO"
                    style={{
                        borderWidth: 1, borderColor: '#f2f2e1',
                        backgroundColor: "#eaeaea", height: 50, flex: 1, padding: 5
                    }}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)} />
                <View style={{
                    height: 50, backgroundColor: "#eaeaea",
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <Ionicons name="md-add" size={30} style={{ color: 'red', padding: 10 }}></Ionicons>
                </View>
            </View>
        );
    }
}
export default connect()(AddTodo);
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

