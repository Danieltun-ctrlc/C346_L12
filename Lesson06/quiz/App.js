import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    ToastAndroid,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Question from './questions_card';


const questions = [{
    question_id: 1,
    question_text: 'Which country is Myanmar?',
    question_image_url: ["https://gisgeography.com/wp-content/uploads/2024/05/Burma-Map.jpg", "https://gisgeography.com/wp-content/uploads/2024/05/Cambodia-Map.jpg"],
    question_choices: ["Picture_1","Picture_2"],
    correct_answer: "Picture_1",
},
    {
        question_id: 2,
        question_text: 'Which continent is shown in the image below?',
        question_image_url: [
            "https://gisgeography.com/wp-content/uploads/2023/12/North-America-Countries-Outline.jpg"
        ],
        question_choices: ["North America","South America","Asia","Europe"],
        correct_answer: "North America",
    },

    {
        question_id: 3,
        question_text: 'Where is Republic Polytechnic located near?',
        question_image_url: ["https://gisgeography.com/wp-content/uploads/2017/09/Singapore-Map.jpg"],
        question_choices: ["Woodlands", "Jurong East", "Woodlands North", "Marsiling"],
        correct_answer: "Woodlands North",
    },
    {
        question_id: 4,
        question_text: 'Which country is not part from the ASEAN?',
        question_image_url: ["https://gisgeography.com/wp-content/uploads/2017/10/Japan-Map.jpg",
            "https://gisgeography.com/wp-content/uploads/2024/05/Burma-Map.jpg",
            "https://gisgeography.com/wp-content/uploads/2017/09/Singapore-Map.jpg"

        ],
        question_choices: ["Picture_1","Picture_2","Picture_3"],
        correct_answer: "Picture_1",
    }
]


