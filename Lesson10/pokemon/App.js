import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SectionList,
    Image,
    Alert,
} from 'react-native';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('home');
    const [editingItem, setEditingItem] = useState(null);
    const [datasource, setDatasource] = useState([
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
    ]);

    // Home Screen
    const HomeScreen = () => {
        const handleDelete = (sectionIndex, itemIndex) => {
            Alert.alert(
                'Delete Pokemon',
                'Are you sure you want to delete this Pokemon?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    {
                        text: 'Delete',
                        style: 'destructive',
                        onPress: () => {
                            const newData = [...datasource];
                            newData[sectionIndex].data.splice(itemIndex, 1);
                            setDatasource(newData);
                        },
                    },
                ]
            );
        };

        const handleEdit = (item, sectionIndex, itemIndex) => {
            setEditingItem({ item, sectionIndex, itemIndex });
            setCurrentScreen('edit');
        };

        const renderItem = ({ item, section, index }) => {
            const sectionIndex = datasource.findIndex((s) => s.title === section.title);
            const url = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.num}-2x.png`;

            return (
                <View style={styles.itemContainer}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardStyle}>
                            <Text style={styles.pokemonName}>{item.name}</Text>
                            <Image source={{ uri: url }} style={styles.cardImage} />
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => handleEdit(item, sectionIndex, index)}
                        >
                            <Text style={styles.buttonText}>✏️ Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => handleDelete(sectionIndex, index)}
                        >
                            <Text style={styles.buttonText}>🗑️ Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        };

        return (
            <View style={styles.screenContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Pokemon Collection</Text>
                    <TouchableOpacity
                        style={styles.addButtonHeader}
                        onPress={() => setCurrentScreen('add')}
                    >
                        <Text style={styles.addButtonText}>+ Add Pokemon</Text>
                    </TouchableOpacity>
                </View>
                <SectionList
                    contentContainerStyle={styles.listContent}
                    sections={datasource}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.name + index}
                    renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
                        <View style={styles.sectionHeader}>
                            <Text style={[styles.sectionTitle, { backgroundColor: bgcolor }]}>
                                {icon} {title}
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    };

    // Add Screen
    const AddScreen = () => {
        const [name, setName] = useState('');
        const [num, setNum] = useState('');
        const [selectedType, setSelectedType] = useState(0);

        const handleAdd = () => {
            if (name.trim() && num.trim()) {
                const newData = [...datasource];
                newData[selectedType].data.push({ name: name.trim(), num: num.trim() });
                setDatasource(newData);
                setCurrentScreen('home');
            } else {
                Alert.alert('Error', 'Please fill in all fields');
            }
        };

        return (
            <ScrollView style={styles.screenContainer}>
                <View style={styles.formHeader}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => setCurrentScreen('home')}
                    >
                        <Text style={styles.backButtonText}>← Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.formTitle}>Add New Pokemon</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Pokemon Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Charizard"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Pokemon Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. 6"
                        value={num}
                        onChangeText={setNum}
                        keyboardType="numeric"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Select Type</Text>
                    <View style={styles.typeContainer}>
                        {datasource.map((section, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.typeButton,
                                    {
                                        backgroundColor: section.bgcolor,
                                        borderWidth: selectedType === index ? 3 : 1,
                                        borderColor: selectedType === index ? '#000' : '#ccc',
                                    },
                                ]}
                                onPress={() => setSelectedType(index)}
                            >
                                <Text style={styles.typeText}>
                                    {section.icon} {section.title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={handleAdd}>
                        <Text style={styles.submitButtonText}>Add Pokemon</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => setCurrentScreen('home')}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    };

    // Edit Screen
    const EditScreen = () => {
        const [name, setName] = useState(editingItem?.item.name || '');
        const [num, setNum] = useState(editingItem?.item.num || '');

        const handleSave = () => {
            if (name.trim() && num.trim()) {
                const newData = [...datasource];
                newData[editingItem.sectionIndex].data[editingItem.itemIndex] = {
                    name: name.trim(),
                    num: num.trim(),
                };
                setDatasource(newData);
                setCurrentScreen('home');
            } else {
                Alert.alert('Error', 'Please fill in all fields');
            }
        };

        return (
            <ScrollView style={styles.screenContainer}>
                <View style={styles.formHeader}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => setCurrentScreen('home')}
                    >
                        <Text style={styles.backButtonText}>← Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.formTitle}>Edit Pokemon</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Pokemon Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Pokemon name"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Pokemon Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Pokemon number"
                        value={num}
                        onChangeText={setNum}
                        keyboardType="numeric"
                        placeholderTextColor="#999"
                    />

                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.submitButtonText}>Save Changes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => setCurrentScreen('home')}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    };

    // Render current screen
    return (
        <View style={styles.container}>
            {currentScreen === 'home' && <HomeScreen />}
            {currentScreen === 'add' && <AddScreen />}
            {currentScreen === 'edit' && <EditScreen />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    screenContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 15,
        paddingTop: 50,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    addButtonHeader: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    addButtonText: {
        color: '#007AFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    listContent: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    itemContainer: {
        marginBottom: 15,
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 12,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pokemonName: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: '#333',
    },
    cardImage: {
        width: 100,
        height: 140,
        resizeMode: 'contain',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    editButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    sectionHeader: {
        marginTop: 15,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 22,
        paddingVertical: 12,
        paddingHorizontal: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
    },
    formHeader: {
        backgroundColor: '#007AFF',
        padding: 15,
        paddingTop: 50,
    },
    backButton: {
        marginBottom: 10,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    formContainer: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 15,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        backgroundColor: 'white',
    },
    typeContainer: {
        marginTop: 10,
    },
    typeButton: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    typeText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 25,
    },
    saveButton: {
        backgroundColor: '#4CAF50',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 25,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    cancelButtonText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default App;