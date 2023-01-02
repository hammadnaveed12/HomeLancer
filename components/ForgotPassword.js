import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import styles from './StyleSheet';
import Code from './Code'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function ForgotPassword({navigation}) {

    const [value, setValue] = useState(0)
    console.log(value)

        return (
<View style={styles.container}>

    <Text style={{fontSize:30,textAlign:"center",marginTop:60}}>Forgot Password?</Text>
    <View style={{borderBottomWidth:0.4, borderBottomColor: "grey", marginTop:10,marginBottom:50,width:100,alignSelf:"center"}}></View>
<TextInput placeholder="Enter Your Registered Email" style={styles.textI} />

<TouchableOpacity style={styles.btn} 
onPress={()=>{
    navigation.navigate("Code")
}}>
    <Text style={{color:"white"}}>Forgot Password</Text>
</TouchableOpacity>


{/* {(value==1) ? (<TouchableOpacity style={styles.btn} 
onPress={()=>{
    navigation.navigate("Reset Password")
}}>
    <Text style={{color:"white"}}>Forgot Password</Text>
</TouchableOpacity>
    ): <Text></Text>} */}


</View>

    );
}


