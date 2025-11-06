import React from "react";
import {View,Text, Image} from "react-native";

import FontAwesome6 from '@expo/vector-icons/Entypo';


export const Boat = ({icon_name,icon_color,name,dec,img}) => {
    return (
        <View style={{marginBottom: 20}}>

            <Text style={{fontSize: 24, fontFamily: 'Poppins', textAlign: "center"}}>
                <FontAwesome6 name={icon_name} size={20} color={icon_color} />
                {name}
                <FontAwesome6 name={icon_name} size={20} color={icon_color} />
            </Text>
            <Text style={{fontFamily: 'Poppins'}}>{dec}</Text>
            <Image source={img} style={{width: 350, height: 300}} />
        </View>
    )
}