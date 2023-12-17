import { Feather } from "@expo/vector-icons";
import React from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../constants/colors";
import Carousel from "react-native-snap-carousel";
import { slides } from "../models/data";
import Slider from "../components/Slider";
import { windowWidth } from "../utils/dimension.util";
import { Requests } from "../components/Requests";

const profile = require("../assets/whoknows.png");

export default function HomeScreen({ navigation }) {
  const renderSlider = ({ item, index }) => {
    return <Slider data={item} />;
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, John Doe</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={profile}
              style={styles.profileImage}
              imageStyle={styles.profileImage}
            />
          </TouchableOpacity>
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

        <View style={styles.recommendation}>
          <Text style={styles.headerText}>Recommended for you</Text>
        </View>

        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={slides}
          renderItem={renderSlider}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={styles.requests}>
          <Text style={styles.headerText}>Requests</Text>
          <Requests />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: COLORS.darkGray,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerText: {
    fontSize: 16,
    color: COLORS.lightGray,
    fontWeight: "800",
    fontFamily: "hn-semibold",
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

  recommendation: {
    marginVertical: 20,
  },

  requests: {
    marginTop: 30,
  },
});
