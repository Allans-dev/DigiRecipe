import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
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

const Globe = ({ id, title, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(id)} style={styles.globeItem}>
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
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getRecipes(URL, setRecipes);
  }, []);

  const onSelect = useCallback(
    (id) => {
      setSelected(id);
    },
    [selected]
  );

  console.log(selected);

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
            selected={selected}
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
        renderItem={({ item }) =>
          item.postId === selected ? (
            <Recipe title={item.title} body={item.body} />
          ) : null
        }
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
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
