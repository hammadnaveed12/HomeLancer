import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import styles from './StyleSheet';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
export default function Code({navigation}) {


        return (
<View style={styles.container}>

    <Text style={{fontSize:30,textAlign:"center",marginTop:150, marginBottom:50}}>Reset Your Password </Text>
 
<TextInput placeholder="Enter New Password" style={styles.textI} />
<TextInput placeholder="Confirm Password" style={styles.textI} />
<TouchableOpacity style={styles.btn} 
onPress={()=>{
    Alert.alert(
        "Password Changed Successfully",
        "Now Login Again with new Password",
        
        [
          
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]
      );
}}>
    <Text style={{color:"white"}}>Reset Password</Text>
</TouchableOpacity>





</View>

    );
}


