import React, { useContext } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import mapStyle from "../assets/mapStyle.json";
import { COLORS } from "../constants/colors";
import { UserLocationContext } from "../context/UserLocationContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
              latitudeDelta: 0.015,
              longitudeDelta: 0.009,
            }}
          >
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude,
              }}
            >
              <View style={styles.locationMarker}>
                <MaterialCommunityIcons
                  name="bike"
                  style={{ padding: 4 }}
                  size={20}
                  color="white"
                />
              </View>
            </Marker>
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

  locationMarker: {
    borderRadius: 50,
    borderColor: COLORS.green,
    borderWidth: 4,
    backgroundColor: COLORS.darkGray,
  },
});

export default LiveMap;
