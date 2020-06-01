import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";

const AddNewScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  return (
    <View style={styles.root}>
      <Text>Add New Recipe</Text>
      <Input placeholder="Recipe Name" value={name} onChangeText={setName} />
      <DropDownPicker
        items={[
          { label: "Main Meal", value: "Main Meal" },
          { label: "Breakfast", value: "Breakfast" },
          { label: "Sides", value: "Sides" },
          { label: "Salads", value: "Salads" },
          { label: "Snacks", value: "Snacks" },
          { label: "Desserts", value: "Desserts" },
          { label: "Drinks", value: "Drinks" },
        ]}
        defaultIndex={0}
        containerStyle={{ height: 40 }}
        onChangeItem={(item) => {
          console.log(item.label, item.value);
          setGroup(item.value);
        }
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

export default AddNewScreen;
