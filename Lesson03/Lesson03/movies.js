import React from "react";
import {View,Text, Image} from "react-native";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export const Movies = ({title, year, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Image source={poster} style={{width: 500, height: 500}} />
            <Text>
                {title} {year}
            </Text>

            <FontAwesome6 name={icon_name} size={50} color={icon_color} />

        </View>
    )
}

