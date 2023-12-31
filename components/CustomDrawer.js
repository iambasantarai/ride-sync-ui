import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants/colors";
import { AuthContext } from "../context/AuthContext";
import { apiService } from "../services/apiService";

const CustomDrawer = (props) => {
  const { logout } = useContext(AuthContext);

  const [user, setUser] = useState({});
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await apiService.get("/users/profile");
        setUser(response.data.user);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    getProfile();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.green }}
      >
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
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontFamily: "Roboto",
            }}
          >
            {user.username}
          </Text>
        </View>

        <View
          style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: 10 }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: COLORS.darkGray,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 16,
                marginLeft: 5,
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
