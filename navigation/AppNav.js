import React, { useContext, useEffect } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

export const AppNav = () => {
  const { authState } = useContext(AuthContext);

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
