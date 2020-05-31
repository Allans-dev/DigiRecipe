import React, { useState, useContext, useCallback } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext.js";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <View style={styles.root}>
      <Text h2>Sign In</Text>
      <Input
        label="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        // onChangeText={(newEmail) => setEmail(newEmail)}
        onChangeText={setEmail}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Button title="Sign in" onPress={() => signin({ email, password })} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
});

export default SigninScreen;
