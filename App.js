import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './components/Login'
import Home1 from './components/Home1'
import ForgotPassword from './components/ForgotPassword';
import HomeLancerSignUp from './components/HomeLancerSignUp';
import UserSignUp from './components/UserSignUp';
import ResetPassword from './components/ResetPassword'
import Code from './components/Code';
import ServiceDetail from './components/ServiceDetail';
import Chat from './components/Chat'


export default function App() {
let   myVar="Dashbaord"
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='Login'
    screenOptions={{headerShown:false}}>
      
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Forgot Password" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name="Code" component={Code}></Stack.Screen>
        <Stack.Screen name="Reset Password" component={ResetPassword}></Stack.Screen>
        <Stack.Screen name="User Sign Up" component={UserSignUp}></Stack.Screen>
        <Stack.Screen name="HomeLancer Sign Up" component={HomeLancerSignUp}></Stack.Screen>
        
        <Stack.Screen name="Home1" component={Home1}></Stack.Screen>
        <Stack.Screen name="ServiceDetail" component={ServiceDetail}></Stack.Screen>
        
        <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
        </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
