import "react-native-gesture-handler";
import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AsyncStorage } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import AddNewScreen from "./src/screens/AddNewScreen";
import DetailScreen from "./src/screens/DetailScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ListScreen from "./src/screens/ListScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext.js";
import { Context as AuthContext } from "./src/context/AuthContext.js";

const App: React.FC = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const { state } = useContext(AuthContext);
  const isSignedIn = AsyncStorage.getItem("token");

  const authFlow = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Sign up"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Log in"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Add New" component={AddNewScreen} />
          <Tab.Screen name="List" component={ListScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="authFlow"
            component={authFlow}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
