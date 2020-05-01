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

const GET_RECIPE_URL: string = "https://jsonplaceholder.typicode.com/comments";

const Recipe = ({ name, body }) => {
  return (
    <View style={styles.recipeItem}>
      <Text>name: {name}</Text>
      <Text>body: {body}</Text>
    </View>
  );
};

const HomeScreen: React.FC = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getRecipes(GET_RECIPE_URL, setRecipes);
  }, []);

  const onSelect: void = useCallback(
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
      <TouchableOpacity
        style={styles.new}
        onPress={() => {
          navigation.navigate("AddNew");
        }}
      >
        <Text>Add New Recipe</Text>
      </TouchableOpacity>
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
    backgroundColor: "#8AC7BC",
    borderWidth: 1,
  },
  logo: {
    borderWidth: 1,
    flex: 0.2,
  },
  globes: {
    flex: 4,
  },
  new: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "#87B9D4",
  },
  recipe: {
    flex: 10,
  },
  recipeItem: {
    borderWidth: 1,
  },
});

export default HomeScreen;
