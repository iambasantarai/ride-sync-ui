import React, { useContext, useEffect, useState } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { COLORS } from "../constants/colors";

import * as Location from "expo-location";
import { UserLocationContext } from "../context/UserLocationContext";

export const AppNav = () => {
  const { authState, isLoading } = useContext(AuthContext);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords);
      setLocation(location.coords);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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
        <UserLocationContext.Provider value={{ location, setLocation }}>
          <AppStack />
        </UserLocationContext.Provider>
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
