import { View, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "../constants/colors";

export const Loading = () => {
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={COLORS.lightCharcol} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.darkGray,
  },
});
