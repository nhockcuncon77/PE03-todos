import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

const TabBarItem = ({ type, title, setType, border }) => (
    <TouchableHighlight
        underlayColor='#efefef'
        onPress={setType}
        style={[
            styles.item,
            border ? styles.border : null,
            type === title ? styles.selected : null
        ]}>
        <Text style={[
            styles.text,
            type === title ? styles.bold : null
        ]}>
            {title}
        </Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    text: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default TabBarItem;