import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../constants/colors";
import { AuthContext } from "../context/AuthContext";

const ProfileScreen = () => {
  const { user, getProfile } = useContext(AuthContext);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Image
          source={require("../assets/whoknows.png")}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginBottom: 10,
          }}
        />
      </View>
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.darkGray,
  },
  username: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
    color: COLORS.white,
  },

  email: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: COLORS.lightGray,
  },
});

export default ProfileScreen;
