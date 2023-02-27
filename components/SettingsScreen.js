import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Profile from "./Profile";

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 0.2, backgroundColor: "#1A1A1A", padding: 20 }}>
        <Image
          source={require("../assets/hammad.jpg")}
          style={{
            height: 60,
            width: 60,
            borderRadius: 200 / 2,
            alignSelf: "flex-start",
            top: 22,
            left: 12,
            marginTop: 40,
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            alignItems: "center",
            left: 90,
            top: -30,
          }}
        >
          hammadnaveed{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            alignItems: "center",
            top: -20,
            left: 90,
          }}
        >
          Personal balance: Rs 200
        </Text>
        <Ionicons
          style={{ alignSelf: "flex-end" }}
          name="notifications-outline"
          size={20}
          color="white"
        />
        {/* <Image source={require("../assets/minahil.jpeg")} />;
         */}
      </View>

      <View
        style={{
          flex: 0.7,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: 330,
          paddingLeft: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            padding: 20,
            left: 40,
            borderRadius: 20,

            alignItems: "center",
            shadowColor: "#757575",
            margin: 10,
            backgroundColor: "#fff",
            top: -65,
            width: 400,
            flexDirection: "row",
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
          <Ionicons name="options-outline" size={18} color="grey" />
          <Text style={{ color: "black", fontSize: 18 }}> Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={{
            padding: 20,
            left: 40,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "#757575",
            margin: 10,
            backgroundColor: "#fff",
            top: -75,
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
          <Ionicons name="person" size={18} color="grey" />
          <Text style={{ color: "black", fontSize: 18 }}> My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 20,
            left: 40,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "#757575",
            margin: 10,

            backgroundColor: "#fff",
            top: -85,

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
          <Ionicons name="md-navigate-outline" size={18} color="grey" />
          <Text style={{ color: "black", fontSize: 18 }}> Invite Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 20,
            left: 40,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "#757575",
            margin: 10,

            backgroundColor: "#fff",
            top: -95,

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
          <Ionicons name="md-help-circle-outline" size={18} color="grey" />
          <Text style={{ color: "black", fontSize: 18 }}> Support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 20,
            left: 40,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "#757575",
            margin: 10,

            backgroundColor: "#fff",
            top: -105,

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
          <Ionicons name="md-checkmark-done-sharp" size={18} color="grey" />
          <Text style={{ color: "black", fontSize: 18 }}>Availabiltiy</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("Earnings")}
          style={{
            padding: 20,
            left: 40,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "#757575",
            margin: 10,

            backgroundColor: "#fff",
            top: -105,

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
          <FontAwesome5 name="money-bill" size={18} color="grey" />
          <Text style={{ color: "black", fontSize: 18 }}> Earnings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SettingsScreen;
