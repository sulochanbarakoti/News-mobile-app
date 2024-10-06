import { View, Text, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Discover = ({ navigation }) => {
  return (
    <View className="mx-5 mt-16 space-y-5">
      <View className="bg-slate-300 flex-row p-2 rounded-xl space-x-2">
        <Ionicons name="search" size={24} color="white" />
        <TextInput placeholder="Search" />
      </View>
      <View>
        <View>
          <Text>Categories</Text>
        </View>
      </View>
    </View>
  );
};

export default Discover;
