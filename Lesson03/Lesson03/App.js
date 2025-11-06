import React from "react";
import {View,Text, ScrollView} from "react-native";
import {Movies} from "./movies.js"

const AllMovies = () => {
    return (
        <ScrollView>

                <Text>My Favourite MoviGGGGGGGGes</Text>
                <Movies title= "Doctor Sleep" year= "2019" icon_name= "skull" icon_color= "red" poster = {require("./img/doctor-sleep.jpg")}/>
                <Movies  title= "Midway" year = "2020" icon_name= "person-rifle" icon_color= "green" poster = {require("./img/midway.jpg")}/>

        </ScrollView>

    )
}
export default AllMovies;