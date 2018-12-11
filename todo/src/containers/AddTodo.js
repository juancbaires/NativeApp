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
// create a component
class AddTodo extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    placeholder="Eg. Create New TODO"
                    style={{
                        borderWidth: 1, borderColor: '#f2f2e1',
                        backgroundColor: "#eaeaea", height: 50, flex: 1, padding: 5
                    }}
                />
                <TouchableOpacity onPress={() => alert('added TODO')} />
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
export default AddTodo;
