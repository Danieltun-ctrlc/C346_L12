import React from "react";
import {View, Text, StyleSheet} from 'react-native';



const Welcome = ({code,name}) => {
    return (
        <View>

            <Text>Welcome to {code} - {name}</Text>
        </View>
    );
};

class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text></Text>
                <Text></Text>
                <Text>These are my modules this semester:</Text>
                <Text><Welcome name= "Mobile App Development" code="C346"/></Text>
                <Text><Welcome name= "Introduction to Programming" code="C105"/></Text>
                <Text><Welcome name= "Immersive Technologies" code="C337"/></Text>
            </View>
        )
    }
}

export default ModuleInfo;