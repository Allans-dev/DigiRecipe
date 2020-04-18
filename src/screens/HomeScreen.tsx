import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import getRecipes from "../api/fetch";

const DATA = [
  {
    id: 1,
    title: "First Item",
  },
  {
    id: 2,
    title: "Second Item",
  },
  {
    id: 3,
    title: "Third Item",
  },
];

const URL = "https://jsonplaceholder.typicode.com/comments";

const Globe = ({ id, title, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.globeItem,
        { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" },
      ]}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
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
  const [selected, setSelected] = useState(new Map());

  useEffect(() => {
    getRecipes(URL, setRecipes);
  }, []);

  const onSelect = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );

  return (
    <View style={styles.root}>
      <View style={styles.logo}></View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.globes}
        data={DATA}
        renderItem={({ item }) => (
          <Globe
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={selected}
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
