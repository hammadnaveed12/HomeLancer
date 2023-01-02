import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import styles from "./StyleSheet"


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function Login({ navigation }) {
  
    
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 200, width: 200 }}
        source={require("../assets/homelancer.png")}
      />

      {/* <Text style={styles.text}> Login</Text> */}

      <TextInput placeholder="Email" style={styles.textI} />
      <TextInput placeholder="Password" style={styles.textI} />
      <TouchableOpacity onPress={()=>{navigation.navigate("Forgot Password")}} style={{ marginLeft: 250 }}>
        <Text style={{}}>Forgot Password?</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={()=>{navigation.navigate("Home1")}} style={styles.btn}>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
          Login
        </Text>
      </TouchableOpacity>

      {/* <Text style={{ margin: 20, fontSize: 20 }}> OR</Text> */}

      <View style={{flexDirection:"row" ,marginTop:200}}>
      <Text style={{fontSize:20}}>Not have an Account? </Text>

      <TouchableOpacity onPress={()=>{navigation.navigate("User Sign Up")}} style={{}}>
        <Text style={{ fontSize:20, fontWeight:"500",  color: "#2596be"  }}>
             Sign Up Here
        </Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row" ,marginTop:20}}>
      <Text style={{fontSize:20}}>Want to be HomeLancer? </Text>

      <TouchableOpacity onPress={()=>{navigation.navigate("HomeLancer Sign Up")}}>
      <Text style={{ fontSize: 20,  fontWeight: "600", color: "#2596be"  }}>
          Register Here
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}



