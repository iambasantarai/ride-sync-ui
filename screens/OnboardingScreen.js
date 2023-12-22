import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const onboardingImage = require("../assets/friends.png");

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
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
    fontFamily: "Roboto",
    color: COLORS.lightGray,
  },

  helper: {
    margin: 20,
    color: COLORS.lightGray,
    fontFamily: "Roboto",
    fontSize: 14,
  },

  link: {
    color: COLORS.green,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default OnboardingScreen;
