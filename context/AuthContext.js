import React, { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { apiService } from "../services/apiService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const AUTH_TOKEN = "auth_token";

  const [authState, setAuthState] = useState({
    token: null,
    authenticated: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({});

  const getToken = async () => {
    setIsLoading(true);
    const token = await SecureStore.getItemAsync(AUTH_TOKEN);
    setIsLoading(false);

    if (token) {
      apiService.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setAuthState({
        token: token,
        authenticated: true,
      });
    }
  };

  const getProfile = async () => {
    try {
      const response = await apiService.get("/users/profile");
      setUser(response.data.user);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    getProfile();
  }, [authState.token]);

  const register = async (username, email, password) => {
    try {
      setIsLoading(true);
      const response = await apiService.post("/auth/register", {
        username,
        email,
        password,
      });
      setIsLoading(false);

      setAuthState({
        token: response.data.token,
        authenticated: true,
      });

      apiService.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.token}`;

      await SecureStore.setItemAsync(AUTH_TOKEN, response.data.token);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await apiService.post("/auth/login", {
        email,
        password,
      });
      setIsLoading(false);

      setAuthState({
        token: response.data.token,
        authenticated: true,
      });

      apiService.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.token}`;

      await SecureStore.setItemAsync(AUTH_TOKEN, response.data.token);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(AUTH_TOKEN);
    apiService.defaults.headers.common["Authorization"] = "";
    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        register,
        login,
        logout,
        isLoading,
        user,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
