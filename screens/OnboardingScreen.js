import { useCallback } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

SplashScreen.preventAutoHideAsync();

const onboardingImage = require("../assets/friends.png");

const OnboardingScreen = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({
    "hn-light": require("../assets/fonts/HelveticaNeueLight.otf"),
    "hn-normal": require("../assets/fonts/HelveticaNeueRoman.otf"),
    "hn-semibold": require("../assets/fonts/HelveticaNeueMedium.otf"),
    "hn-bold": require("../assets/fonts/HelveticaNeueBold.otf"),
    "russo-one": require("../assets/fonts/RussoOneRegular.ttf"),
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
    <SafeAreaProvider onLayout={onLayoutRootView} style={styles.container}>
      <Text style={styles.title}>
        Create, join, start and track rides with friends.
      </Text>

      <Image
        source={onboardingImage}
        style={{
          height: "55%",
          width: "80%",
          resizeMode: "contain",
        }}
      />

      <PrimaryButton
        label={"Get started"}
        onPress={() => navigation.navigate("Register")}
      />

      <Text style={styles.helper}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </Text>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: COLORS.darkGray,
  },

  title: {
    fontSize: 30,
    marginTop: 24,
    textAlign: "left",
    fontFamily: "russo-one",
    color: COLORS.lightGray,
  },

  helper: {
    margin: 20,
    color: COLORS.lightGray,
    fontFamily: "hn-normal",
    fontSize: 14,
  },

  link: {
    color: COLORS.green,
    fontFamily: "hn-normal",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default OnboardingScreen;
