import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProfileHeader } from "../components/ProfileHeader";

const RoomsScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <ProfileHeader navigation={navigation} />
        <View style={styles.dashedContainer}>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.buttonText}>Create new room</Text>
            <Ionicons name="add-circle" size={48} color={COLORS.lightCharcol} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: COLORS.darkGray,
  },
  text: {
    fontFamily: "Roboto",
    color: COLORS.white,
  },
  dashedContainer: {
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.charcol,
    borderColor: COLORS.lightCharcol,
    borderStyle: "dashed",
  },
  createButton: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Roboto",
    color: COLORS.lightCharcol,
    fontSize: 24,
  },
});

export default RoomsScreen;
