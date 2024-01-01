import React, { useRef } from "react";
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
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import HeaderText from "../components/HeaderText";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { Requests } from "../components/Requests";
// import { BlurView } from "expo-blur";

const RoomsScreen = ({ navigation }) => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["50%"];

  const handlePresemtModal = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaProvider style={styles.container}>
        <ScrollView style={{ padding: 20 }}>
          <ProfileHeader navigation={navigation} />

          <View style={styles.dashedContainer}>
            <TouchableOpacity
              style={styles.createButton}
              onPress={handlePresemtModal}
            >
              <Text style={styles.buttonText}>Create new room</Text>
              <Ionicons
                name="add-circle"
                size={48}
                color={COLORS.lightCharcol}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.rooms}>
            <Text style={styles.subHeader}>Rooms</Text>
            <Requests />
          </View>

          <View>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              backgroundStyle={styles.modal}
            >
              <View style={styles.modalContent}>
                <HeaderText title={"Create new room"} />
                <InputField label={"Room Title"} />
                <PrimaryButton
                  label={"Create"}
                  onPress={() => {
                    alert("CLICKED.");
                  }}
                />
              </View>
            </BottomSheetModal>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </BottomSheetModalProvider>
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
    marginVertical: 16,
    paddingVertical: 16,
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

  modal: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: COLORS.charcol,
    borderColor: COLORS.charcol,
  },

  modalContent: {
    paddingHorizontal: 20,
  },

  rooms: {
    marginVertical: 20,
  },

  subHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.lightGray,
  },
});

export default RoomsScreen;
