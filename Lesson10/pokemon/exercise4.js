// App.js
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    SectionList,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';

const PERSONA_SECTIONS = [
    {
        title: 'Fool Arcana',
        icon: '🎭',
        bgColor: '#f4d03f',
        data: [
            {
                name: 'Arsene',
                user: 'Joker',
                arcana: 'Fool',
                image:
                    'https://static.wikia.nocookie.net/megamitensei/images/1/19/Arsene.png/revision/latest?cb=20170612163748',
            },
            {
                name: 'Satanael',
                user: 'Joker',
                arcana: 'Fool',
                image:
                    'https://static.wikia.nocookie.net/megamitensei/images/7/74/01175_Satanael.png/revision/latest?cb=20220916035653',
            },
        ],
    },
    {
        title: 'Lovers Arcana',
        icon: '❤️',
        bgColor: '#f5b7b1',
        data: [
            {
                name: 'Carmen',
                user: 'Ann Takamaki',
                arcana: 'Lovers',
                image:
                    'https://static.wikia.nocookie.net/megamitensei/images/a/a6/S06_chara69jsyf.png/revision/latest?cb=20170713152516',
            },
            {
                name: 'Hecate',
                user: 'Ann Takamaki',
                arcana: 'Lovers',
                image:
                    'https://static.wikia.nocookie.net/megamitensei/images/a/a6/S06_chara69jsyf.png/revision/latest?cb=20170713152516',
            },
        ],
    },
];

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.personaName}>{item.name}</Text>
                <Text style={styles.arcanaText}>{item.arcana}</Text>
                <Text style={styles.userText}>{item.user}</Text>
            </View>

            <Image
                source={{ uri: item.image }}
                style={styles.personaImage}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

const renderSectionHeader = ({ section }) => {
    return (
        <View
            style={[styles.sectionHeader, { backgroundColor: section.bgColor }]}
        >
            <Text style={styles.sectionIcon}>{section.icon}</Text>
            <Text style={styles.sectionTitle}>{section.title}</Text>
        </View>
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.headerContainer}>
                <Text style={styles.appTitle}>Persona 5 Royal Personas</Text>
                <Text style={styles.appSubtitle}>Grouped by Arcana</Text>
            </View>


            <SectionList
                sections={PERSONA_SECTIONS}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                contentContainerStyle={styles.listContent}
                stickySectionHeadersEnabled={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // VERY IMPORTANT → enables scrolling
        backgroundColor: '#111',
    },
    headerContainer: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    appTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 12,
    },
    appSubtitle: {
        fontSize: 14,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 8,
    },
    listContent: {
        paddingHorizontal: 12,
        paddingBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginTop: 16,
        marginBottom: 4,
    },
    sectionIcon: {
        fontSize: 22,
        marginRight: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 10,
        marginVertical: 6,
        alignItems: 'center',
        height: 300,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 8,
    },
    personaName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fdfdfd',
        marginBottom: 2,
    },
    arcanaText: {
        fontSize: 13,
        color: '#f1c40f',
        marginBottom: 2,
    },
    userText: {
        fontSize: 40,
        color: '#aaaaaa',
    },
    personaImage: {
        width: 90,
        height: 90,
    },
});

export default App;
