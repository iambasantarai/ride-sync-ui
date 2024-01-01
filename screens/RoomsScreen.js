import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { COLORS } from "../constants/colors";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProfileHeader } from "../components/ProfileHeader";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import HeaderText from "../components/HeaderText";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { apiService } from "../services/apiService";
import { Loading } from "../components/Loading";
// import { BlurView } from "expo-blur";

const RoomsScreen = ({ navigation }) => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["50%"];

  const handlePresemtModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const [name, setName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rooms, setRooms] = useState([]);

  const showToastMessage = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      `${message}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      100,
    );
  };

  const getRooms = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.get("/rooms");
      setIsLoading(false);

      setRooms(response.data.rooms);

      console.log(rooms);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  const handleCreateRoom = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.post("/rooms", { name });
      setIsLoading(false);

      if (response.status === 200) {
        showToastMessage(response.data.message);
      } else {
        showToastMessage("Failed to create room.");
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const handleDeleteRoom = async (roomId) => {
    try {
      setIsLoading(true);
      const response = await apiService.delete(`/rooms/${roomId}`);
      setIsLoading(false);

      if (response.status === 200) {
        showToastMessage(response.data.message);
        getRooms();
      } else {
        showToastMessage("Failed to delete room.");
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
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
            {isLoading ? (
              <Loading />
            ) : (
              rooms.map((room, index) => (
                <View style={styles.requestCard} key={index}>
                  <View style={styles.header}>
                    <View style={styles.headerContnet}>
                      <Text style={styles.title}>{room.name}</Text>
                      <Text style={styles.subtitle}>
                        {room.creator.username}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Feather name="send" size={20} color={COLORS.green} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                      <MaterialIcons
                        name="delete"
                        size={20}
                        color={COLORS.red}
                        onPress={() => handleDeleteRoom(room.id)}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
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
                <InputField
                  label={"Room Title"}
                  value={name}
                  onChangeText={(text) => setName(text)}
                />

                <PrimaryButton label={"Create"} onPress={handleCreateRoom} />
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

  listWrapper: {
    marginTop: 32,
  },

  requestCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    borderRadius: 16,
    backgroundColor: COLORS.charcol,
  },

  header: {
    display: "flex",
    flexDirection: "row",
  },

  headerContnet: {
    marginHorizontal: 20,
  },

  title: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "800",
    fontFamily: "Roboto",
  },

  subtitle: {
    fontSize: 12,
    color: COLORS.lightCharcol,
    fontWeight: "600",
    fontFamily: "Roboto",
  },

  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },

  actionButton: {
    marginHorizontal: 8,
  },
});

export default RoomsScreen;
