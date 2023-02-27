import * as React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


function Earnings({ navigation }) {

   let data =[{
        date:"Jan 01,2023",
        earnings:"Rs 1000"
    },{
        date:"Dec 25,2022",
        earnings:"Rs 1000"
    },{
        date:"Dec 20,2022",
        earnings:"Rs 1000"
    },{
        date:"Dec 18,2022",
        earnings:"Rs 1000"
    },{
        date:"Dec 10,2022",
        earnings:"Rs 1000"
    }]
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1,marginTop:50 }}>
      <View style={{flex:0.1,flexDirection:"row"}}>

      <Ionicons name="chevron-back-sharp" color="black" size={35} />
<Text style={{fontSize:30,fontWeight:"900",marginLeft:10}}>Earnings</Text>
<View style={{borderBottomColor:"grey",borderBottomWidth:0.2}}></View>
      </View>

      <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",marginTop:50}}>Total Earnings</Text>
      <Text style={{fontSize:30,color:"#2596be",fontWeight:"bold",textAlign:"center"}}>Rs 5000</Text>

      <Text style={{fontSize:25,fontWeight:"500",marginTop:30,marginLeft:10}}>Earning By Date</Text>

      <FlatList 
      data={data}


      renderItem={({item})=>(
        <View>
<View style={{marginLeft:10,flexDirection:"row",alignItems:"center",marginTop:20}}>

<MaterialIcons name="date-range" size={30} color="grey"/>
<Text style={{fontSize:19}}> {item.date}</Text>
<Text style={{fontSize:22,color:"green",textAlign:"right",marginLeft:200}}>{item.earnings}</Text>

      </View>
      <View style={{borderBottomColor:"grey",borderBottomWidth:0.2,marginTop:10}}></View>
      </View>
      )}
      
      />
</View>

    </View>
  );
}

export default Earnings;
