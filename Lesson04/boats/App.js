
import React from "react";
import {View,Text, ScrollView} from "react-native";
import {Game} from "./game.js";
const games = [
    {
        name: 'Persona 5 Royal',
        description: 'high school student using the power of persona and kill evils.',
        picture: require('./img/p5r.png')
    },
    {
        name: 'Black Myth Wukong',
        description: 'A journey to the west character wukong fighting to get the relics back.',
        picture: require('./img/bbg.png')
    },
    {
        name: 'Valorant',
        description: 'A modern FPS Game using abilites to get kills',
        picture: require('./img/valorant.jpg')
    },
    {
        name: 'Clash of clans',
        description: 'A tactical game using the army to destroy and defeat other villages',
        picture: require('./img/coc.jpg')
    },
    {
        name: 'Sekiro: Shadow Die Twice',
        description: 'Soul born game figting bosses to save the prince.',
        picture: require('./img/sha.jpg')
    },
];



const AllGames = (props) => {
    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 10, marginLeft: 130}}>
                    Games
                </Text>

                {games.map((game, index) => (
                    <Game
                        key={index}
                        name={game.name}
                        dec={game.description}
                        img={game.picture}
                        icon_name="game-controller"
                        icon_color="black"
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default AllGames;