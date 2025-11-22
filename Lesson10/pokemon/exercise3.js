import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    SectionList,
    Image,
    Button
} from 'react-native';

// Amend datasource where necessary to include header icon
const datasource = [
    {
        data: [
            { name: 'Pikachu', num: '25' },
            { name: 'Raichu', num: '26' },
        ],
        title: 'Electric',
        bgcolor: 'yellow',
        icon: '⚡',
    },
    {
        data: [
            { name: 'Squirtle', num: '7' },
            { name: 'Psyduck', num: '54' },
        ],
        title: 'Water',
        bgcolor: 'skyblue',
        icon: '💧',
    },
];

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginVertical: 6,
        padding: 6,
    },
    cardStyle: {
        flexDirection: 'row',            // name left, image right
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
        flexShrink: 1,
    },
    headerText: {
        fontSize: 20,
        marginVertical: 10,
        paddingVertical: 6,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 8,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    headerIcon: {
        marginRight: 8,
        fontSize: 22,
    },
    cardImage: {
        width: 120,
        height: 170,
        resizeMode: 'contain',
        marginRight: 6,
    },
});

// Amend code to display pokemon card image
const renderItem = ({ item }) => {
    // insert pokemon card number as part of url
    // let url = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' +   _________    + '.png';
    let url =
        'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' +
        item.num +
        '-2x.png';

    return (
        <TouchableOpacity style={[styles.opacityStyle]}>
            <View style={styles.cardStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image source={{ uri: url }} style={styles.cardImage} />
            </View>
        </TouchableOpacity>
    );
};

// Amend code to display header icon etc
const MyApp = () => {
    return (
        <View style={{ marginTop: 30, marginBottom: 50, paddingHorizontal: 10 }}>
            {/* A) Add Pokemon button above the list view */}
            <Button
                title="Add Pokemon"
                onPress={() => {
                    // will be used next lesson
                }}
            />

            <SectionList
                contentContainerStyle={{ paddingVertical: 10 }}
                sections={datasource}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.name + index}
                renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
                    <View style={{ marginTop: 15 }}>
                        <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                            <Text style={styles.headerIcon}>{icon} </Text>
                            {title}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default MyApp;
