import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const Header = ({ title }) => {
  return <Text style={styles.headerText}>{title}</Text>;
};

const styles = StyleSheet.create({
  headerText: {
    marginVertical: 24,
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.lightGray,
    fontFamily: "Roboto",
  },
});

export default Header;
