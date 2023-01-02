import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import styles from './StyleSheet'
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
export default function UserSignUp({navigation}) {
    return (
<View style={styles.container}>
    <Text style={styles.text}> Registration for HomeLancer</Text>
    <View style={{borderBottomWidth:0.4, borderBottomColor: "#2596be", marginBottom:50,width:200,alignSelf:"center"}}></View>
<TextInput placeholder="Name" style={styles.textI} />
<TextInput placeholder="Email" style={styles.textI} />
<TextInput placeholder="Username" style={styles.textI} />
<TextInput placeholder="Phone Number" style={styles.textI} />
<TextInput placeholder="CNIC" style={styles.textI} />
<TextInput placeholder="Address" style={styles.textI} />
<TouchableOpacity style={styles.btn} 
onPress={()=>{
    Alert.alert(
        "In Progress",
        "Your Information is being processed. You will be notify on your provided email and phone number ",
        
        [       
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]
      );
}}>
    <Text style={{color:"white"}}>Submit Request for Registration</Text>
</TouchableOpacity>


</View>

    );
}


