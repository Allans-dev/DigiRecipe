import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import AddNewScreen from "./src/screens/AddNewScreen";
import DetailScreen from "./src/screens/DetailScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AccountScreen from "./src/screens/AccountScreen";

const App: React.FC = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const [isLoggedIn, setLogin] = useState(false);

  const authFlow = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Sign up" component={SignupScreen} />
        <Stack.Screen name="Log in" component={LoginScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            // options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Add New"
            component={AddNewScreen}
            // options={{ title: "Add Recipe" }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            // options={{ title: "Account" }}
          />
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

export default App;

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isLoggedIn ? (
//           <>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Settings" component={SettingsScreen} />
//           </>
//         ) : (
//           <Stack.Screen name="SignIn" component={SignInScreen} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
