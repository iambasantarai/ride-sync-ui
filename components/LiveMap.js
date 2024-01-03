import React, { useContext } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import mapStyle from "../assets/mapStyle.json";
import { COLORS } from "../constants/colors";
import { UserLocationContext } from "../context/UserLocationContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

const LiveMap = () => {
  const { location, setLocation } = useContext(UserLocationContext);
  return (
    location?.latitude && (
      <SafeAreaProvider style={styles.container}>
        <View>
          <MapView
            customMapStyle={mapStyle}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: location?.latitude,
              longitude: location?.longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.06,
            }}
          >
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude,
              }}
            />
          </MapView>
        </View>
      </SafeAreaProvider>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: COLORS.darkGray,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default LiveMap;
