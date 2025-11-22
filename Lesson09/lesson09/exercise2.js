// Exercise 1 - Step 1: Import FlatList, StyleSheet, TouchableOpacity
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, SectionList} from 'react-native';

// Step 2: Create Data
const datasource = [
    {
        data: [
            { key: 'a' },
            { key: 'e' },
            { key: 'i' },
            { key: 'o' },
            { key: 'u' },
        ],
        title: "Vowels" , bgcolor: 'skyblue',
    },
    {
        data: [
            { key: 'b' },
            { key: 'c' },
            { key: 'd' },
            { key: 'f' },
            { key: 'g' },
            { key: 'h' },
            { key: 'j' },
            { key: 'k' },
            { key: 'l' },
            { key: 'm' },
            { key: 'n' },
            { key: 'p' },
            { key: 'q' },
            { key: 'r' },
            { key: 's' },
            { key: 't' },
            { key: 'v' },
            { key: 'w' },
            { key: 'x' },
            { key: 'y' },
            { key: 'z' },
        ],
        title: "Consonants", bgcolor: 'khaki',
    }
];


// Step 3: Create Stylesheet
const styles = StyleSheet.create(({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',

    },
    headertext: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
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

            <SectionList sections={datasource} renderItem={renderItem}
                         contentContainerStyle = {{padding: 10}}
                         renderSectionHeader={({section:{title, bgcolor}})=>(
                             <Text style={[styles.headertext, {backgroundColor: bgcolor}]}>{title}</Text>
                         )}/>

        </View>
    );
};

export default MyApp;


