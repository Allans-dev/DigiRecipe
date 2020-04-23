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

const Globe = ({ id, title, onSelect, selected }) => {
  let imageUri = [];
  switch (title) {
    case "Main Meal":
      imageUri = [
        images.foodGroups.mainMeal.ramen,
        images.foodGroups.mainMeal.pizza,
        images.foodGroups.mainMeal.chicken,
        images.foodGroups.mainMeal.burger,
      ];
      break;
    case "Breakfast":
      imageUri = ["qwr", "gtf", "rgetfh", "fergf"];
      break;
    case "Sides":
      imageUri = ["qwr", "gtf", "rgetfh", "fergf"];
      break;
    case "Salads":
      imageUri = ["qwr", "gtf", "rgetfh", "fergf"];
      break;
    case "Snacks":
      imageUri = ["qwr", "gtf", "rgetfh", "fergf"];
      break;
    case "Desserts":
      imageUri = ["qwr", "gtf", "rgetfh", "fergf"];
      break;
    case "Drinks":
      imageUri = ["qwr", "gtf", "rgetfh", "fergf"];
      break;
    default:
      imageUri = [images.foodGroups.mainMeal.pizza, "gtf", "rgetfh", "fergf"];
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
