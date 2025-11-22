// Exercise 1 - Step 1: Import FlatList, StyleSheet, TouchableOpacity
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

// Step 2: Create Data
const dataSource = [
    { key: "a" },
    { key: "b" },
    { key: "c" },
    { key: "d" },
    { key: "e" },
    { key: "f" },
    { key: "g" },
    { key: "h" },
    { key: "i" },
    { key: "j" },
    { key: "k" },
    { key: "l" },
    { key: "m" },
    { key: "n" },
    { key: "o" },
    { key: "p" },
    { key: "q" },
    { key: "r" },
    { key: "s" },
    { key: "t" },
    { key: "u" },
    { key: "v" },
    { key: "w" },
    { key: "x" },
    { key: "y" },
    { key: "z" },
];

// Step 3: Create Stylesheet
const styles = StyleSheet.create(({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'center',

    }
}))
// Step 4: Create renderItem
const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};


// Step 5: Add FlatList item to main view
const MyApp = () => {
    return (
        <View style={{marginTop: 30}}>

            <FlatList data={dataSource} renderItem={renderItem} />

        </View>
    );
};

export default MyApp;


