import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { apiService } from "../services/apiService";
import { Loading } from "../components/Loading";

const RoomDetailsScreen = ({ navigation, route }) => {
  const roomId = route.params?.room.id;
  const [roomParticipants, setRoomParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRoom = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.get(`/rooms/${roomId}`);
      setIsLoading(false);

      setRoomParticipants(response.data.room.participants);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    getRoom();
  }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.text}>Room Participants</Text>

      {isLoading ? (
        <Loading />
      ) : (
        <View>
          {roomParticipants.map((participant, index) => (
            <Text style={styles.text} key={index}>
              {participant.username}
            </Text>
          ))}
        </View>
      )}
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
});

export default RoomDetailsScreen;
