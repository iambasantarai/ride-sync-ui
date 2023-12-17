import { Feather } from "@expo/vector-icons";
import React from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";

import { COLORS } from "../constants/colors";

const profile = require("../assets/whoknows.png");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome, John Doe</Text>
          <ImageBackground
            source={profile}
            style={styles.profileImage}
            imageStyle={styles.profileImage}
          />
        </View>
        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={20}
            color={COLORS.lightGray}
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkGray,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  welcome: {
    fontSize: 16,
    color: COLORS.lightGray,
    fontWeight: "600",
    fontFamily: "hn-normal",
  },

  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: COLORS.lightGray,
    backgroundColor: "#1D2328",
  },

  searchIcon: {
    marginLeft: 10,
  },

  searchInput: {
    color: COLORS.lightGray,
    marginLeft: 10,
    fontSize: 16,
  },
});
