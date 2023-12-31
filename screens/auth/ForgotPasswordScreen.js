import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputField";
import HeaderText from "../../components/HeaderText";

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <HeaderText title={"Forgot password"} />

      <InputField label={"E-mail address"} keyboardType={"email-address"} />

      <PrimaryButton
        label={"Submit"}
        onPress={() => alert("Submit button pressed.")}
      />

      <View style={styles.helper}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.helperText}>Back to login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
    backgroundColor: COLORS.darkGray,
  },

  helper: {
    fontSize: 14,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Roboto",
  },

  helperText: {
    color: COLORS.lightGray,
  },
});

export default ForgotPasswordScreen;
