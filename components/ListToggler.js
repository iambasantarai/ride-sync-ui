import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

export const ListToggler = ({
  selectionMode,
  firstOption,
  secondOption,
  onSelectList,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchList = (value) => {
    setSelectionMode(value);
    onSelectList(value);
  };

  return (
    <View
      style={{
        marginTop: 8,
        height: 44,
        width: "100%",
        backgroundColor: COLORS.charcol,
        borderRadius: 16,
        borderColor: COLORS.lightCharcol,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchList(1)}
        style={{
          flex: 1,
          backgroundColor:
            getSelectionMode === 1 ? COLORS.green : COLORS.charcol,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode === 1 ? COLORS.white : COLORS.lightGray,
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Roboto",
          }}
        >
          {firstOption}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchList(2)}
        style={{
          flex: 1,
          backgroundColor:
            getSelectionMode === 2 ? COLORS.green : COLORS.charcol,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: getSelectionMode === 2 ? COLORS.white : COLORS.lightGray,
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Roboto",
          }}
        >
          {secondOption}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
