// Exercise 2
import React from "react";
import {View, Text, StyleSheet} from 'react-native';



const Exercise2 = () => {
    return (
        <View>
            <Text style={[styles.greenBox, styles.title, styles.boxText]}>Who We Are</Text>
            <Text style={[styles.greenBox, styles.title, styles.boxText]}>Our People</Text>
            <Text style={[styles.greenBox, styles.title, styles.boxText]}>Our Campus</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    }
})


export default Exercise2;