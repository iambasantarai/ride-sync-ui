import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputField";
import HeaderText from "../../components/HeaderText";
import { AuthContext } from "../../context/AuthContext";

const RegisterScreen = ({ navigation }) => {
  const { register } = useContext(AuthContext);

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  return (
    <SafeAreaProvider style={styles.container}>
      <HeaderText title={"Create a new account"} />

      <InputField
        label={"Your name"}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <InputField
        label={"E-mail address"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <InputField
        label={"Password"}
        inputType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <InputField
        label={"Confirm password"}
        inputType="password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <PrimaryButton
        label={"Register"}
        onPress={() => {
          register(username, email, password);
        }}
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

  link: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.green,
    fontFamily: "Roboto",
  },
});

export default RegisterScreen;
