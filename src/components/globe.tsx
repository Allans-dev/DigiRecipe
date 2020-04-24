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
import images from "../../assets/imgs/imgList.js";

export interface GlobeProps {
  id: number;
  title: string;
  onSelect: void;
  selected: number;
}

const Globe: React.FC<GlobeProps> = ({ id, title, onSelect, selected }) => {
  let imageUri: object[] = [];
  const foodGroups: object = images.foodGroups;
  switch (title) {
    case "Main Meal":
      const mainMeal = foodGroups.mainMeal;
      imageUri = [
        mainMeal.ramen,
        mainMeal.pizza,
        mainMeal.chicken,
        mainMeal.burger,
      ];
      break;
    case "Breakfast":
      const breakfast = foodGroups.breakfast;
      imageUri = [
        breakfast.eggs,
        breakfast.pancakes,
        breakfast.frenchToast,
        breakfast.bigBrekkie,
      ];
      break;
    case "Sides":
      const sides = foodGroups.sides;
      imageUri = [sides.mash, sides.kimchi, sides.hummus, sides.soup];
      break;
    case "Salads":
      const salads = foodGroups.salads;
      imageUri = [
        salads.thaiSalad,
        salads.caesar,
        salads.fruit,
        salads.vegetableSalad,
      ];
      break;
    case "Snacks":
      const snacks = foodGroups.snacks;
      imageUri = [
        snacks.chips,
        snacks.cookies,
        snacks.bananaBread,
        snacks.rolls,
      ];
      break;
    case "Desserts":
      const desserts = foodGroups.desserts;
      imageUri = [
        desserts.cake,
        desserts.iceCream,
        desserts.pie,
        desserts.souffle,
      ];
      break;
    case "Drinks":
      const drinks = foodGroups.drinks;
      imageUri = [
        drinks.coffee,
        drinks.smoothie,
        drinks.cocktail,
        drinks.sangria,
      ];
      break;
    default:
      const defaultImg = images.foodGroups.mainMeal;
      imageUri = [
        defaultImg.ramen,
        defaultImg.pizza,
        defaultImg.chicken,
        defaultImg.burger,
      ];
      break;
  }

  return (
    <TouchableOpacity onPress={() => onSelect(id)} style={styles.globeItem}>
      <Text style={styles.title}>{title}</Text>
      <Image style={[styles.image, styles.topLeft]} source={imageUri[0]} />
      <Image style={[styles.image, styles.topRight]} source={imageUri[1]} />
      <Image style={[styles.image, styles.bottomLeft]} source={imageUri[2]} />
      <Image style={[styles.image, styles.bottomRight]} source={imageUri[3]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  globeItem: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 400,
    borderWidth: 1,
    width: 200,
    height: 200,
    marginVertical: 30,
    justifyContent: "center",
  },
  image: {
    borderWidth: 1,
    width: 99,
    height: 99,
  },
  title: {
    position: "absolute",
    bottom: -40,
  },
  topLeft: {
    borderTopLeftRadius: 400,
  },
  topRight: {
    borderTopRightRadius: 400,
  },
  bottomLeft: {
    borderBottomLeftRadius: 400,
  },
  bottomRight: {
    borderBottomRightRadius: 400,
  },
});

export default Globe;
