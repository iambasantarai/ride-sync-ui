import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputField";
import Header from "../../components/Header";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header title={"Welcome back"} />

      <InputField label={"E-mail address"} keyboardType={"email-address"} />

      <InputField label={"Password"} inputType="password" />

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot password? </Text>
      </TouchableOpacity>

      <PrimaryButton
        label={"Login"}
        onPress={() => alert("Login button pressed.")}
      />

      <View style={styles.helper}>
        <Text style={styles.helperText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Register</Text>
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
    fontFamily: "hn-normal",
  },

  helperText: {
    color: COLORS.lightGray,
  },

  forgotPassword: {
    marginVertical: 2,
    textAlign: "right",
    color: COLORS.lightGray,
  },

  link: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.green,
    fontFamily: "hn-normal",
  },
});

export default LoginScreen;
