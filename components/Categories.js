import * as React from 'react';
import { FlatList, Text, View,Image, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


function Categories({navigation}) {
    let data = [{
        src:require("../assets/gardner.jpg"),
        name:"Gardner",
        
    },
    {
        src:require("../assets/maid.jpg"),
        name:"Maids",
        
    },
    {
        src:require("../assets/gurads.jpg"),
        name:"Guards",
        
    },
    {
        src:require("../assets/cooks.jpg"),
        name:"Cooks",
        
    },
    ]
  return (
    <View style={{ flex: 1,marginTop:50 }}>
      <View style={{flex:0.1,flexDirection:"row",marginBottom:15}}>
      <TouchableOpacity onPress={()=>{
                 navigation.goBack();
            }}>
            <Ionicons name="chevron-back-sharp" size={35} color="black" />

            </TouchableOpacity>
<Text style={{fontSize:30,fontWeight:"900",marginLeft:10}}>Categories</Text>
<View style={{borderBottomColor:"grey",borderBottomWidth:0.2}}></View>
      </View>

      <FlatList
      data={data}

      renderItem={({item})=>(
        <View>
        <TouchableOpacity style={{flex:1,flexDirection:"row",marginLeft:10,justifyContent:"center",marginBottom:20}} onPress={()=>{navigation.navigate("Services"),item.name}}>
<View style={{flex:0.2}}>
<Image
          source={item.src}
                      style={{ height: 70, width: 70, borderRadius: 200 / 2 }}
                    />
     </View>

<View style={{flex:0.8,flexDirection:"row",alignItems:"center"}}> 
<View>
<Text style={{fontSize:24}}>{item.name}</Text>

</View>
<View style={{alignItems:"flex-end",flex:0.9}}>
    <Text style-={{}}>{item.date}</Text>
    </View>
    
</View>

</TouchableOpacity>
</View>
  )}/>
    </View>
  );
}

export default Categories;