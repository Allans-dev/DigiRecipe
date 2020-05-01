import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import AddNewScreen from "./src/screens/AddNewScreen";

const Stack = createStackNavigator();

const App = () => {
  const homeOptions = {
    headerLeft: () => (
      <Button
        onPress={() => alert("This is the sign out button!")}
        title="Sign Out"
        color="#aaa"
      />
    ),
    headerRight: () => (
      <Button
        onPress={() => alert("This is the show all button!")}
        title="Show All"
        color="#aaa"
      />
    ),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={homeOptions}
        />
        <Stack.Screen
          name="AddNew"
          component={AddNewScreen}
          options={{ title: "Add Recipe" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
