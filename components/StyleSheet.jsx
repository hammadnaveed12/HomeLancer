import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent:"center"
    },
    textI: {
      backgroundColor: "#e6faff",
      borderRadius: 10,
      padding: 10,
      width: 350,
      marginBottom: 25,
      elevation: 5,
      shadowRadius: 8,
      shadowOpacity: 0.5,
      shadowColor: "#2596be",
      shadowOffset: {
        width: 0,
        height: 3,
      },
    
    },
    text: {
      marginBottom: 20,
      fontSize: 35,
      color: "#2596be",
    },
    

    btn: {
      height: 40,
      width: 300,
      backgroundColor: "#3eb9dc",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 32,
      elevation: 5,
      shadowRadius: 8,
      shadowOpacity: 0.3,
      shadowColor: "#166080",
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
  });

  export default styles;