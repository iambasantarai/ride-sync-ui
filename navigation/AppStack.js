import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomDrawer from "../components/CustomDrawer";
import { COLORS } from "../constants/colors";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.green,
        drawerActiveTintColor: COLORS.white,
      }}
    >
      <Drawer.Screen component={HomeScreen} name="Home" />
      <Drawer.Screen component={ProfileScreen} name="Porfile" />
      <Drawer.Screen component={SettingsScreen} name="Settings" />
    </Drawer.Navigator>
  );
};

export default AppStack;
