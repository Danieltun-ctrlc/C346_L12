import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Question({questions, score, setscore}) {
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    function correct(value) {
        if (value && value !== '') {
            setSelectedAnswer(value);
            setAnswered(true);

            if (value === questions.correct_answer) {
                setscore(score + 1);
            } else {
                if (score > 0) {
                    setscore(score - 1);
                }
            }
        }
    }

    return (
        <View style={styles.card}>
            {/* Decorative Corner Accent */}
            <View style={styles.cornerAccent} />
            <View style={styles.cornerAccent2} />

            {/* Question Header */}
            <View style={styles.questionHeader}>
                <View style={styles.headerBadge}>
                    <Text style={styles.headerBadgeText}>Q{questions.question_id}</Text>
                </View>
                <Text style={styles.questionLabel}>Question {questions.question_id}</Text>
            </View>

            {/* Images Container */}
            <View style={styles.container}>
                {questions.question_image_url.map((item, index) => {
                    return (
                        <View key={index} style={styles.imageWrapper}>
                            <Image
                                source={{uri: item}}
                                style={styles.image}
                            />
                            <View style={styles.imageBorder} />
                            {questions.question_choices[index]?.includes('Picture') && (
                                <View style={styles.imageLabel}>
                                    <Text style={styles.imageLabelText}>{questions.question_choices[index]}</Text>
                                </View>
                            )}
                        </View>
                    );
                })}
            </View>

            {/* Question Text */}
            <View style={styles.questionTextContainer}>
                <Text style={styles.main}>{questions.question_text}</Text>
            </View>

            {/* Picker Section */}
            <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Select your answer:</Text>
                <View style={styles.pickerWrapper}>
                    <Picker
                        style={styles.picker}
                        onValueChange={(value) => {correct(value)}}
                        dropdownIconColor="#6366F1"
                    >
                        <Picker.Item label="Choose an option..." value="" color="#999" />
                        {questions.question_choices.map((item, index) => (
                            <Picker.Item key={index} label={item} value={item} />
                        ))}
                    </Picker>
                </View>
            </View>

            {/* Answer Status Indicator */}
            {answered && (
                <View style={styles.statusContainer}>
                    <View style={[
                        styles.statusBadge,
                        selectedAnswer === questions.correct_answer ? styles.correctBadge : styles.incorrectBadge
                    ]}>
                        <Text style={styles.statusText}>
                            {selectedAnswer === questions.correct_answer ? '✓ Correct!' : '✗ Try again'}
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 15,
        gap: 12,
    },
    card: {
        marginTop: 40,

        borderStyle: 'solid',
        width: '90%',
        borderRadius: 24,
        backgroundColor: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(10px)',
        shadowColor: '#6366F1',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
        overflow: 'visible',
        position: 'relative',
        borderWidth: 1,
        borderColor: 'rgba(99, 102, 241, 0.2)',
    },
    cornerAccent: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 60,
        height: 60,
        backgroundColor: 'rgba(99, 102, 241, 0.15)',
        borderTopRightRadius: 24,
        borderBottomLeftRadius: 24,
    },
    cornerAccent2: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 50,
        height: 50,
        backgroundColor: 'rgba(236, 72, 153, 0.12)',
        borderBottomLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    questionHeader: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(99, 102, 241, 0.2)',
        marginBottom: 10,
    },
    headerBadge: {
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(99, 102, 241, 0.4)',
        marginBottom: 8,
    },
    headerBadgeText: {
        color: '#A5B4FC',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    questionLabel: {
        textAlign: "center",
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    imageWrapper: {
        position: 'relative',
        marginHorizontal: 4,
    },
    image: {
        width: 100,
        height: 200,
        borderRadius: 12,
    },
    imageBorder: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'rgba(99, 102, 241, 0.4)',
        pointerEvents: 'none',
    },
    imageLabel: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        right: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
    },
    imageLabelText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    questionTextContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    main: {
        textAlign: "center",
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
        lineHeight: 28,
    },
    pickerContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 10,
    },
    pickerLabel: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 10,
        fontWeight: '500',
    },
    pickerWrapper: {
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(99, 102, 241, 0.3)',
        overflow: 'hidden',
    },
    picker: {
        color: '#FFFFFF',
        backgroundColor: 'transparent',
    },
    statusContainer: {
        alignItems: 'center',
        paddingBottom: 15,
    },
    statusBadge: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 2,
    },
    correctBadge: {
        backgroundColor: 'rgba(34, 197, 94, 0.15)',
        borderColor: 'rgba(34, 197, 94, 0.5)',
    },
    incorrectBadge: {
        backgroundColor: 'rgba(239, 68, 68, 0.15)',
        borderColor: 'rgba(239, 68, 68, 0.5)',
    },
    statusText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});










