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
import SearchField from "../components/SearchField";

export default function HomeScreen({ navigation }) {
  const renderSlider = ({ item, index }) => {
    return <Slider data={item} />;
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <ProfileHeader navigation={navigation} />

        <SearchField />

        <View style={styles.recommendation}>
          <Text style={styles.subHeader}>Recommended for you</Text>
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
          <Text style={styles.subHeader}>Requests</Text>
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

  recommendation: {
    marginVertical: 20,
  },

  subHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.lightGray,
  },

  requests: {
    marginTop: 30,
  },
});
