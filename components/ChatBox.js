import * as React from 'react';
import { FlatList, Text, View,Image, TouchableOpacity } from 'react-native';


function ChatBox({navigation}) {
    let data = [{
        src:require("../assets/minahil.jpeg"),
        name:"Minahil Nayyar",
        date:"20 December"
    },
    {
        src:require("../assets/minahil.jpeg"),
        name:"Ifra Riaz",
        date:"18 December"
    },
    {
        src:require("../assets/hammad.jpg"),
        name:"Hammad Naveed",
        date:"15 December"
    },
    ]
  return (
    <View style={{ flex: 1,marginTop:50 }}>
      <View style={{flex:0.1}}>
<Text style={{fontSize:30,fontWeight:"900",marginLeft:10}}>Inbox</Text>
<View style={{borderBottomColor:"grey",borderBottomWidth:0.2}}></View>
      </View>

      <FlatList
      data={data}

      renderItem={({item})=>(
        <View>
        <TouchableOpacity style={{flex:1,flexDirection:"row",marginLeft:10,justifyContent:"center",marginBottom:20}} onPress={()=>{navigation.navigate("Chat"),item.name}}>
<View style={{flex:0.2}}>
<Image
          source={item.src}
                      style={{ height: 70, width: 70, borderRadius: 200 / 2 }}
                    />
     </View>

<View style={{flex:0.8,flexDirection:"row",alignItems:"center"}}> 
<View>
<Text style={{fontSize:24}}>{item.name}</Text>
<Text style={{color:"grey",paddingTop:10}}>Dummy Message</Text>
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

export default ChatBox;