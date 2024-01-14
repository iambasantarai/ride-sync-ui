import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RoomsScreen from "../screens/RoomsScreen";
import FriendsScreen from "../screens/FriendsScreen";
import ExploreScreen from "../screens/ExploreScreen";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants/colors";
import ChatsScreen from "../screens/ChatsScreen";
import RoomDetailsScreen from "../screens/RoomDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RoomDetailsScreen}
        name="RoomDetails"
        options={({ route }) => ({
          title: route.params?.room.name,
          headerStyle: {
            backgroundColor: COLORS.darkGray,
          },
          headerTintColor: COLORS.white,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.charcol,
          borderColor: COLORS.charcol,
        },
        tabBarActiveTintColor: COLORS.pastelYellow,
        tabBarInactiveTintColor: COLORS.lightCharcol,
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
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
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