export default function App() {
    let [score, setscore] = useState(0);
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {/* Animated Background Pattern */}
                <View style={styles.backgroundPattern}>
                    <View style={styles.patternDot1} />
                    <View style={styles.patternDot2} />
                    <View style={styles.patternDot3} />
                    <View style={styles.patternDot4} />
                    <View style={styles.patternLine1} />
                    <View style={styles.patternLine2} />
                </View>

                {/* Hero Header */}
                <View style={styles.heroSection}>
                    <View style={styles.iconBadge}>
                        <Text style={styles.badgeEmoji}>🗺️</Text>
                    </View>
                    <Text style={styles.title}>GeoMaster Quiz</Text>
                    <Text style={styles.subtitle}>Challenge Your World Knowledge</Text>

                    {/* Progress Bar */}
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: `${(score / 4) * 100}%` }]} />
                        </View>
                        <Text style={styles.progressText}>{score} of 4 correct</Text>
                    </View>
                </View>

                {/* Question Cards with visual separation */}
                <View style={styles.questionsWrapper}>
                    <View style={styles.questionSection}>
                        <View style={styles.questionBadge}>
                            <Text style={styles.questionNumber}>1</Text>
                        </View>
                        <Question questions={questions[0]} score={score} setscore={setscore} />
                    </View>

                    <View style={styles.questionSection}>
                        <View style={styles.questionBadge}>
                            <Text style={styles.questionNumber}>2</Text>
                        </View>
                        <Question questions={questions[1]} score={score} setscore={setscore} />
                    </View>

                    <View style={styles.questionSection}>
                        <View style={styles.questionBadge}>
                            <Text style={styles.questionNumber}>3</Text>
                        </View>
                        <Question questions={questions[2]} score={score} setscore={setscore} />
                    </View>

                    <View style={styles.questionSection}>
                        <View style={styles.questionBadge}>
                            <Text style={styles.questionNumber}>4</Text>
                        </View>
                        <Question questions={questions[3]} score={score} setscore={setscore} />
                    </View>
                </View>

                {/* Premium Submit Section */}
                <View style={styles.submitSection}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={() => {
                            let finalanswer = `Final Score: ${score}/4 🎯`;
                            ToastAndroid.show(finalanswer, ToastAndroid.LONG);
                            if (score === 1) {
                                Alert.alert("🌱 Keep Growing!", "Every expert was once a beginner!");
                            } else if (score === 2) {
                                Alert.alert("⭐ Nice Work!", "You're on the right track!");
                            } else if (score === 3) {
                                Alert.alert("🔥 Excellent!", "Just one away from perfect!");
                            } else if (score === 0) {
                                Alert.alert("📖 Time to Study!", "Geography is fascinating - give it another try!");
                            } else {
                                Alert.alert("🏆 PERFECT SCORE!", "You're a true Geography Master! 👑");
                            }
                        }}>
                        <View style={styles.buttonGlow} />
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Complete Quiz</Text>
                            <View style={styles.buttonIconWrapper}>
                                <Text style={styles.buttonIcon}>→</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.submitHint}>Tap to see your final results</Text>
                </View>

                <View style={styles.bottomSpace} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#0A0E27',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
        height: "200%",
        backgroundColor: '#0A0E27',
        position: 'relative',
    },
    backgroundPattern: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    patternDot1: {
        position: 'absolute',
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(99, 102, 241, 0.08)',
        top: 50,
        right: 20,
        borderWidth: 1,
        borderColor: 'rgba(99, 102, 241, 0.2)',
    },
    patternDot2: {
        position: 'absolute',
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(236, 72, 153, 0.06)',
        top: 200,
        left: 30,
        borderWidth: 1,
        borderColor: 'rgba(236, 72, 153, 0.15)',
    },
    patternDot3: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(34, 197, 94, 0.07)',
        bottom: 300,
        right: 40,
        borderWidth: 1,
        borderColor: 'rgba(34, 197, 94, 0.18)',
    },
    patternDot4: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(251, 191, 36, 0.08)',
        bottom: 150,
        left: 50,
        borderWidth: 1,
        borderColor: 'rgba(251, 191, 36, 0.2)',
    },
    patternLine1: {
        position: 'absolute',
        width: 2,
        height: 200,
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        top: 100,
        left: '25%',
        transform: [{ rotate: '15deg' }],
    },
    patternLine2: {
        position: 'absolute',
        width: 2,
        height: 180,
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        top: 250,
        right: '30%',
        transform: [{ rotate: '-20deg' }],
    },
    heroSection: {
        alignItems: 'center',
        marginBottom: 35,
        zIndex: 10,
        width: '100%',
        paddingHorizontal: 20,
    },
    iconBadge: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: 'rgba(99, 102, 241, 0.15)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderWidth: 3,
        borderColor: 'rgba(99, 102, 241, 0.3)',
        shadowColor: '#6366F1',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 10,
    },
    badgeEmoji: {
        fontSize: 45,
    },
    title: {
        textAlign: 'center',
        fontSize: 36,
        fontFamily: 'monospace',
        letterSpacing: 1,
        color: '#FFFFFF',
        fontWeight: '800',
        marginVertical: 8,
        textShadowColor: 'rgba(99, 102, 241, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
    },
    subtitle: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: '500',
        marginBottom: 25,
        letterSpacing: 0.5,
    },
    progressContainer: {
        width: '85%',
        alignItems: 'center',
    },
    progressBar: {
        width: '100%',
        height: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#6366F1',
        borderRadius: 10,
        shadowColor: '#6366F1',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
    },
    progressText: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.7)',
        marginTop: 10,
        fontWeight: '600',
    },
    questionsWrapper: {
        width: '100%',
        alignItems: 'center',
        zIndex: 5,
    },
    questionSection: {
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    questionBadge: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        borderWidth: 2,
        borderColor: 'rgba(99, 102, 241, 0.4)',
    },
    questionNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#A5B4FC',
    },
    submitSection: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        zIndex: 10,
    },
    button: {
        backgroundColor: 'transparent',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 240,
        borderWidth: 2,
        borderColor: '#6366F1',
        position: 'relative',
        overflow: 'hidden',
    },
    buttonGlow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#6366F1',
        opacity: 0.15,
        borderRadius: 16,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        zIndex: 2,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    buttonIconWrapper: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(99, 102, 241, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    submitHint: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.4)',
        marginTop: 12,
        fontStyle: 'italic',
    },
    bottomSpace: {
        height: 50,
    },
});