import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../constants/colors";
const profile = require("../assets/whoknows.png");
import { apiService } from "../services/apiService";

export const ProfileHeader = ({ navigation }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await apiService.get("/users/profile");
        setUser(response.data.user);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    getProfile();
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{user?.username}</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <ImageBackground
          source={profile}
          style={styles.profileImage}
          imageStyle={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerText: {
    fontSize: 24,
    color: COLORS.lightGray,
    fontWeight: "800",
    fontFamily: "Roboto",
  },

  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
});
