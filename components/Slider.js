import React from "react";
import { View, Image } from "react-native";

export default function Slider({ data }) {
  return (
    <View>
      <Image
        source={data.image}
        style={{ height: 150, width: 300, borderRadius: 16 }}
      />
    </View>
  );
}
