import * as React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen({ Login }) {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  let categories = [
    {
      name: "Gardener",
      src: require("../assets/gardner.jpg"),
    },
    {
      name: "Maids",
      src: require("../assets/maid.jpg"),
    },
    {
      name: "Guards",
      src: require("../assets/gurads.jpg"),
    },
    {
      name: "Cooks",
      src: require("../assets/cooks.jpg"),
    },
  ];

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
      title: "Gardening Service",
      desc: "I will take care of your plants. I will do gardening for you for one day. For monthly basis contact me",
      distance: 1.2,
      reviews: 4.9,
      price: 1000,
      loc: "Lahore",
      category: "Gardner",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 60,
        marginRight: 10,
        width: windowWidth,
        backgroundColor: "white",
      }}
    >
      <Image
        style={{ height: 30, width: 200 }}
        source={require("../assets/hl.png")}
      />
      <View
        style={{
          marginBottom: 20,
          borderBottomWidth: 0.2,
          borderBottomColor: "grey",
          marginTop: 10,
        }}
      ></View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "grey",
          padding: 10,
          borderRadius: 10,
          margin: 10,
        }}
      >
        <View style={{ flex: 0.1 }}>
          <Ionicons name="search" size={20} color="grey" />
        </View>
        <View style={{ flex: 0.8 }}>
          <TextInput placeholder="Search" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", margin: 10, width: windowWidth }}>
          <View style={{ flex: 0.8 }}>
            <Text style={{ fontSize: 30 }}>Categories</Text>
          </View>
          <View style={{ flex: 0.2, marginTop: 15 }}>
            <Text style={{ color: "#2596be", fontSize: 16 }}>See All</Text>
          </View>
        </View>

        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              
            >
              <TouchableOpacity style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                shadowColor: "#757575",
                margin: 10,
                backgroundColor: "#fff",
                elevation: 5,
                shadowRadius: 8,
                shadowOpacity: 0.5,
                shadowColor: "#2596be",
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
              }}
              onPress={()=>{
                navigation.navigate('Services',item.category)
              }}
              >
              <Image
                style={{
                  height: windowHeight * 0.2,
                  width: 180,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={item.src}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                {item.name}
              </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <View
          style={{
            flexDirection: "row",
            margin: 10,
            width: windowWidth,
            marginTop: 50,
            alignItems:"center"
          }}
        >
          <View style={{ flex: 0.8 }}>
            <Text style={{ fontSize: 30 }}>NearBy Services</Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <Text style={{ color: "#2596be", fontSize: 16 }}>See All</Text>
          </View>
        </View>

        <FlatList
          data={services}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              
            >
              <TouchableOpacity style={{
                padding: 10,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
                backgroundColor: "#fff",
                
                width: 300,
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
               onPress={()=>{navigation.navigate("ServiceDetail",{title:item.title, desc: item.desc})}}>
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
                style={{ fontSize: 18 }}
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
                  marginTop:20
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

        <View
          style={{
            flexDirection: "row",
            margin: 10,
            width: windowWidth,
            marginTop: 50,
            alignItems:"center"
          }}
        >
          <View style={{ flex: 0.8 }}>
            <Text style={{ fontSize: 30 }}>Best Services</Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <Text style={{ color: "#2596be", fontSize: 16 }}>See All</Text>
          </View>
        </View>

        <FlatList
          data={services}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              
            >
              <TouchableOpacity style={{
                padding: 10,
                borderRadius: 20,
                shadowColor: "#757575",
                margin: 10,
                backgroundColor: "#fff",
                
                width: 300,
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
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
