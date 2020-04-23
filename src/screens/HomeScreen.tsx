import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { getRecipes, foodGroups } from "../api/fetch";
import Globe from "../components/globe";

const GET_RECIPE_URL: String = "https://jsonplaceholder.typicode.com/comments";

const Recipe = ({ name, body }) => {
  return (
    <View style={styles.recipeItem}>
      <Text>name: {name}</Text>
      <Text>body: {body}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getRecipes(GET_RECIPE_URL, setRecipes);
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
        data={foodGroups}
        renderItem={({ item }) => (
          <Globe
            id={item.id}
            title={item.group}
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
            <Recipe name={item.name} body={item.body} />
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
    borderWidth: 1,
    backgroundColor: "green",
    flex: 0.5,
  },
  globes: {
    flex: 4,
  },
  recipe: {
    flex: 1,
  },
  recipeItem: {
    borderWidth: 1,
  },
});

export default HomeScreen;
