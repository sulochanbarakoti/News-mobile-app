import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Discover = ({ navigation }) => {
  // Chip component
  const Chip = ({ label, isSelected, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          margin: 5,
          borderRadius: 20,
          backgroundColor: isSelected ? "#FF6347" : "#F0F0F0", // Change background based on selected
        }}
        onPress={onPress}
      >
        <Text style={{ color: isSelected ? "white" : "black" }}>{label}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View className="mx-5 mt-16 space-y-5">
      <View className="bg-slate-300 flex-row p-2 rounded-xl space-x-2">
        <Ionicons name="search" size={24} color="white" />
        <TextInput placeholder="Search" />
      </View>
      <View>
        <View>
          <Text className="font-bold">Categories</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Discover;
