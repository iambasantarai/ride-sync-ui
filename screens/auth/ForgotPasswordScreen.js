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

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.headerText}>Forgot password</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>E-mail address</Text>
        <TextInput style={styles.inputText} keyboardType="email-address" />
      </View>

      <TouchableOpacity
        onPress={() => alert("Submit button.")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

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
});

export default ForgotPasswordScreen;
