import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import styles from "./StyleSheet";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
export default function ServiceDetail(props,{navigation} ) {
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
  let included = [
    "Clean 2 rooms",
    "Clean 1 lounge",
    "2 hours service",
    "Dishwashing",
  ];
  return (
    <View style={{ backgroundColor: "#fff", marginTop: 20, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
        >
          <View>
            <TouchableOpacity onPress={()=>{
                 props.navigation.goBack();
            }}>
            <Ionicons name="chevron-back-sharp" size={35} color="black" />

            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <Ionicons
              style={{ marginRight: 20 }}
              name="heart-outline"
              size={30}
              color="black"
            />
            <Ionicons name="share-social" size={30} color="black" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#ceedf6",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 50, width: 50, borderRadius: 200 / 2 }}
            source={require("../assets/minahil.jpeg")}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "600" }}>Minahil Nayyar</Text>
            <Text>Top Rated Cook</Text>
          </View>

          <View
            style={{
              flexDirection: "row",

              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <Ionicons
              style={{}}
              name="chevron-forward-circle-outline"
              size={35}
              color="black"
            />
          </View>
        </View>

        <View>
          <View style={{ padding: 20 }}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}
            >
              {props.route.params.title}
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 30 }}>
              {props.route.params.desc}
            </Text>

            <Text
              style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}
            >
              What Included in this Service?
            </Text>
            <FlatList
              data={included}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="checkmark-done-sharp"
                    size={35}
                    color="#3eb9dc"
                  />
                  <Text style={{ marginLeft: 10, fontSize: 18 }}>{item}</Text>
                </View>
              )}
            />

<Text style={{marginTop:20, fontSize: 20, fontWeight: "500" }}>
                How Much it Cost?
              </Text>

              <Text style={{fontSize:40,color:"#00a4d1",fontWeight:"800"}}>Rs 500</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {" "}
                Reviews on this service (20){" "}
              </Text>
              <Ionicons name="star" size={20} color="#FFCC00" />
              <Text style={{ fontSize: 20 }}> 5.0</Text>
            </View>
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
                    backgroundColor: "#fff",
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

            <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 20 }}>
              {" "}
              Other Services by this HomeLancer{" "}
            </Text>
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
          </View>
        </View>
        <View></View>
      </ScrollView>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "baseline",
            justifyContent: "center",
            margin: 20,
            flex: 0.7,
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              height: 50,
              width: 130,
              margin: 10,
              backgroundColor: "#fff",
              elevation: 10,
              shadowRadius: 20,
              shadowOpacity: 2,
              shadowColor: "#2596be",
              shadowOffset: {
                width: 100,
                height: 100,
              },
            }}
          >
            <Text
              style={{ fontSize: 24, color: "#2596be", fontWeight: "bold" }}
            >
              Hire Me
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "center",
            margin: 20,
            flex: 0.3,
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 60 / 2,
              backgroundColor: "#3eb9dc",
              height: 60,
              width: 60,
              justifyContent: "center",
              alignItems: "center",
            }}

            onPress={()=>{
                props.navigation.navigate("Chat")
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
