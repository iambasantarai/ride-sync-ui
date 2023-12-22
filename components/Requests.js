import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";
import { Feather } from "@expo/vector-icons";

const mapImage = require("../assets/map.png");

export const Requests = () => {
  return (
    <View style={styles.requestCard}>
      <View style={styles.header}>
        <Image
          source={mapImage}
          style={{ height: 40, width: 40 }}
          borderRadius={8}
        />
        <View style={styles.headerContnet}>
          <Text style={styles.title}>Cool gang</Text>
          <Text style={styles.subtitle}>Created by Jane</Text>
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
  );
};

const styles = StyleSheet.create({
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
