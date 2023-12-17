import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const PrimaryButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    width: "100%",
    borderRadius: 16,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: COLORS.green,
  },

  buttonText: {
    color: COLORS.white,
    fontFamily: "rosso-one",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default PrimaryButton;
