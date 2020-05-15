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

const GET_RECIPE_URL: string =
  "https://digirecipe-server.herokuapp.com/recipes";

const Recipe = ({ name, ingredients }) => {
  return (
    <View style={styles.recipeItem}>
      <Text>name: {name}</Text>
      <Text>body: {ingredients}</Text>
    </View>
  );
};

const HomeScreen: React.FC = ({ navigation }) => {
  const [recipes, setRecipes] = useState([
    {
      name: "Omlette",
      group: "Breakfast",
      ingredients: "eggs",
      method: null,
      notes: null,
    },
  ]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    try {
      async () => {
        const response = await getRecipes(GET_RECIPE_URL, "GET");
        const json = setRecipes(response);
      };
    } catch (error) {
      console.log("error in effect");
    }
  }, []);

  const onSelect: void = useCallback(
    (title) => {
      setSelected(title);
    },
    [selected]
  );

  console.log(selected);

  return (
    <View style={styles.root}>
      <View style={styles.logo}>
        <Text>DigiRecipe</Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.globes}
        data={foodGroups}
        renderItem={({ item }) => (
          <Globe
            id={item.group}
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
          item.group === selected ? (
            <Recipe name={item.name} ingredients={item.ingredients} />
          ) : (
            <Text>Your Recipes will show here</Text>
          )
        }
        keyExtractor={(item) => item.name + item.ingredients}
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
    flex: 0.5,
    alignItems: "center",
    paddingTop: 50,
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
