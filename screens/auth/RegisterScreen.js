import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputField";

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.headerText}>Create a new account</Text>

      <InputField label={"Your name"} />

      <InputField label={"E-mail address"} keyboardType={"email-address"} />

      <InputField label={"Password"} inputType="password" />

      <InputField label={"Confirm password"} inputType="password" />

      <PrimaryButton
        label={"Register"}
        onPress={() => alert("Register button pressed.")}
      />

      <View style={styles.helper}>
        <Text style={styles.helperText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Login</Text>
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

  headerText: {
    marginVertical: 24,
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.lightGray,
    fontFamily: "russo-one",
  },

  helper: {
    fontSize: 14,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "hn-normal",
  },

  helperText: {
    color: COLORS.lightGray,
  },

  link: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.green,
    fontFamily: "hn-normal",
  },
});

export default RegisterScreen;
