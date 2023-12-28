import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { COLORS } from "../constants/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProfileHeader } from "../components/ProfileHeader";
import { Feather, Ionicons } from "@expo/vector-icons";

import { apiService } from "../services/apiService";
import { ListToggler } from "../components/ListToggler";
import SearchField from "../components/SearchField";
import { Loading } from "../components/Loading";

const FriendsScreen = ({ navigation }) => {
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [listTab, setListTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null);

  const showToastMessage = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      `${message}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      100,
    );
  };

  const getFriends = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.get("/friends");
      setIsLoading(false);
      setFriends(response.data.friends);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
  const getFriendRequests = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.get("/friends/requests");
      setIsLoading(false);
      setFriendRequests(response.data.requests);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {
    getFriendRequests();
  }, []);

  const onSearchChange = async (query) => {
    setSearchQuery(query);
    try {
      setIsLoading(true);
      const response = await apiService.get(`/users?username=${query}`);
      setIsLoading(false);
      setSearchResults(response.data.users);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const handleAddFriend = async (userId) => {
    try {
      const response = await apiService.post(`/friends/send-request/${userId}`);

      setRequestStatus("success");
      console.log(response.data.message);
    } catch (error) {
      setRequestStatus("failed");
      console.log("ERROR: ", error);
    }
  };

  const handleAcceptRequest = async (requestId) => {
    try {
      const response = await apiService.patch(`/friends/accept/${requestId}`);

      if (response.status === 200) {
        getFriends();
        showToastMessage(response.data.message);
      } else {
        showToastMessage("Failed to accept friend request.");
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const handleDeclineRequest = async (requestId) => {
    try {
      const response = await apiService.patch(`/friends/decline/${requestId}`);

      if (response.status === 200) {
        getFriendRequests();
        showToastMessage(response.data.message);
      } else {
        showToastMessage("Failed to decline friend request.");
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const onSelectList = (value) => {
    setListTab(value);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <ProfileHeader navigation={navigation} />

        <SearchField value={searchQuery} onChangeText={onSearchChange} />

        <ListToggler
          selectionMode={1}
          firstOption={`Friends (${friends.length})`}
          secondOption={`Requests (${friendRequests.length})`}
          onSelectList={onSelectList}
        />
        {requestStatus === "success" && (
          <Text style={styles.successMessage}>
            Friend request sent successfully!
          </Text>
        )}

        {requestStatus === "failed" && (
          <Text style={styles.errorMessage}>
            Failed to send friend request. Please try again.
          </Text>
        )}

        <View style={styles.listWrapper}>
          {isLoading ? (
            <Loading />
          ) : listTab === 1 ? (
            friends.map((friend, index) => (
              <View style={styles.requestCard} key={index}>
                <View style={styles.header}>
                  <View style={styles.headerContnet}>
                    <Text style={styles.title}>{friend.username}</Text>
                    <Text style={styles.subtitle}>{friend.email}</Text>
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
            ))
          ) : (
            friendRequests.map((request, index) => (
              <View style={styles.requestCard} key={index}>
                <View style={styles.header}>
                  <View style={styles.headerContnet}>
                    <Text style={styles.title}>{request.sender.username}</Text>
                    <Text style={styles.subtitle}>{request.sender.email}</Text>
                  </View>
                </View>

                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Feather
                      name="check"
                      size={20}
                      color={COLORS.green}
                      onPress={() => handleAcceptRequest(request.id)}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>
                    <Feather
                      name="x"
                      size={20}
                      color={COLORS.lightCharcol}
                      onPress={() => handleDeclineRequest(request.id)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))
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

  successMessage: {
    color: COLORS.green,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },

  errorMessage: {
    color: COLORS.red,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});

export default FriendsScreen;
