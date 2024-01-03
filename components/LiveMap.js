import React, { useContext, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import mapStyle from "../assets/mapStyle.json";
import { COLORS } from "../constants/colors";
import { UserLocationContext } from "../context/UserLocationContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";

const LiveMap = () => {
  const { location, setLocation } = useContext(UserLocationContext);
  const { user, getProfile } = useContext(AuthContext);

  useEffect(() => {
    getProfile();
  }, []);

  const firstLetter = user?.username.charAt(0).toUpperCase();

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
                <Text style={styles.firstLetter}>{firstLetter}</Text>
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
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLORS.green,
    backgroundColor: COLORS.darkGray,
  },

  firstLetter: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LiveMap;
