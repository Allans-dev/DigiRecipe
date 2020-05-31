import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Text, Button, Input } from "react-native-elements";

const AddNewScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  return (
    <View style={styles.root}>
      <Text>Add New Recipe</Text>
      <Input placeholder="Recipe Name" value={name} onChangeText={setName} />
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

export default AddNewScreen;
