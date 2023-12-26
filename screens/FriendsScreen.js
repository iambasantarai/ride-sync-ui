import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProfileHeader } from "../components/ProfileHeader";
import HeaderText from "../components/HeaderText";
import { Feather, Ionicons } from "@expo/vector-icons";

import { apiService } from "../services/apiService";
import { ListToggler } from "../components/ListToggler";

const FriendsScreen = ({ navigation }) => {
  const [friends, setFriends] = useState([]);
  const [listTab, setListTab] = useState(1);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await apiService.get("/friends");
        setFriends(response.data.friends);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    getFriends();
  }, []);

  const onSelectList = (value) => {
    setListTab(value);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <ProfileHeader navigation={navigation} />

        <View>
          <ListToggler
            selectionMode={1}
            firstOption={"Friends (10)"}
            secondOption={"Requests (3)"}
            onSelectList={onSelectList}
          />
        </View>

        <View>
          {listTab === 1 && (
            <View style={styles.requestCard}>
              <View style={styles.header}>
                <View style={styles.headerContnet}>
                  <Text style={styles.title}>Basanta Rai</Text>
                  <Text style={styles.subtitle}>basanta@yopmail.com</Text>
                </View>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons
                    name="ios-person-add"
                    size={24}
                    color={COLORS.lightCharcol}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {listTab === 2 && (
            <View style={styles.requestCard}>
              <View style={styles.header}>
                <View style={styles.headerContnet}>
                  <Text style={styles.title}>Basanta Rai</Text>
                  <Text style={styles.subtitle}>basanta@yopmail.com</Text>
                </View>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton}>
                  <Feather name="x" size={20} color={COLORS.lightCharcol} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                  <Feather name="check" size={20} color={COLORS.green} />
                </TouchableOpacity>
              </View>
            </View>
          )}
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
  requestCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
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

export default FriendsScreen;
