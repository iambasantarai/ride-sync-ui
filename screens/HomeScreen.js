import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, StyleSheet, View, ScrollView, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS } from "../constants/colors";
import Carousel from "react-native-snap-carousel";
import { slides } from "../models/data";
import Slider from "../components/Slider";
import { windowWidth } from "../utils/dimension.util";
import { Requests } from "../components/Requests";
import { ProfileHeader } from "../components/ProfileHeader";

export default function HomeScreen({ navigation }) {
  const renderSlider = ({ item, index }) => {
    return <Slider data={item} />;
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <ProfileHeader navigation={navigation} />

        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={20}
            color={COLORS.lightGray}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={COLORS.lightGray}
          />
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
