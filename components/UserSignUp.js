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
    <Text style={styles.text}> Registration for User</Text>
    <View style={{borderBottomWidth:0.4, borderBottomColor: "#2596be", marginBottom:50,width:200,alignSelf:"center"}}></View>
<TextInput placeholder="Name" style={styles.textI} />
<TextInput placeholder="Email" style={styles.textI} />
<TextInput placeholder="Username" style={styles.textI} />
<TextInput placeholder="Phone Number" style={styles.textI} />
<TextInput placeholder="Password" style={styles.textI} />
<TextInput placeholder="Re Type Password" style={styles.textI} />
<TouchableOpacity style={styles.btn} 
onPress={()=>{
    Alert.alert(
        "Registered Successfully",
        "Now Login with your credentials",
        
        [       
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]
      );
}}>
    <Text style={{color:"white"}}>Sign Up</Text>
</TouchableOpacity>


</View>

    );
}



