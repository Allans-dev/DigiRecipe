import "react-native-gesture-handler";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AsyncStorage } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import AddNewScreen from "./src/screens/AddNewScreen";
import DetailScreen from "./src/screens/DetailScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ListScreen from "./src/screens/ListScreen";
import LoadingScreen from "./src/screens/LoadingScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext.js";
import { Context as AuthContext } from "./src/context/AuthContext.js";

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const { state, addError, persistedSignin, isLoading } = useContext(
    AuthContext
  );
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        isLoading(true);
        const token = await AsyncStorage.getItem("token");
        if (token != null) {
          persistedSignin(token);
        }
        isLoading(false);
      })();
    } catch (error) {
      addError("Not in storage, unable to sign in");
    }
  }, []);

  const authFlow = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Sign up" component={SignupScreen} />
        <Stack.Screen name="Sign in" component={SigninScreen} />
      </Stack.Navigator>
    );
  };

  if (!!state.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {!!state.token ? (
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
