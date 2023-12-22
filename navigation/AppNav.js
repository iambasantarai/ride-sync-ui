import React, { useContext, useEffect } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { COLORS } from "../constants/colors";

export const AppNav = () => {
  const { authState, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={COLORS.lightCharcol} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {authState.token && authState.authenticated == true ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.darkGray,
  },
  username: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
    color: COLORS.white,
  },

  email: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: COLORS.lightGray,
  },
});
