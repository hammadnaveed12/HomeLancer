import * as React from "react";
import { Text, View, Image, TouchableOpacity,FlatList, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

function Profile({ navigation }) {
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
    
      let reviews = [
        {
          username: "ifraRiaz",
          src: require("../assets/minahil.jpeg"),
          desc: "Minahil is good cook. She cooked everything in time and delicious. Thanks will Hire her again",
          date: "November 01",
          star: "5.0",
        },
        {
          username: "ifraRiaz",
          src: require("../assets/minahil.jpeg"),
          desc: "Minahil is good cook. She cooked everything in time and delicious. Thanks will Hire her again",
          date: "November 01",
          star: "5.0",
        },
        {
          username: "ifraRiaz",
          src: require("../assets/minahil.jpeg"),
          desc: "Minahil is good cook. She cooked everything in time and delicious. Thanks will Hire her again",
          date: "November 01",
          star: "5.0",
        },
        
      ];
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
      <View style={{ marginTop: 50 }}>
        <View style={{ flexDirection: "row" }}>

            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Ionicons name="chevron-back-sharp" color="black" size={35} />
          </TouchableOpacity>
          <Image
            source={require("../assets/minahil.jpeg")}
            style={{
              height: 70,
              width: 70,
              borderRadius: 200 / 2,
              marginLeft: 140,
            }}
          />
        </View>

        <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
          Minahil Nayyar{" "}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Ionicons name="star-sharp" color="#ffaa4a" size={20} />
          <Text style={{ fontSize: 15, textAlign: "center", color: "grey" }}>
            5.0 (5)
          </Text>
        </View>

        <View style={{marginLeft:10,marginRight:10,marginTop:20}}>
            <Text style={{ fontSize: 25, fontWeight:"600"}}>About Me</Text>
            <Text style={{ fontSize: 20, fontWeight:"400",color:"grey",marginTop:10}}>I am Professional Cook holding 2+ years in cooking. Have made many delicious dishes.I am Professional Cook holding 2+ years in cooking. Have made many delicious dishes</Text>
        </View>
 <View style={{borderBottomWidth:0.2,borderBottomColor:"grey",padding:10}}></View>


        <View style={{marginLeft:10,marginRight:10,marginTop:20,flexDirection:"row",alignItems:"center"}}>
            <MaterialIcons name="category" size={30} color="grey"/>
            <View style={{marginLeft:10}}>
            <Text style={{ fontSize: 18, fontWeight:"300",color:"grey"}}>Categories</Text>
            <Text style={{ fontSize: 16, fontWeight:"400"}}>Cook</Text>
            </View>
        </View>
        <View style={{marginLeft:10,marginRight:10,marginTop:20,flexDirection:"row",alignItems:"center"}}>
            <MaterialIcons name="location-pin" size={30} color="grey"/>
            <View style={{marginLeft:10}}>
            <Text style={{ fontSize: 18, fontWeight:"300",color:"grey"}}>From</Text>
            <Text style={{ fontSize: 16, fontWeight:"400"}}>Lahore, Pakistan</Text>
            </View>
        </View>
        <View style={{marginLeft:10,marginRight:10,marginTop:20,flexDirection:"row",alignItems:"center"}}>
            <MaterialIcons name="work" size={30} color="grey"/>
            <View style={{marginLeft:10}}>
            <Text style={{ fontSize: 18, fontWeight:"300",color:"grey"}}>Last Worked</Text>
            <Text style={{ fontSize: 16, fontWeight:"400"}}>Jan 2, 2023</Text>
            </View>
        </View>
        <View style={{borderBottomWidth:0.2,borderBottomColor:"grey",padding:10}}></View>


<View>

</View>
<Text style={{ fontSize: 25, fontWeight:"600",marginLeft:10,marginTop:15}}>Services By Me</Text>
<FlatList
              data={services}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      borderRadius: 20,
                      shadowColor: "#757575",
                      margin: 10,
                      backgroundColor: "#fff",
                      marginTop: 30,
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
                    onPress={() => {
                      navigation.navigate("ServiceDetail", {
                        title: item.title,
                        desc: item.desc,
                      });
                    }}
                  >
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                          flexDirection: "row",
                          flex: 0.9,
                        }}
                      >
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
                        marginTop: 20,
                      }}
                    >
                      <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        Rs {item.price}
                      </Text>
                      <View
                        style={{
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                          flexDirection: "row",
                          flex: 0.9,
                        }}
                      >
                        <Text>{item.distance} km</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
            <Text style={{ fontSize: 25, fontWeight:"600",marginLeft:10,marginTop:15}}>Reviews</Text>

<FlatList
              data={reviews}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 280,
                    padding: 20,
                    margin: 10,
                    shadowColor: "grey",
                    elevation: 5,
                    shadowRadius: 10,
                    backgroundColor: "#fff",marginBottom:20
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={item.src}
                      style={{ height: 40, width: 40, borderRadius: 200 / 2 }}
                    />
                    <Text
                      style={{ fontSize: 15, marginLeft: 5, fontWeight: "600" }}
                    >
                      {item.username}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 18, marginTop: 10 }}>
                    {item.desc}
                  </Text>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Ionicons name="star" color="yellow" size={15} />
                    <Text>{item.star}</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                      <Text>{item.date}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
      </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
