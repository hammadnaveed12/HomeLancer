import * as React from 'react';
import { Text, View ,Image,TouchableOpacity} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
    <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#1A1A1A',width:330,padding:20,paddingLeft:12}}>


    <Image source={require("../assets/minahil.jpeg")}
  style={{ height: 60, width: 60, borderRadius: 200 / 2 ,alignSelf: 'flex-start' ,top:22, left:12 }} />
    <Text style={{ color: "white", fontSize: 14 ,fontWeight:'bold',  alignItems: 'center',top:-30}}>minahilnayyar </Text>
      <Text style={{ color: "white", fontSize: 10 , alignItems: 'center',top:-30,left:20}}>Personal balance:PKR200</Text>
      <Ionicons name="notifications-outline" size={20}  color="white" />
      {/* <Image source={require("../assets/minahil.jpeg")} />;
      */}

    </View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: 'white',width:330,padding:20,paddingLeft:12}}>

      
    <Text style={{ color: "black", fontSize: 16 ,fontWeight:'bold',  alignItems: 'center',top:-200,left:-100}}> My app</Text>
    
    
    <TouchableOpacity style={{
  
                padding: 5,
                left:40,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
               
              
                backgroundColor: "#fff",
                bottom:-350,
                
                width: 400,
                backgroundColor: "#fff",
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 0.5,
                shadowColor: "grey",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }} 
      >
         <Ionicons name="logo-usd" size={20}  color="grey" />
        <Text style={{ color: "black",top:-23,left:30}}>Earnings</Text>
      </TouchableOpacity>
  

    

      
      <TouchableOpacity style={{
                padding: 5,
                left:40,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
               
              
                backgroundColor: "#fff",
                top:-65,
                
                width: 400,
                backgroundColor: "#fff",
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 0.5,
                shadowColor: "grey",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }} 
      >
         <Ionicons name="options-outline" size={20}  color="grey" />
        <Text style={{ color: "black",top:-23,left:30}}>Settings</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={{
                padding: 5,
                left:40,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
               
              
                backgroundColor: "#fff",
                top:-75,
                
                width: 400,
                backgroundColor: "#fff",
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 0.5,
                shadowColor: "grey",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }} 
      >
         <Ionicons name="person" size={20}  color="grey" />
        <Text style={{ color: "black",top:-23,left:30}}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
                padding: 5,
                left:40,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
               
              
                backgroundColor: "#fff",
                top:-85,
                
                width: 400,
                backgroundColor: "#fff",
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 0.5,
                shadowColor: "grey",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }} 
      >
         <Ionicons name="md-navigate-outline" size={20}  color="grey" />
        <Text style={{ color: "black",top:-23,left:30}}>Invite Friends</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={{
                padding: 5,
                left:40,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
               
              
                backgroundColor: "#fff",
                top:-95,
                
                width: 400,
                backgroundColor: "#fff",
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 0.5,
                shadowColor: "grey",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }} 
      >
         <Ionicons name="md-help-circle-outline" size={25}  color="grey" />
        <Text style={{ color: "black",top:-23,left:30}}>Support</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={{
                padding: 5,
                left:40,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
               
              
                backgroundColor: "#fff",
                top:-105,
                
                width: 400,
                backgroundColor: "#fff",
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 0.5,
                shadowColor: "grey",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }} 
      >
         <Ionicons name="md-checkmark-done-sharp" size={20}  color="grey" />
        <Text style={{ color: "black",top:-23,left:30}}>Availabiltiy</Text>
      </TouchableOpacity>
  </View>
  </View>
  );
}

export default SettingsScreen;