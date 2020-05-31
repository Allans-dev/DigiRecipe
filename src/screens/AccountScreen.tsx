import React, { useState, useContext, useCallback } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext.js";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  // const navigate = () => navigation.navigate("authFlow");
  return (
    <View style={styles.root}>
      <Text>Account</Text>
      <Button
        title="Sign out"
        onPress={() => {
          signout();
          // navigate();
        }}
      />
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

export default AccountScreen;
