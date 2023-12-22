import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RoomsScreen from "../screens/RoomsScreen";
import FriendsScreen from "../screens/FriendsScreen";
import ExploreScreen from "../screens/ExploreScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { COLORS } from "../constants/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.charcol },
        tabBarActiveTintColor: COLORS.pastelYellow,
        tabBarInactiveTintColor: COLORS.lightCharcol,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-friends" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rooms"
        component={RoomsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
