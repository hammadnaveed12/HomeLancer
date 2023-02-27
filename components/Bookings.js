import * as React from 'react';
import { Text, View,Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

function Bookings() {
  return (
    <View style={{flex: 1,backgroundColor:"#fff"}}>
    <View style={{  marginTop:50,marginLeft:10}}>
      <Text style={{fontSize:25,fontWeight:"600",marginBottom:10}}>On Going Bookings (2)</Text>
        <View style={{padding: 10,
                borderRadius: 20,
                shadowColor: "#25",
                margin: 10,
                backgroundColor: "#fff",
                borderWidth:0.2,
                borderBottomColor:"#2596be",
                width: 370,
                
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 1,
                shadowColor: "#2596be",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },}}>

            
            <View style={{flexDirection:"row",alignItems:"center",padding:5}}>
            <Text style={{fontSize:22,fontWeight:"bold"}}>Cleaning Service</Text>
            <View style={{flex:1}}>
            <Text style={{fontSize:30,textAlign:"right",fontWeight:"600",color:"#2596be"}}>Rs 550</Text>
            </View>
            </View>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image
          source={require("../assets/hammad.jpg")}
                      style={{ height: 30, width: 30, borderRadius: 200 / 2 }}
                    />
            <Text style={{fontSize:20,padding:5,color:"grey"}}>Hammad Naveed</Text>

            </View>
            <Text style={{fontSize:20,padding:5}}>Contract Hours: 2 hours</Text>
            <View style={{flexDirection:"row",alignItems:"center",padding:5}}>
            <Text style={{fontSize:18,fontWeight:"500"}}>Deadline:</Text>
            <Text style={{color:"red",fontSize:18,fontWeight:"500"}}> Jan 10, 2023</Text>
           
            {/* <Ionicons  name="arrow-redo-sharp" color="#2596be" size={25} />  */}
            </View>
        </View>
        <View style={{padding: 10,
                borderRadius: 20,
                shadowColor: "#25",
                margin: 10,
                backgroundColor: "#fff",
                borderWidth:0.2,
                borderBottomColor:"#2596be",
                width: 370,
                
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 1,
                shadowColor: "#2596be",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },}}>

            
            <View style={{flexDirection:"row",alignItems:"center",padding:5}}>
            <Text style={{fontSize:22,fontWeight:"bold"}}>Gardening Service</Text>
            <View style={{flex:1}}>
            <Text style={{fontSize:30,textAlign:"right",fontWeight:"600",color:"#2596be"}}>Rs 1000</Text>
            </View>
            </View>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image
          source={require("../assets/hammad.jpg")}
                      style={{ height: 30, width: 30, borderRadius: 200 / 2 }}
                    />
            <Text style={{fontSize:20,padding:5,color:"grey"}}>Hammad Naveed</Text>

            </View>
            <Text style={{fontSize:20,padding:5}}>Contract Hours: 2 hours</Text>
            <View style={{flexDirection:"row",alignItems:"center",padding:5}}>
            <Text style={{fontSize:18,fontWeight:"500"}}>Deadline:</Text>
            <Text style={{color:"red",fontSize:18,fontWeight:"500"}}> Jan 10, 2023</Text>
           
            {/* <Ionicons  name="arrow-redo-sharp" color="#2596be" size={25} />  */}
            </View>
        </View>

        <Text style={{fontSize:25,fontWeight:"600",marginTop:20,marginBottom:10}}>Completed Services (1)</Text>
        
        <View style={{padding: 10,
                borderRadius: 20,
                shadowColor: "#25",
                margin: 10,
                backgroundColor: "#fff",
                borderWidth:0.2,
                borderBottomColor:"#2596be",
                width: 370,
                
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 1,
                shadowColor: "#2596be",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },}}>

            
            <View style={{flexDirection:"row",alignItems:"center",padding:5}}>
            <Text style={{fontSize:22,fontWeight:"bold"}}>Gardening Service</Text>
            <View style={{flex:1}}>
            <Text style={{fontSize:30,textAlign:"right",fontWeight:"600",color:"#2596be"}}>Rs 1000</Text>
            </View>
            </View>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image
          source={require("../assets/hammad.jpg")}
                      style={{ height: 30, width: 30, borderRadius: 200 / 2 }}
                    />
            <Text style={{fontSize:20,padding:5,color:"grey"}}>Hammad Naveed</Text>

            </View>
            <Text style={{fontSize:20,padding:5}}>Contract Hours: 2 hours</Text>
            <View style={{flexDirection:"row",alignItems:"center",padding:5}}>
            <Text style={{fontSize:18,fontWeight:"500"}}>Completed on</Text>
            <Text style={{color:"#2596be",fontSize:18,fontWeight:"500"}}> Jan 1, 2023</Text>
           
            {/* <Ionicons  name="arrow-redo-sharp" color="#2596be" size={25} />  */}
            </View>
        </View>
    </View>
    </View>
  );
}

export default Bookings;