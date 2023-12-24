import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "../constants/colors";
const profile = require("../assets/whoknows.png");

export const ProfileHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>John Doe</Text>
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
