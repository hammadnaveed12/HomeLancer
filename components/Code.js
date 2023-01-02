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
} from "react-native";
export default function Code({navigation}) {


        return (
<View style={styles.container}>

    <Text style={{fontSize:40,textAlign:"center",marginTop:150, marginBottom:50}}>Enter OTP </Text>
 
<TextInput placeholder="Enter Your OTP" style={styles.textI} />

<TouchableOpacity style={styles.btn} 
onPress={()=>{
    navigation.navigate("Reset Password")
}}>
    <Text style={{color:"white"}}>Submit</Text>
</TouchableOpacity>





</View>

    );
}


