
import React , {useState}from 'react';
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
      <ScrollView>
          <View style = {styles.container}>
              <Text style={styles.title}>Geo Guessing Quiz</Text>
              <Question questions={questions[0]}  score={score} setscore={setscore} />
              <Question questions={questions[1]} score={score} setscore={setscore} />
              <Question questions={questions[2]} score={score} setscore={setscore} />
              <Question questions={questions[3]} score={score} setscore={setscore} />
              <TouchableOpacity style={styles.button} onPress={() => {
                  let finalanswer = `the score: ${score}/4`;
                  ToastAndroid.show(finalanswer, ToastAndroid.LONG);
                  if (score === 1) {
                      Alert.alert("Can try harder!!")
                  } else if (score === 2) {
                      Alert.alert("Good job!!")
                  } else if (score === 3) {
                      Alert.alert("impressive!")
                  } else if (score === 0) {
                      Alert.alert("study harder!")
                  } else  {
                      Alert.alert("Godlike");
                  }
              }}>
                  <View>
                      <Text style={styles.buttonText}>Submit</Text>
                  </View>
              </TouchableOpacity>
          </View>



      </ScrollView>

  );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'monospace',
        letterSpacing: 2,
        color: 'black',
        marginVertical: 20,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
        height: "200%",
        backgroundColor: '#FEFFE3',
    },
    button: {
        backgroundColor: '#4A90E2',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase',
    },

});