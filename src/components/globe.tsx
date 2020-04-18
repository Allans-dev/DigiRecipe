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

const Globe = ({ id, title, onSelect, selected, uri }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(id)} style={styles.globeItem}>
      <Image style={[styles.image, styles.topLeft]} source={{ uri }} />
      <Image style={[styles.image, styles.topRight]} source={{ uri }} />
      <Image style={[styles.image, styles.bottomLeft]} source={{ uri }} />
      <Image style={[styles.image, styles.bottomRight]} source={{ uri }} />
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
    marginVertical: 50,
  },
  image: {
    borderWidth: 1,
    width: 99,
    height: 99,
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
