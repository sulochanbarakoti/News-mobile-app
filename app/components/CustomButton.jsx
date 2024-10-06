import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyle }) => {
  return (
    <View className="flex justify-center items-center">
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-primary rounded-xl justify-center items-center ${containerStyle}`}
      >
        <Text className={`text-white font-semibold text-lg px-5`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
