import * as React from 'react';
import { Text, View,FlatList,Dimensions,TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

function Services({navigation}) {
    const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
    let services = [
        {
          title: "Cleaning Service",
          desc: "I will clean your house in 2 hours. I will clean your 2 rooms and one lounge. Fast Service in town",
          distance: 0.4,
          reviews: "5.0",
          price: 500,
          loc: "Lahore",
          category: "Maid",
        },
        {
          title: "Cooking Service",
          desc: "I will cook one time lunch. I will cut all the vegetables also and will cook delicious lunch for you.",
          distance: 1,
          reviews: 4.2,
          price: 550,
          loc: "Lahore",
          category: "Cook",
        },
        {
          title: "Gardening service",
          desc: "I will take care of your plants. I will do gardening for you for one day. For monthly basis contact me",
          distance: 2.2,
          reviews: 4.9,
          price: 1000,
          loc: "Lahore",
          category: "Gardner",
        },
        {
            title: "Cleaning Service",
            desc: "I will clean your house in 2 hours. I will clean your 2 rooms and one lounge. Fast Service in town",
            distance: 0.4,
            reviews: "5.0",
            price: 500,
            loc: "Lahore",
            category: "Maid",
          },

          {
            title: "Cooking Service",
            desc: "I will cook one time lunch. I will cut all the vegetables also and will cook delicious lunch for you.",
            distance: 1,
            reviews: 4.2,
            price: 550,
            loc: "Lahore",
            category: "Cook",
          },
          {
            title: "Cooking Service",
            desc: "I will take care of your plants. I will do gardening for you for one day. For monthly basis contact me",
            distance: 1.2,
            reviews: 4.9,
            price: 1000,
            loc: "Lahore",
            category: "Gardner",
          },
          {
            title: "Cleaning Service",
            desc: "I will clean your house in 2 hours. I will clean your 2 rooms and one lounge. Fast Service in town",
            distance: 0.4,
            reviews: "5.0",
            price: 500,
            loc: "Lahore",
            category: "Maid",
          },
          {
            title: "Cooking Service",
            desc: "I will cook one time lunch. I will cut all the vegetables also and will cook delicious lunch for you.",
            distance: 1,
            reviews: 4.2,
            price: 550,
            loc: "Lahore",
            category: "Cook",
          },
          {
            title: "Cooking Service",
            desc: "I will take care of your plants. I will do gardening for you for one day. For monthly basis contact me",
            distance: 1.2,
            reviews: 4.9,
            price: 1000,
            loc: "Lahore",
            category: "Cook",
          },
      ];
  return (
    <View style={{ flex: 1, justifyContent: 'center',backgroundColor:"#fff"}}>
        <View style={{flex:0.2,marginTop:100}}>
        <Text style={{fontSize:30,fontWeight:"900",marginLeft:50,color:"black"}}>Gardening</Text>
<View style={{borderBottomColor:"grey",borderBottomWidth:0.2}}></View>
      </View>
       <FlatList
          data={services}
       
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{flex:0.8}}
            >
              <TouchableOpacity style={{
                padding: 10,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
                backgroundColor: "#fff",
                
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
              }} onPress={()=>{navigation.navigate("ServiceDetail",{title:item.title, desc: item.desc})}}>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <View style={{alignItems: 'flex-end',justifyContent:'flex-end',flexDirection:"row",flex:0.9}}>
                <Ionicons name="star" size={20} color="yellow" />
                <Text> {item.reviews}</Text>
                </View>
              </View>

              <Text
                style={{ fontSize: 20 }}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                {item.desc}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Ionicons name="location" size={20} color="red" />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",

                    color: "#2596be",
                  }}
                >
                  {" "}
                  {item.loc}
                </Text>
              </View>
              <Text>Category:</Text>
              <View
                style={{
                  padding: 10,
                  borderRadius: 20,
                  shadowColor: "#757575",
                  marginTop: 10,
                  marginBottom: 10,
                  width: 90,
                  backgroundColor: "#54c4e4",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  {item.category}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  Rs {item.price}
                </Text>
                <View style={{alignItems: 'flex-end',justifyContent:'flex-end',flexDirection:"row",flex:0.9}}> 
                <Text >{item.distance} km</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          )}
        />
    </View>
  );
}

export default Services;