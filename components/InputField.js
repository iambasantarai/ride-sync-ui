import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const InputField = ({ label, inputType, keyboardType }) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      {inputType == "password" ? (
        <TextInput
          style={styles.inputText}
          secureTextEntry
          keyboardType={keyboardType}
        />
      ) : (
        <TextInput style={styles.inputText} keyboardType={keyboardType} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 10,
  },

  inputLabel: {
    fontSize: 14,
    color: COLORS.lightGray,
  },

  inputText: {
    height: 45,
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 16,
    marginVertical: 10,
    color: COLORS.lightGray,
    borderColor: COLORS.lightCharcol,
    backgroundColor: COLORS.charcol,
  },
});

export default InputField;
