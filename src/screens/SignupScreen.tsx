import React, { useState } from "react";
import { Text, View, StyleSheet, Input, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <View>
      <Text>Sign Up</Text>
      <Button title="Log in" onPress={() => navigation.navigate("Log in")} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  errorMessage: {},
});

export default SignupScreen;
