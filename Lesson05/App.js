import React , {useState}from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';




const InputBox = ({label,onChange}) =>  {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1, borderColor: 'black'}} onChangeText= {onChange}/>

        </View>
    )
}


const MyApp = () => {
    let [pw, setpw] = useState("");
    let [un, setun] = useState("");
    let [usertype, setusertype] = useState("");


    return (
        <View style={{marginTop: 40}}>
            <Text>User Type:</Text>
            <Picker onValueChange={(value) => {setusertype(value)}}>
                <Picker.Item label="Guest" value= "Guest"></Picker.Item>
                <Picker.Item label="Admin" value= "Admin"></Picker.Item>


            </Picker>

            <InputBox label= "Username" onChange={(value) => {setun(value)}}/>
            <InputBox label= "Password" onChange={(value) => {setpw(value)}}/>


            <TouchableOpacity onPress={() => {
                let correctpassword = "12345";
                let mymessage = `Welcome ${usertype} ${un} !`
                if (pw === correctpassword) {
                    Alert.alert('Welcome!');
                    ToastAndroid.show(mymessage, ToastAndroid.SHORT);
                } else {
                    mymessage = "Error! haha wrong password!";
                    ToastAndroid.show(mymessage, ToastAndroid.SHORT);
                }



            }}>
                <Image source={{uri: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png"}}
                style={{width:200, height:200}}/>
            </TouchableOpacity>
        </View>
    );
};

export default MyApp;