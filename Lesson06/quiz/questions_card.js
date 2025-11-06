import React , {useState}from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import "./qc.css";





export default  function Question({questions,score,setscore})  {
    function correct(value)  {
        if (value ===  questions.correct_answer) {
            setscore(score + 1)
        } else {
            if (score > 0) {
                setscore(score - 1)
            }
        }

    }
    return (
    <View style={styles.card}>
        <Text style={{textAlign: "center", fontSize: 24, borderStyle: "solid", borderWidth: 1}}>Question Number: {questions.question_id}</Text>
        <View style={styles.container}>
            {questions.question_image_url.map((item, index) => {
                return (<Image key={index} source={{uri: item }} style={{width: 100, height: 200}}/>)
            })}

        </View>

        <Text style={styles.main}>{questions.question_text}</Text>
        <Picker onValueChange={(value) => {correct(value)}}>
            {questions.question_choices.map((item, index) => (
                <Picker.Item key={index} label={item} value={item} />
            ))}

        </Picker>
    </View>
    )
}


const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center"
    }
    ,
    card: {
        marginTop: "40",
        borderWidth: 5,
        borderColor: 'gray',
        borderStyle: 'solid',
        width: '90%',
        borderRadius: 5,
        backgroundColor: 'lightgray',
    }
    ,
    main: {
        textAlign: "center",
        fontSize: 24,


    }

});
















