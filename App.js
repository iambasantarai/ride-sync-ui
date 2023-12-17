import { useCallback } from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { COLORS } from "./constants/colors";

SplashScreen.preventAutoHideAsync();

const onBoardingImage = require("./assets/friends.png");
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name="Main"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({ navigation }) => {
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
    <SafeAreaProvider onLayout={onLayoutRootView} style={styles.container}>
      <Text style={styles.title}>
        Create, join, start and track rides with friends.
      </Text>

      <Image
        source={onBoardingImage}
        style={{
          height: "55%",
          width: "80%",
          resizeMode: "contain",
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.helper}>
        Already have an account? <Text style={styles.link}>Login</Text>
      </Text>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    alignItems: "center",
    backgroundColor: COLORS.darkGray,
  },

  title: {
    fontSize: 30,
    color: COLORS.lightGray,
    fontFamily: "russo-one",
    textAlign: "left",
    marginTop: 24,
    marginHorizontal: 20,
  },

  button: {
    backgroundColor: COLORS.green,
    padding: 15,
    width: "90%",
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: COLORS.white,
    fontFamily: "rosso-one",
    fontSize: 24,
    fontWeight: "bold",
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

export default App;
