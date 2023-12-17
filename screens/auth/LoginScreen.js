import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/PrimaryButton";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.headerText}>Welcome back</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>E-mail address</Text>
        <TextInput style={styles.inputText} keyboardType="email-address" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.inputText} secureTextEntry />
      </View>

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

  headerText: {
    marginVertical: 24,
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.lightGray,
    fontFamily: "russo-one",
  },

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
