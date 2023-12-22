import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.darkGray,
  },
  text: {
    fontFamily: "Roboto",
    color: COLORS.white,
  },
});

export default ExploreScreen;
