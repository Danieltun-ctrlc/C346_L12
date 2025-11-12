// Exercise4
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    child: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,

    },
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, {backgroundColor: 'blue'}]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child, {backgroundColor: 'red'}]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child, {backgroundColor: 'green'}]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;