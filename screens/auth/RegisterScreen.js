import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/PrimaryButton";

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.headerText}>Create a new account</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Your Name</Text>
        <TextInput style={styles.inputText} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>E-mail address</Text>
        <TextInput style={styles.inputText} keyboardType="email-address" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.inputText} secureTextEntry />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput style={styles.inputText} secureTextEntry />
      </View>

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

  link: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.green,
    fontFamily: "hn-normal",
  },
});

export default RegisterScreen;
