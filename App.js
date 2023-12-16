import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "hn-light": require("./assets/fonts/HelveticaNeueLight.otf"),
    "hn-normal": require("./assets/fonts/HelveticaNeueRoman.otf"),
    "hn-semibold": require("./assets/fonts/HelveticaNeueMedium.otf"),
    "hn-bold": require("./assets/fonts/HelveticaNeueBold.otf"),
    "russo-one": require("./assets/fonts/RussoOneRegular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: "russo-one", fontSize: 30 }}>
        Get. Set. Go!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
