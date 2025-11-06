import React from "react";
import {View, Text, StyleSheet} from 'react-native';



const Greeting = ({name, addr}) => {
    return (
        <View>
            <Text>hello {addr} {name}</Text>
        </View>
    );
};

// export default Greeting;

// const ThreeGreeting = () => {
//     return (
//         <View>
//             <Greeting name ="Daniel"/>
//             <Greeting name="Matthew"/>
//             <Greeting name ='paing'/>
//         </View>
//     )
// }

class ThreeGreat extends React.Component {
    render() {
        return (

            <View>
                <Text></Text>
                <Text></Text>
                <Greeting name ="Daniel" addr="Mr"/>
                <Greeting name="Matthew" addr="Miss"/>
                <Greeting name ='paing' addr="Mr"/>
            </View>
        )
    }
}

export default ThreeGreat;