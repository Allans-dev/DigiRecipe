import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
// import getRecipes from "../api/fetch";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Globe = ({ title }) => {
  return (
    <View style={styles.globeItem}>
      <Text>{title}</Text>
    </View>
  );
};

const Recipe = ({ title, body }) => {
  return (
    <View style={styles.recipeItem}>
      <Text>title: {title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setRecipes(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.logo}></View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.globes}
        data={DATA}
        renderItem={({ item }) => <Globe title={item.title} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <FlatList
        style={styles.recipe}
        showVerticalScrollIndicator={false}
        data={recipes}
        renderItem={({ item }) => (
          <Recipe title={item.title} body={item.body} />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    borderWidth: 1,
  },
  logo: {
    flex: 0.5,
  },
  globes: {
    flex: 4,
    borderWidth: 1,
  },
  globeItem: {
    borderRadius: 400,
    borderWidth: 1,
    width: 280,
    height: 280,
  },
  recipe: {
    flex: 1,
  },
  recipeItem: {
    borderWidth: 1,
  },
});

export default HomeScreen;
